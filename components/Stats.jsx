"use client";
import { useEffect, useRef, useState } from "react";

function SlowEasedCounter({ target, active }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (active && !started.current) {
      started.current = true;
      const duration = 4600; // Cinematic 4.6 seconds of ultra-slow, elegant pacing
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Highly customized exponential deceleration (easeOutExpo)
        // Starts smoothly and tapers off into an incredibly slow, deliberate, watch-like tick
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(ease * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else if (!active) {
      setCount(0);
      started.current = false;
    }
  }, [active, target]);

  // tabular-nums guarantees that digits align perfectly and do not jitter/shake horizontally
  return <span className="tabular-nums font-body font-extralight tracking-tight">{count}</span>;
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.1 }
    );
    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-yb-warm py-24 md:py-32 px-5 md:px-8 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-center">
        
        {/* Stat 1 — Projects Completed */}
        <div className={`text-center order-2 md:order-1 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
          active ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-md"
        }`}>
          <div className="flex items-start justify-center font-body font-extralight text-7xl md:text-8xl text-yb-charcoal leading-none tracking-tighter select-none">
            <SlowEasedCounter target={80} active={active} />
            <span className="text-yb-gold font-light ml-1 relative top-[-4px] md:top-[-6px]">+</span>
          </div>
          <p className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-yb-dark mt-6 mb-3">
            Projects Completed
          </p>
          <p className="text-[13px] md:text-sm text-yb-muted leading-relaxed max-w-[280px] mx-auto font-light">
            From intimate weddings to grand celebrations, each project reflects our dedication to artistry.
          </p>
        </div>

        {/* Collage — 3 rounded oval images with gradient borders */}
        <div className={`relative h-[340px] md:h-[440px] lg:h-[500px] order-1 md:order-2 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
          active ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-md"
        }`}>
          <div className="relative w-full h-full">
            {/* Center big image */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[75%] rounded-[250px] p-[2px] bg-gradient-to-b from-yb-gold to-yb-warm z-[2]">
              <div className="w-full h-full rounded-[250px] border-[8px] md:border-[18px] border-yb-warm overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
                  alt="Wedding celebration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Left bottom */}
            <div className="absolute bottom-0 left-0 w-[40%] h-[50%] md:h-[55%] rounded-[250px] p-[2px] bg-gradient-to-r from-yb-warm to-yb-gold z-[1]">
              <div className="w-full h-full rounded-[250px] border-[6px] md:border-[14px] border-white overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80"
                  alt="Pre-wedding shoot"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right bottom */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[50%] md:h-[55%] rounded-[250px] p-[2px] bg-gradient-to-l from-yb-warm to-yb-gold z-[1]">
              <div className="w-full h-full rounded-[250px] border-[6px] md:border-[14px] border-white overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                  alt="Wedding portrait"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stat 2 — Happy Couples */}
        <div className={`text-center order-3 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
          active ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-md"
        }`}>
          <div className="flex items-start justify-center font-body font-extralight text-7xl md:text-8xl text-yb-charcoal leading-none tracking-tighter select-none">
            <SlowEasedCounter target={60} active={active} />
            <span className="text-yb-gold font-light ml-1 relative top-[-4px] md:top-[-6px]">+</span>
          </div>
          <p className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-yb-dark mt-6 mb-3">
            Happy Couples
          </p>
          <p className="text-[13px] md:text-sm text-yb-muted leading-relaxed max-w-[280px] mx-auto font-light">
            Our couples&apos; joy and glowing reviews inspire us to keep raising the bar with every frame.
          </p>
        </div>

      </div>
    </section>
  );
}
