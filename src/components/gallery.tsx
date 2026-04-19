"use client";

import { useInView } from "@/hooks/use-in-view";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=500&fit=crop&q=80",
    alt: "iPhone em exposição",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop&q=80",
    alt: "iPhone modelos disponíveis",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580910051074-3eb694886571?w=600&h=400&fit=crop&q=80",
    alt: "Acessórios Apple originais",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&h=400&fit=crop&q=80",
    alt: "Produtos Apple com garantia",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=400&fit=crop&q=80",
    alt: "iPhone na mão do cliente",
    span: "",
  },
];

export function Gallery() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28" style={{ background: "#091729" }}>
      <div className="section-divider" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Nossa Loja
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Conheça nosso espaço
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(191,219,254,0.45)" }}>
            Loja física em Blumenau &bull; Venha nos visitar ou peça fotos pelo WhatsApp
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${
                photo.span
              } ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: inView ? `${(i + 1) * 80}ms` : undefined }}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/3]" : "aspect-[3/2]"} w-full`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/50 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
