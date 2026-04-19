"use client";

import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";

const faqs = [
  {
    q: "Os iPhones são originais?",
    a: "Sim. Todos os aparelhos que vendemos são originais Apple, revisados e testados antes da venda. Trabalhamos com procedência verificada.",
  },
  {
    q: "Vocês oferecem garantia?",
    a: "Sim, todos os aparelhos têm garantia de funcionamento. Em caso de qualquer problema, entre em contato pelo WhatsApp que resolvemos rapidamente.",
  },
  {
    q: "Como funciona a compra?",
    a: "Você nos chama no WhatsApp, enviamos os modelos disponíveis com fotos e valores, tira suas dúvidas e finaliza a compra com total segurança. Simples assim.",
  },
  {
    q: "Posso retirar na loja?",
    a: "Sim! Temos loja física na R. São Valentim, 483 — Itoupava Norte, Blumenau. Você pode retirar pessoalmente ou receber via entrega.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Aceitamos Pix, transferência bancária, cartões de crédito e débito. Consulte condições especiais pelo WhatsApp.",
  },
  {
    q: "Vocês fazem assistência técnica?",
    a: "Sim, oferecemos manutenção especializada para iPhones e outros dispositivos Apple. Consulte pelo WhatsApp.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#4A9BD9]"
      >
        <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-white pr-4">
          {q}
        </span>
        <span
          className="shrink-0 text-[#4A9BD9] transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "200px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "rgba(191,219,254,0.55)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28" style={{ background: "#091729" }}>
      <div className="section-divider" />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Dúvidas Frequentes
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Perguntas que todo mundo faz
          </h2>
        </div>

        <div
          className={`mt-12 rounded-2xl border border-white/[0.06] px-6 sm:px-8 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{
            background: "rgba(255,255,255,0.02)",
            animationDelay: inView ? "200ms" : undefined,
          }}
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
