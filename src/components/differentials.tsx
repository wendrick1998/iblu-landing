"use client";

import { CheckCircleIcon } from "./icons";
import { useInView } from "@/hooks/use-in-view";

const items = [
  { title: "Aparelhos testados", desc: "Revisão completa antes da venda" },
  { title: "Garantia de funcionamento", desc: "Segurança na sua compra" },
  { title: "Atendimento rápido", desc: "Resposta ágil pelo WhatsApp" },
  { title: "Compra segura", desc: "Suporte real do início ao fim" },
  { title: "Loja física", desc: "Espaço em Blumenau para sua tranquilidade" },
  { title: "Sem surpresas", desc: "Transparência total em tudo" },
];

export function Differentials() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "#0c1e3a" }}>
      <div className="section-divider" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px]" style={{ background: "rgba(30,95,138,0.05)" }} />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Diferenciais
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Por que comprar com a gente?
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 sm:gap-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group flex items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.03] ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${(i + 1) * 80}ms` : undefined }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4A9BD9]/10 transition-all group-hover:bg-[#4A9BD9]/15 group-hover:shadow-[0_0_16px_rgba(74,155,217,0.15)]">
                <CheckCircleIcon className="h-4 w-4 text-[#4A9BD9]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm leading-relaxed text-blue-200/40">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
