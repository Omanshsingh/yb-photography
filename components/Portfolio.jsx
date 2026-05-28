const items = [
  { label: "Weddings", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { label: "Pre-Wedding", img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80" },
  { label: "Portraits", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
  { label: "Events", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-yb-warm py-12 md:py-16 lg:py-20 text-center">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-yb-gold mb-3">
          Our Work
        </p>
        <h2 className="font-display text-[28px] sm:text-[34px] md:text-[45px] font-normal leading-[1.15] text-yb-dark mb-3">
          The Art of <span className="text-yb-gold">Wedding</span> Photography
        </h2>
        <p className="text-sm md:text-base text-yb-muted max-w-[580px] mx-auto mb-8 md:mb-12">
          Every frame tells a story — candid, cinematic, and deeply personal.
        </p>
      </div>

      {/* Accordion — vertical on mobile, horizontal on desktop */}
      <div className="flex flex-col md:flex-row h-auto md:h-[460px] gap-[6px] overflow-hidden">
        {items.map((item) => (
          <div
            key={item.label}
            className="accordion-item relative flex-1 h-[160px] md:h-auto cursor-pointer overflow-hidden hover:flex-[3.5] group"
            style={{ "--accent-img": `url('${item.img}')` }}
          >
            <span className="absolute bottom-5 left-5 z-[1] font-display text-xl md:text-[23px] text-white opacity-100 md:opacity-0 md:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
