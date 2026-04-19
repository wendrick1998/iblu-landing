"use client";

import { StarIcon } from "./icons";
import { STORE } from "@/lib/constants";
import { useInView } from "@/hooks/use-in-view";
import { useSpotlight } from "@/hooks/use-spotlight";

const testimonials = [
  {
    text: "Ótimo atendimento, o Rafael é um excelente profissional. Bons produtos!",
    author: "Avaliação no Google",
  },
  {
    text: "Super recomendado, atenciosos, prestativos, e produto de qualidade.",
    author: "Avaliação no Google",
  },
  {
    text: "Lugar top, atendimento excelente, produto de qualidade! Vendedor Rafael.",
    author: "Avaliação no Google",
  },
  {
    text: "Atendimento e assistência de qualidade e agilizada. Fui atendido pelo Daniel, ótimo profissional.",
    author: "Avaliação no Google",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-amber-400 star-glow" />
      ))}
    </div>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView();
  const { containerRef, handleMouseMove } = useSpotlight();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "#091729" }}>
      <div className="section-divider" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Prova Social
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Quem comprou, recomenda
          </h2>

          <div className="mt-6 glass inline-flex items-center gap-4 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-amber-400 star-glow" />
              ))}
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                {STORE.rating}
              </span>
              <span className="text-sm text-blue-200/45">
                {STORE.reviews} avaliações
              </span>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glow-card p-6 sm:p-7 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${(i + 1) * 100}ms` : undefined }}
            >
              <div className="relative z-10">
                <Stars />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-blue-100/65">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-medium text-[#4A9BD9]">
                  &mdash; {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
