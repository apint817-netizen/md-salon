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
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY, MASTERS_QUERY, PORTFOLIO_QUERY, REVIEWS_QUERY, HOT_SLOTS_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [services, masters, portfolio, reviews, hotSlots] = await Promise.all([
    client.fetch(SERVICES_QUERY),
    client.fetch(MASTERS_QUERY),
    client.fetch(PORTFOLIO_QUERY),
    client.fetch(REVIEWS_QUERY),
    client.fetch(HOT_SLOTS_QUERY),
  ]);

  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <HotSlots slots={hotSlots} />
      <Services services={services} />
      <Portfolio portfolioItems={portfolio} />
      <Masters masters={masters} />
      <Reviews reviews={reviews} />
      <Contact />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
