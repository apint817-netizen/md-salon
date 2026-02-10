import { client } from "@/sanity/lib/client";
import { REVIEWS_QUERY } from "@/sanity/lib/queries";
import { ReviewsContent } from "./ReviewsContent";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
    const reviews = await client.fetch(REVIEWS_QUERY);
    return <ReviewsContent reviews={reviews} />;
}
