import { STORE } from "@/lib/constants";
import Link from "next/link";
import { MapPinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-[#060e1a] py-12 text-gray-400">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-white">{STORE.fullName}</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Atuamos no mercado desde {STORE.since}, oferecendo produtos de
              qualidade, atendimento direto e transparência em todas as vendas.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Contato</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p>WhatsApp: {STORE.phone}</p>
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0" />
                <p>
                  {STORE.address}
                  <br />
                  {STORE.city}, {STORE.cep}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Legal</h3>
            <div className="mt-3 space-y-2 text-sm">
              <Link
                href="/privacidade"
                className="block hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="block hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs">
          <p>
            Este site tem como objetivo apresentar nossos produtos e serviços. O
            atendimento e a finalização das vendas são realizados via WhatsApp.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {STORE.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
