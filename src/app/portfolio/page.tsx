import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";
import { PortfolioContent } from "./PortfolioContent";

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
    const portfolioItems = await client.fetch(PORTFOLIO_QUERY);
    return <PortfolioContent portfolioItems={portfolioItems} />;
}
