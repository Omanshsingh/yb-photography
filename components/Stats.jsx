"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const tick = () => {
            current += step;
            if (current >= target) { setCount(target); }
            else { setCount(Math.floor(current)); requestAnimationFrame(tick); }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="bg-yb-warm py-16 md:py-24 lg:py-28 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
        {/* Stat 1 */}
        <div className="text-center order-2 md:order-1">
          <div className="font-display text-5xl md:text-6xl lg:text-7xl text-yb-dark">
            <Counter target={80} />
            <span className="text-yb-gold text-3xl md:text-4xl lg:text-5xl ml-1">+</span>
          </div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.1em] uppercase text-yb-dark mt-2 mb-3">
            Projects Completed
          </p>
          <p className="text-sm text-yb-muted leading-relaxed max-w-[280px] mx-auto">
            From intimate weddings to grand celebrations, each project reflects our dedication to artistry.
          </p>
        </div>

        {/* Collage — matching ref: 3 rounded oval images with gradient borders */}
        <div className="relative h-[320px] md:h-[420px] lg:h-[500px] order-1 md:order-2">
          {/* Center big image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] md:w-[55%] h-[75%] rounded-[250px] p-[2px] bg-gradient-to-b from-yb-gold to-yb-warm z-[2]">
            <div className="w-full h-full rounded-[250px] border-[10px] md:border-[28px] border-yb-warm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" alt="Wedding" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Left bottom */}
          <div className="absolute bottom-0 left-0 w-[40%] h-[50%] md:h-[55%] rounded-[250px] p-[2px] bg-gradient-to-r from-yb-warm to-yb-gold z-[1]">
            <div className="w-full h-full rounded-[250px] border-[7px] md:border-[21px] border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80" alt="Pre-wedding" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right bottom */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[50%] md:h-[55%] rounded-[250px] p-[2px] bg-gradient-to-l from-yb-warm to-yb-gold z-[1]">
            <div className="w-full h-full rounded-[250px] border-[7px] md:border-[21px] border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="text-center order-3">
          <div className="font-display text-5xl md:text-6xl lg:text-7xl text-yb-dark">
            <Counter target={60} />
            <span className="text-yb-gold text-3xl md:text-4xl lg:text-5xl ml-1">+</span>
          </div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.1em] uppercase text-yb-dark mt-2 mb-3">
            Happy Couples
          </p>
          <p className="text-sm text-yb-muted leading-relaxed max-w-[280px] mx-auto">
            Our couples&apos; joy and glowing reviews inspire us to keep raising the bar with every frame.
          </p>
        </div>
      </div>
    </section>
  );
}
