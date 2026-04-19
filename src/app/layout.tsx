import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "iBlu Store — iPhones Originais com Garantia e Loja Física | Blumenau",
  description:
    "Compre iPhones originais com garantia, atendimento via WhatsApp e loja física em Blumenau. Aparelhos revisados e testados. Desde 2013.",
  keywords: [
    "iPhone Blumenau",
    "iPhone original",
    "loja iPhone",
    "comprar iPhone",
    "iPhone garantia",
    "iBlu Store",
    "assistência técnica iPhone",
  ],
  openGraph: {
    title: "iBlu Store — iPhones Originais com Garantia e Loja Física",
    description:
      "Atendimento rápido via WhatsApp. Aparelhos revisados. Compra segura. Loja física em Blumenau desde 2013.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sans)] bg-[#060B18] text-white">
        {children}
      </body>
    </html>
  );
}
