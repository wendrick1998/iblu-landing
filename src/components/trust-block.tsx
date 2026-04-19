"use client";

import { ShieldCheckIcon, StoreIcon, CheckCircleIcon } from "./icons";
import { useInView } from "@/hooks/use-in-view";
import { useSpotlight } from "@/hooks/use-spotlight";

const badges = [
  {
    icon: ShieldCheckIcon,
    label: "Compra Segura",
    desc: "Pagamento protegido e nota fiscal",
  },
  {
    icon: StoreIcon,
    label: "Loja Física",
    desc: "Visite nosso espaço em Blumenau",
  },
  {
    icon: CheckCircleIcon,
    label: "Garantia Real",
    desc: "Todos os aparelhos com garantia",
  },
];

export function TrustBlock() {
  const { ref, inView } = useInView();
  const { containerRef, handleMouseMove } = useSpotlight();

  return (
    <section ref={ref} className="relative py-20 sm:py-28" style={{ background: "#0c1e3a" }}>
      <div className="section-divider" />

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="mx-auto max-w-6xl px-5 sm:px-8"
      >
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className={`glow-card p-6 sm:p-8 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${(i + 1) * 150}ms` : undefined }}
            >
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A9BD9]/10">
                  <b.icon className="h-6 w-6 text-[#4A9BD9]" />
                </div>
                <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                  {b.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-blue-200/40">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 sm:mt-20 grid sm:grid-cols-2 gap-10 items-center ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: inView ? "600ms" : undefined }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
              Desde 2013
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl leading-tight">
              Loja física e
              <br />
              atendimento real
            </h2>
            <p className="mt-4 leading-relaxed text-blue-200/45">
              Atuamos no mercado há mais de uma década, atendendo clientes com
              transparência, qualidade e suporte direto. Trabalhamos apenas com
              aparelhos revisados e testados.
            </p>
          </div>

          <div className="space-y-2.5">
            {[
              "Loja física em funcionamento",
              "Atendimento direto com especialista",
              "Produtos com procedência verificada",
              "Retirada na loja ou entrega",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl px-5 py-3.5 transition-all duration-300 hover:bg-white/[0.03]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4A9BD9]/10">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-[#4A9BD9]" />
                </div>
                <span className="text-[15px] font-medium text-blue-100/70">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
