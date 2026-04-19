"use client";

import { WHATSAPP_LINK, STORE } from "@/lib/constants";
import { WhatsAppIcon, StarIcon } from "./icons";
import { useInView } from "@/hooks/use-in-view";

export function CtaFinal() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "#060B18" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,95,138,0.2),transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] animate-glow-pulse" style={{ background: "rgba(30,95,138,0.1)" }} />

      <div className="noise absolute inset-0 pointer-events-none" />

      <div
        className={`relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8 ${
          inView ? "animate-scale-in" : "opacity-0"
        }`}
      >
        <div className="mb-8 glass inline-flex items-center gap-2 rounded-full px-4 py-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-3.5 w-3.5 text-amber-400 star-glow" />
            ))}
          </div>
          <span className="text-xs text-blue-200/50">
            {STORE.reviews}+ clientes satisfeitos
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
          Não espere o modelo
          <br />
          <span className="text-gradient-brand">que você quer acabar</span>
        </h2>
        <p className="mt-5 text-lg text-blue-200/50">
          Estoque limitado e rotativo. Fale agora e garanta o seu.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer group relative inline-flex items-center gap-3 rounded-full bg-[#075E54] px-9 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#128C7E] hover:scale-[1.03] active:scale-100"
            style={{ boxShadow: "0 0 50px rgba(7,94,84,0.35), 0 0 100px rgba(7,94,84,0.1)" }}
          >
            <span className="absolute inset-0 rounded-full border-2 border-[#075E54]/30 animate-[pulse-ring_2s_ease-out_infinite]" />
            <WhatsAppIcon className="relative h-6 w-6" />
            <span className="relative">Quero ver os modelos agora</span>
          </a>
          <p className="text-sm text-blue-300/30">
            Resposta em minutos &bull; Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
