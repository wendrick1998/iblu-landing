"use client";

import { useInView } from "@/hooks/use-in-view";

const steps = [
  { number: "01", title: "Chame no WhatsApp", description: "Clique no botão e inicie uma conversa." },
  { number: "02", title: "Receba os modelos", description: "Enviamos fotos, valores e detalhes." },
  { number: "03", title: "Tire suas dúvidas", description: "Respondemos tudo, sem pressa." },
  { number: "04", title: "Compra segura", description: "Finalizamos com total segurança." },
];

export function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "#0c1e3a" }}>
      <div className="section-divider" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Passo a Passo
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Como funciona a compra
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Connecting line with glow */}
          <div className="absolute top-8 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] hidden h-px lg:block section-divider" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`group relative text-center ${
                  inView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: inView ? `${(i + 1) * 150}ms` : undefined }}
              >
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#4A9BD9]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#4A9BD9]/15 group-hover:shadow-[0_0_24px_rgba(74,155,217,0.2)]" />
                  <span className="relative font-[family-name:var(--font-display)] text-lg font-bold text-[#4A9BD9]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-200/40">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
