"use client";

import { WHATSAPP_LINK, STORE } from "@/lib/constants";
import { WhatsAppIcon, StarIcon } from "./icons";
import { useCounter } from "@/hooks/use-counter";
import { useInView } from "@/hooks/use-in-view";

export function Hero() {
  const { ref, inView } = useInView(0.1);
  const years = useCounter(13, 1800, 0, inView);
  const reviews = useCounter(179, 2000, 0, inView);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "#060B18" }}
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B18] via-[#0a1a35] to-[#0c1e3a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(30,95,138,0.35),transparent)]" />
        {/* Aurora mesh */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] animate-glow-pulse" style={{ background: "rgba(30,95,138,0.08)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px] animate-glow-pulse" style={{ background: "rgba(74,155,217,0.06)", animationDelay: "2s" }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-white/[0.03] rounded-full animate-float" />
      <div className="absolute bottom-32 right-[12%] w-24 h-24 border border-white/[0.03] rounded-2xl rotate-12 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] right-[6%] w-2 h-2 rounded-full bg-[#4A9BD9]/20 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[30%] left-[5%] w-1.5 h-1.5 rounded-full bg-amber-400/20 animate-float" style={{ animationDelay: "4s" }} />

      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-28 pb-24 sm:px-8 sm:py-32 lg:py-36">
        <div className="flex flex-col items-center text-center">
          {/* Rating badge */}
          <div className="glass rounded-full px-5 py-2.5 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 text-amber-400 star-glow" />
              ))}
            </div>
            <div className="w-px h-4 bg-white/15" />
            <span className="text-sm font-medium text-blue-100/80 tracking-wide">
              {STORE.rating} &bull; {STORE.reviews} avaliações no Google
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mt-8 font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Seu Próximo iPhone
            <br />
            <span className="text-gradient-brand">Está Aqui</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl text-blue-200/50">
            Aparelhos originais, revisados e com garantia real.
            <br className="hidden sm:block" />
            Atendimento direto, sem enrolação — você escolhe, a gente entrega.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group relative inline-flex items-center gap-3 rounded-full bg-[#075E54] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#128C7E] hover:scale-[1.03] active:scale-100"
              style={{ boxShadow: "0 0 40px rgba(7,94,84,0.3), 0 0 80px rgba(7,94,84,0.1)" }}
            >
              <span className="absolute inset-0 rounded-full border border-[#075E54]/30 animate-[pulse-ring_2.5s_ease-out_infinite]" />
              <WhatsAppIcon className="relative h-6 w-6" />
              <span className="relative">Ver modelos disponíveis</span>
            </a>
            <p className="text-sm tracking-wide text-blue-300/35">
              Atendimento em minutos &bull; Sem compromisso
            </p>
          </div>

          {/* Animated counters */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-14">
            {[
              { value: `${years}+`, label: "anos no mercado" },
              { value: `${reviews}+`, label: "clientes satisfeitos" },
              { value: STORE.rating, label: "no Google" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl tabular-nums transition-colors group-hover:text-[#4A9BD9]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-blue-300/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30 animate-fade-in" style={{ animation: "fade-up 1.5s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
