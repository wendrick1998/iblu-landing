import { WHATSAPP_LINK } from "@/lib/constants";
import { SmartphoneIcon, WhatsAppIcon } from "./icons";

const categories = [
  {
    title: "iPhones",
    description: "Trabalhamos com diversos modelos, como:",
    items: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"],
    note: "Consulte disponibilidade atual pelo WhatsApp",
    icon: "📱",
  },
  {
    title: "iPad & MacBook",
    description: "Tablets e notebooks Apple com garantia e procedência.",
    items: [],
    note: null,
    icon: "💻",
  },
  {
    title: "Acessórios",
    description:
      "Capinhas, carregadores, fones e muito mais para o seu dia a dia.",
    items: [],
    note: null,
    icon: "🎧",
  },
  {
    title: "Assistência Técnica",
    description:
      "Manutenção especializada para iPhones e outros dispositivos Apple.",
    items: [],
    note: null,
    icon: "🔧",
  },
];

export function Products() {
  return (
    <section className="bg-[#f8fbfe] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          O que você encontra aqui
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-[#1E5F8A]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E5F8A] text-xl">
                  <span>{cat.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
              </div>
              <p className="text-gray-600">{cat.description}</p>
              {cat.items.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#E8F4FD] px-3 py-1 text-sm font-medium text-[#0D3B5E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              {cat.note && (
                <p className="mt-3 text-sm text-gray-500 italic">{cat.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#075E54] px-6 py-3 font-bold text-white shadow transition-all hover:bg-[#128C7E] hover:shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
