"use client";

import { WHATSAPP_LINK, STORE } from "@/lib/constants";
import { WhatsAppIcon } from "./icons";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 border-b border-white/[0.06]"
          : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(6,11,24,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
            {STORE.name}
          </span>
          <span className="hidden sm:inline-block rounded-full border border-[#4A9BD9]/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#4A9BD9]">
            Desde 2013
          </span>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full bg-[#075E54] px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-[#128C7E] hover:scale-[1.03] active:scale-100 ${
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          style={{ boxShadow: "0 0 20px rgba(7,94,84,0.25)" }}
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
