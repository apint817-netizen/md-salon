import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { ServicesContent } from "./ServicesContent";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
    const services = await client.fetch(SERVICES_QUERY);
    return <ServicesContent services={services} />;
}
