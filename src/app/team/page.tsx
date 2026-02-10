import { client } from "@/sanity/lib/client";
import { MASTERS_QUERY } from "@/sanity/lib/queries";
import { TeamContent } from "./TeamContent";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
    const masters = await client.fetch(MASTERS_QUERY);
    return <TeamContent masters={masters} />;
}
