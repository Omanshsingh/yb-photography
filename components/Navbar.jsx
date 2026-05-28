"use client";
import { useEffect, useState } from "react";

const leftLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Films", href: "#films" },
];

const rightLinks = [
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ——— TOP BAR (desktop only) ——— */}
      <div className="hidden lg:block absolute w-full top-0 z-50 bg-yb-dark border-b border-white/[0.08] h-[36px]">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-start gap-8 h-full">
          <a
            href="tel:+918108061901"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            +91 81080 61901
          </a>
          <a
            href="https://wa.me/918108061901"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            ybphotography@gmail.com
          </a>
        </div>
      </div>

      {/* ——— MAIN HEADER ——— */}
      <header
        className={`fixed w-full z-50 transition-all duration-350 ${
          scrolled
            ? "top-0 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "top-0 lg:top-[36px] bg-white"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
          {/* ——— DESKTOP: 3-column centered logo layout (hidden below lg) ——— */}
          <div className="hidden lg:flex items-center h-[70px]">
            {/* Left nav — 40% */}
            <nav className="flex-[0_0_40%] flex items-center justify-start gap-0">
              {leftLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-yb-dark hover:text-yb-dark/70 transition-colors pr-10 py-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Center logo — 20% */}
            <div className="flex-[0_0_20%] flex items-center justify-center">
              <a href="#" className="flex flex-col items-center">
                <span className="font-display text-[28px] font-bold text-[#c69a53] leading-none">
                  YB
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#666] mt-0.5">
                  Photography
                </span>
              </a>
            </div>

            {/* Right nav — 40% */}
            <nav className="flex-[0_0_40%] flex items-center justify-end gap-0">
              {rightLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-yb-dark hover:text-yb-dark/70 transition-colors pl-10 py-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ——— MOBILE/TABLET: Logo left, hamburger right (visible below lg) ——— */}
          <div className="flex lg:hidden items-center justify-between h-[80px]">
            <a href="#" className="flex items-center gap-2">
              <span className="font-display text-[32px] font-bold text-[#c69a53] leading-none">
                YB
              </span>
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#666] pt-[2px]">
                Photography
              </span>
            </a>
            <button
              className="flex flex-col gap-[6px] p-2 z-[1001] mr-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[30px] h-[2px] bg-black transition-all ${
                  menuOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-[30px] h-[2px] bg-black transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-[30px] h-[2px] bg-black transition-all ${
                  menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ——— MOBILE OVERLAY ——— */}
      <div
        className={`fixed inset-0 bg-yb-dark/[0.97] z-[999] flex flex-col items-center justify-center gap-7 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white text-xl z-[1002]"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        {[...leftLinks, ...rightLinks].map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className="font-display text-2xl text-white hover:text-yb-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/918108061901"
          className="text-xs font-semibold tracking-[0.12em] uppercase bg-yb-gold text-yb-dark px-8 py-4 mt-4 hover:bg-yb-gold-light transition-all"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
