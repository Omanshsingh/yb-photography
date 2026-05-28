export default function Story() {
  return (
    <section className="relative bg-yb-charcoal py-16 md:py-28 lg:py-36 text-center overflow-hidden">
      {/* Background video overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="relative z-[1] max-w-[720px] mx-auto px-5 md:px-8">
        <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-white mb-5 md:mb-6">
          Capturing Every Beat
          <br />
          of Your Story
        </h2>
        <p className="text-[15px] md:text-[17px] text-white/70 leading-[1.85]">
          Every wedding is a universe of unscripted moments — a stolen glance, a
          teardrop of joy, the warmth of a family embrace. At YB Photography, we
          don&apos;t just take photos; we preserve the poetry of your most cherished
          day, so you can relive it forever.
        </p>
      </div>
    </section>
  );
}
