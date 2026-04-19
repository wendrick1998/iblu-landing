import { STORE } from "@/lib/constants";
import Link from "next/link";
import { MapPinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative bg-[#040810] py-14 text-gray-400">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
              {STORE.fullName}
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Atuamos no mercado desde {STORE.since}, oferecendo produtos de
              qualidade, atendimento direto e transparência em todas as vendas.
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-widest text-white">
              Contato
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>WhatsApp: {STORE.phone}</p>
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" />
                <p>
                  {STORE.address}
                  <br />
                  {STORE.city}, {STORE.cep}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-widest text-white">
              Legal
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/privacidade"
                className="block transition-colors hover:text-white"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="block transition-colors hover:text-white"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-400">
          <p>
            Este site tem como objetivo apresentar nossos produtos e serviços. O
            atendimento e a finalização das vendas são realizados via WhatsApp.
          </p>
          <p className="mt-3">
            &copy; {new Date().getFullYear()} {STORE.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
