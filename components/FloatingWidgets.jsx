"use client";
import { useEffect, useState } from "react";

export default function FloatingWidgets() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/918108061901"
        className="whatsapp-float-btn fixed bottom-5 right-5 md:bottom-7 md:right-7 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] z-[999] hover:scale-110 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="#fff">
          <path d="M16.004 0C7.175 0 .004 7.163.004 15.983c0 2.817.736 5.573 2.137 7.998L.011 32l8.258-2.166a15.94 15.94 0 007.735 1.975C24.833 31.81 32 24.647 32 15.827 32 7.163 24.833 0 16.004 0zm0 29.33a13.47 13.47 0 01-6.864-1.88l-.493-.293-5.108 1.34L4.902 23.514l-.321-.512A13.38 13.38 0 012.48 15.983C2.48 8.53 8.543 2.475 16.004 2.475c7.453 0 13.52 6.055 13.52 13.508 0 7.445-6.067 13.348-13.52 13.348zm7.418-10.028c-.407-.203-2.407-1.188-2.78-1.324-.374-.135-.646-.203-.917.203-.271.407-1.052 1.324-1.29 1.596-.237.271-.475.305-.882.102-.407-.204-1.718-.633-3.273-2.02-1.21-1.078-2.027-2.41-2.264-2.818-.237-.407-.025-.627.178-.83.183-.183.407-.475.61-.713.204-.237.271-.407.407-.678.135-.271.068-.508-.034-.712-.102-.203-.917-2.21-1.256-3.025-.33-.795-.666-.687-.917-.7l-.78-.012c-.271 0-.712.102-1.085.508-.373.407-1.424 1.392-1.424 3.393s1.458 3.936 1.66 4.207c.204.271 2.87 4.38 6.953 6.142.971.42 1.73.67 2.322.858.976.31 1.865.266 2.568.161.783-.117 2.407-.984 2.747-1.934.34-.95.34-1.765.237-1.934-.101-.17-.372-.271-.78-.475z" />
        </svg>
      </a>

      <button
        className={`fixed bottom-5 right-20 md:bottom-7 md:right-24 w-11 h-11 bg-yb-dark text-white text-lg flex items-center justify-center z-[999] hover:bg-yb-gold hover:text-yb-dark transition-all ${
          showScroll ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}
