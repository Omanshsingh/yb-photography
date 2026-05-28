"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-yb-dark">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/YTDown_YouTube_Tanmay-_-Uttara-Wedding-Pre-Wedding-Teas_Media_Y_iLlFtuNzI_002_720p.mp4" type="video/mp4" />
      </video>

      {/* Modern, high-end cinematic grid pattern to mask upscaling blur on portrait mobile displays */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.22)_1px,transparent_1px)] [background-size:3px_3px] z-[1] pointer-events-none opacity-70 md:opacity-30 mix-blend-overlay" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yb-dark/50 via-yb-dark/35 to-yb-dark/60 z-[1]" />

      {/* SVG Curve */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-[2] leading-[0]">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" fill="#FAF8F5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-[700px] px-5 md:px-6">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-yb-gold mb-4 md:mb-5">
          Yadnesh Bagwe Photography
        </p>
        <h1 className="font-display text-[38px] sm:text-[50px] md:text-[64px] lg:text-[80px] font-normal leading-[1.05] text-white mb-4 md:mb-5">
          Your Life
          <br />
          <em className="italic text-yb-gold-light">in Our Lens</em>
        </h1>
        <p className="text-sm md:text-base text-white/70 mb-8 md:mb-9 tracking-wide">
          Crafting timeless stories through candid, cinematic photography
        </p>
        <a
          href="https://wa.me/918108061901"
          className="inline-block text-[11px] md:text-[13px] font-semibold tracking-[0.12em] uppercase bg-yb-gold text-yb-dark px-8 py-4 hover:bg-yb-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,160,85,0.3)] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Date
        </a>
      </div>

    </section>
  );
}
