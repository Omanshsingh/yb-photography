"use client";
import { useEffect, useState } from "react";

const reviews = [
  { text: "YB Photography made our wedding truly magical. Every candid moment, every emotional frame — they captured it all beautifully. The team was professional, patient, and incredibly talented. Highly recommended!", name: "Rohit & Sneha", venue: "Mumbai Wedding" },
  { text: "We couldn't have asked for a better photographer. Yadnesh and his team brought our pre-wedding shoot to life with stunning locations and creative direction. The photos exceeded our wildest expectations!", name: "Amit & Priya", venue: "Pre-Wedding Shoot" },
  { text: "Amazing team and very kind people, super enthusiastic and full of energy. The output has been better than we expected. All our guests were amazed by the same-day edit. 10/10 would recommend!", name: "Varun & Meera", venue: "Destination Wedding, Rajasthan" },
  { text: "Professional, creative, and so easy to work with. YB Photography understood our vision perfectly and delivered photos that tell the real story of our day. We'll treasure these forever.", name: "Darshan & Kajal", venue: "Mumbai Wedding" },
  { text: "Right from the start of the wedding to the end, it's been a pleasure working with Yadnesh and his team. The pictures and videos have come out better than we had ever dreamt!", name: "Siddharth & Jeel", venue: "Karjat Destination" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxSlide = Math.max(0, reviews.length - perView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p >= maxSlide ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  const cardW = 100 / perView;

  return (
    <section id="testimonials" className="bg-white py-14 md:py-20 lg:py-24 px-5 md:px-8 text-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-display text-[28px] sm:text-[34px] md:text-[42px] lg:text-[56px] font-light leading-tight text-yb-dark mb-2">
          What Our <span className="text-yb-gold">Couples</span> Say
        </h2>
        <p className="text-sm md:text-base text-yb-muted max-w-[500px] mx-auto mb-10 md:mb-14">
          From first look to forever memories — hear it straight from those we&apos;ve captured.
        </p>

        <div className="overflow-hidden px-2 md:px-5">
          <div
            className="flex gap-4 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${current * cardW}%)` }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-[#F4EBDC] rounded-[10px] border border-[#E9EAED] p-8 md:p-10 pt-10 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                style={{ width: `calc(${cardW}% - 12px)` }}
              >
                <div className="font-display text-4xl text-yb-dark/20 leading-none mb-3">❝</div>
                <p className="text-[13px] md:text-sm text-[#666] leading-[1.8] mb-6 min-h-[180px] md:min-h-[200px]">
                  {r.text}
                </p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yb-gold/20 border-[3px] md:border-[5px] border-white shadow-[20px_20px_40px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center text-yb-gold font-display text-lg md:text-xl">
                    {r.name.charAt(0)}
                  </div>
                </div>
                <strong className="block text-sm md:text-[15px] text-black">{r.name}</strong>
                <span className="text-xs text-black/50">{r.venue}</span>
                <div className="text-yb-gold text-sm mt-2 tracking-[3px]">★★★★★</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-10 md:mt-12">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-[#2575fc] scale-125" : "bg-[#e7e7e7]"
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
