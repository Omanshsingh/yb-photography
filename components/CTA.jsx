export default function CTA() {
  return (
    <section className="relative bg-yb-charcoal text-center py-16 md:py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.85]"
        style={{ backgroundImage: "url('https://beatsinthemoment.com/wp-content/uploads/2025/09/DSC03042-2.webp')" }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-[1] max-w-[720px] mx-auto px-5 md:px-8">
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-yb-gold mb-3">
          Get Started
        </p>
        <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] font-normal leading-[1.15] text-white mb-4 md:mb-5 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          Make Your Wedding a Wonderful Story
        </h2>
        <p className="text-sm md:text-base text-white/65 max-w-[560px] mx-auto mb-8 md:mb-9 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          Your journey together is more than a single day — it&apos;s a story
          waiting to be remembered. Let YB Photography create a stunning,
          heartfelt chronicle of your wedding.
        </p>
        <a
          href="https://wa.me/918108061901?text=Hi%20YB%20Photography%2C%20I%27d%20like%20to%20get%20a%20quote"
          className="inline-block text-[11px] md:text-[13px] font-semibold tracking-[0.12em] uppercase bg-yb-gold text-yb-dark px-8 py-4 hover:bg-yb-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,160,85,0.3)] transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Quote on WhatsApp
        </a>
      </div>
    </section>
  );
}
