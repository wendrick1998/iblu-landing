import { ShieldCheckIcon, StoreIcon, CheckCircleIcon } from "./icons";

const badges = [
  { icon: ShieldCheckIcon, label: "Compra Segura" },
  { icon: StoreIcon, label: "Loja Física" },
  { icon: CheckCircleIcon, label: "Garantia" },
];

export function TrustBlock() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex justify-center gap-6 sm:gap-10 mb-12">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-[#1E5F8A]/10 bg-[#E8F4FD] px-5 py-4 sm:px-8 sm:py-6"
            >
              <b.icon className="h-8 w-8 text-[#1E5F8A]" />
              <span className="text-xs font-bold text-[#0D3B5E] sm:text-sm">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Loja Física e Atendimento Real
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-relaxed">
            Somos uma loja com atuação desde{" "}
            <strong className="text-[#1E5F8A]">2013</strong>, atendendo clientes
            com transparência, qualidade e suporte direto. Trabalhamos com
            aparelhos revisados e testados, garantindo mais segurança na sua
            compra.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-gray-700">
          {[
            "Loja física em funcionamento",
            "Atendimento direto com especialista",
            "Produtos com procedência verificada",
            "Opção de retirada na loja ou entrega",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-[#1E5F8A] shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
