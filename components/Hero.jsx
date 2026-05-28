"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const playerRef = useRef(null);
  const checkIntervalRef = useRef(null);

  useEffect(() => {
    // Dynamically load YouTube IFrame Player API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    const initPlayer = () => {
      playerRef.current = new window.YT.Player("ytPlayer", {
        videoId: "Y_iLlFtuNzI",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 0, // We handle looping programmatically for seamless transition
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          origin: typeof window !== "undefined" ? window.location.origin : "",
          start: 3, // Start 3 seconds in to skip any intro black frame
          end: 80,  // Keep a high quality 77-second loop
          vq: "hd1080", // Suggest HD quality
        },
        events: {
          onReady: (e) => {
            e.target.playVideo();
            e.target.mute();
            if (typeof e.target.setPlaybackQuality === "function") {
              e.target.setPlaybackQuality("hd1080");
            }
            
            // Set up a high-frequency interval to check current time for seamless looping
            if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
            checkIntervalRef.current = setInterval(() => {
              if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
                const currentTime = playerRef.current.getCurrentTime();
                // Seek back to start 1.5 seconds before the hard limit (80s)
                // This prevents YouTube's player from ever entering the native "ENDED" state
                // which causes the black flash/spinner/reload screen.
                if (currentTime >= 78.5) {
                  playerRef.current.seekTo(3, true);
                }
              }
            }, 250);
          },
          onStateChange: (e) => {
            // Backup loop handling in case the interval is delayed
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(3, true);
              e.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
      // Clean up player instance on unmount
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-yb-dark">
      {/* Video Background */}
      <div className="hero-video-wrap absolute inset-0 overflow-hidden pointer-events-none">
        <div id="ytPlayer" />
      </div>

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
