export default function About() {
  const videos = [
    "https://www.youtube.com/embed/ON4aMiFZr8M",
    "https://www.youtube.com/embed/Y_iLlFtuNzI",
    "https://www.youtube.com/embed/oNIWs4B-bTU"
  ];

  return (
    <section id="about" className="bg-yb-ivory py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Top: 2-column Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mb-16">
          {/* Left Column: Heading */}
          <div>
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-yb-gold mb-3">
              Who We Are
            </p>
            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] font-normal leading-[1.15] text-yb-dark">
              Making Precious Moments of Wedding.
            </h2>
          </div>

          {/* Right Column: Paragraphs & Button */}
          <div>
            <p className="text-[15px] text-yb-muted leading-[1.85] mb-4">
              At YB Photography, led by Yadnesh Bagwe, we see ourselves as
              memory-keepers — dedicated artists who find magic in everyday moments.
              Based in Mumbai, we've grown into a trusted name for weddings,
              pre-wedding shoots, portraits, and events across Maharashtra.
            </p>
            <p className="text-[15px] text-yb-muted leading-[1.85] mb-8">
              We believe every celebration is a unique story waiting to be told —
              filled with emotions, connections, and unforgettable experiences. Our
              passion lies in capturing what's real, raw, and beautiful.
            </p>
            <a
              href="#films"
              className="inline-block text-[13px] md:text-[15px] font-medium bg-[#c69a53] text-white px-8 py-3.5 hover:bg-[#b08745] transition-all"
            >
              Check our Videos
            </a>
          </div>
        </div>

        {/* Bottom: 3-column Video Grid */}
        <div id="films" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((src, i) => (
            <div key={i} className="relative pt-[56.25%] bg-yb-dark overflow-hidden shadow-sm">
              <iframe
                className="absolute inset-0 w-full h-full border-none"
                src={src}
                title={`YB Photography Film ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
