import { WHATSAPP_LINK, STORE } from "@/lib/constants";
import { WhatsAppIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a3a5c]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,95,138,0.3),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 text-amber-400" />
              ))}
            </div>
            <span>{STORE.rating} estrelas &bull; {STORE.reviews} avaliações no Google</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            iPhones Originais com{" "}
            <span className="bg-gradient-to-r from-[#4A9BD9] to-[#7BC4FF] bg-clip-text text-transparent">
              Garantia
            </span>{" "}
            e Loja Física
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100/80 sm:text-xl">
            Atendimento rápido via WhatsApp &bull; Aparelhos revisados &bull;
            Compra segura
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#075E54] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-900/30 transition-all hover:bg-[#128C7E] hover:shadow-xl hover:scale-105 active:scale-100"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Ver iPhones disponíveis
            </a>
            <p className="text-sm text-blue-200/60">
              Resposta rápida &bull; Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
