import { CheckCircleIcon } from "./icons";

const items = [
  "Aparelhos testados e prontos para uso",
  "Garantia de funcionamento",
  "Atendimento rápido e direto",
  "Compra segura com suporte real",
  "Loja física para sua tranquilidade",
  "Sem surpresas após a compra",
];

export function Differentials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Por que comprar com a gente?
        </h2>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {items.map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl border border-[#1E5F8A]/10 bg-[#f8fbfe] px-5 py-4"
            >
              <CheckCircleIcon className="h-6 w-6 text-[#1E5F8A] shrink-0" />
              <span className="text-gray-800 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
