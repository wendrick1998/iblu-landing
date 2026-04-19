import { StarIcon } from "./icons";
import { STORE } from "@/lib/constants";

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
        <StarIcon key={i} className="h-5 w-5 text-amber-400" />
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="bg-[#f8fbfe] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Clientes que já compraram com a gente
          </h2>

          <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-white border border-gray-200 px-5 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-900">{STORE.rating}</span>
            <span className="text-sm text-gray-500">{STORE.reviews} avaliações no Google</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1E5F8A]/10 bg-white p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-4 text-gray-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-[#1E5F8A]">
                &mdash; {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
