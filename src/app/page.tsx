import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBlock } from "@/components/trust-block";
import { Gallery } from "@/components/gallery";
import { Products } from "@/components/products";
import { Differentials } from "@/components/differentials";
import { SocialProof } from "@/components/social-proof";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBlock />
        <Gallery />
        <Products />
        <Differentials />
        <SocialProof />
        <HowItWorks />
        <FAQ />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
