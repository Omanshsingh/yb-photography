import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Story />
      <Portfolio />
      <About />
      <WhyChooseUs />
      <CTA />
      <Testimonials />

      {/* FAQ CTA — matching ref's final CTA section */}
      <section className="relative bg-yb-dark text-center overflow-hidden" style={{
        backgroundImage: "url('https://beatsinthemoment.com/wp-content/uploads/2025/09/KKKL6105.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-[1] py-20 md:py-28 lg:py-36 px-5 md:px-8 max-w-[711px] mx-auto">
          <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] font-normal leading-[1.15] text-white mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            Still Have a Question?
          </h2>
          <p className="text-sm md:text-base text-white/65 max-w-[560px] mx-auto mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            We&apos;re here to help! If you have any queries or need more
            information about our services, feel free to reach out.
          </p>
          <a
            href="#contact"
            className="inline-block text-[11px] md:text-[13px] font-semibold tracking-[0.12em] uppercase bg-yb-gold text-yb-dark px-8 py-4 hover:bg-yb-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,160,85,0.3)] transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
