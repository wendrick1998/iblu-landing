"use client";

import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./icons";
import { useEffect, useState } from "react";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#075E54] text-white transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 sm:h-16 sm:w-16 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ boxShadow: "0 4px 20px rgba(7,94,84,0.3)" }}
    >
      <span className="absolute inset-0 rounded-full border border-[#075E54]/30 animate-[pulse-ring_2.5s_ease-out_infinite]" />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
