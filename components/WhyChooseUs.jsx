const features = [
  { icon: "✦", title: "Professional", desc: "From your first inquiry to the final image, our attentive team ensures you feel supported, valued, and at ease as your special moments become art." },
  { icon: "✦", title: "Experienced Eye", desc: "With years of experience and a genuine love for storytelling, Yadnesh has captured countless weddings — each photograph reflecting artistry and the real pulse of your celebration." },
  { icon: "✦", title: "Creative Vision", desc: "Whether it's a candid, playful scene or a bold cinematic vision — our creativity transforms the ordinary into the extraordinary for every client." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-yb-warm py-12 md:py-20 lg:py-28 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Images — ref uses rounded oval with gradient border */}
        <div className="relative h-[300px] md:h-[450px] lg:h-[540px]">
          <div className="absolute top-0 left-0 w-[65%] md:w-[70%] h-[60%] md:h-[65%] rounded-[250px] p-[2px] bg-gradient-to-r from-yb-gold to-yb-warm z-[2] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <div className="w-full h-full rounded-[250px] border-[14px] md:border-[28px] border-yb-warm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80" alt="Wedding couple" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[55%] md:w-[50%] h-[50%] md:h-[55%] rounded-[250px] p-[2px] bg-gradient-to-r from-yb-warm to-yb-gold z-[1]">
            <div className="w-full h-full rounded-[250px] border-[10px] md:border-[21px] border-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=500&q=80" alt="Wedding ceremony" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-yb-gold mb-3 text-center md:text-left">
            Why Choose Us
          </p>
          <h2 className="font-display text-[24px] sm:text-[30px] md:text-[40px] font-normal leading-[1.15] text-yb-dark mb-6 md:mb-8 text-center md:text-left">
            Adding the Memories of Every Moment
          </h2>
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 md:gap-5 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-yb-gold-dim text-yb-gold text-base md:text-lg flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-normal text-yb-dark mb-1">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-sm text-yb-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
