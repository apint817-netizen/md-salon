import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Masters } from "@/components/sections/Masters";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { HotSlots } from "@/components/features/HotSlots";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <HotSlots />
      <Services />
      <Portfolio />
      <Masters />
      <Reviews />
      <Contact />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
