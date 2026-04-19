"use client";

import { STORE, WHATSAPP_LINK } from "@/lib/constants";
import { MapPinIcon, WhatsAppIcon } from "./icons";
import { useInView } from "@/hooks/use-in-view";

export function Location() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28" style={{ background: "#0c1e3a" }}>
      <div className="section-divider" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`grid gap-8 sm:grid-cols-2 items-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          {/* Map embed */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.2!2d-49.096!3d-26.903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzExLjAiUyA0OcKwMDUnNDUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1"
              className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-60"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização iBlu Store"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e3a] via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div
            className={`${inView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: inView ? "200ms" : undefined }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
              Localização
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl leading-tight">
              Venha nos
              <br />
              conhecer
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "rgba(191,219,254,0.5)" }}>
              Temos loja física em Blumenau. Venha ver os produtos pessoalmente ou entre em contato pelo WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(30,95,138,0.15)" }}>
                  <MapPinIcon className="h-5 w-5 text-[#4A9BD9]" />
                </div>
                <div>
                  <p className="font-medium text-white">{STORE.address}</p>
                  <p className="text-sm" style={{ color: "rgba(191,219,254,0.5)" }}>
                    {STORE.city} &bull; {STORE.cep}
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/iBluStoreBlumenau"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/15 hover:bg-white/[0.04]"
              >
                <MapPinIcon className="h-4 w-4 text-[#4A9BD9]" />
                Ver no Google Maps
              </a>
            </div>

            <div className="mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#075E54] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#128C7E] hover:scale-[1.02] active:scale-100"
                style={{ boxShadow: "0 0 20px rgba(7,94,84,0.25)" }}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar com a gente
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
