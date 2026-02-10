"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface ReviewsProps {
    reviews: any[];
}

export function Reviews({ reviews = [] }: ReviewsProps) {
    const displayReviews = reviews.slice(0, 3);
    return (
        <Section id="reviews" className="bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Отзывы Клиентов</h2>
                    <p className="text-slate-600">Мы гордимся тем, что нам доверяют.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {displayReviews.map((review, index) => (
                        <div key={review._id || index} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                            <div className="flex gap-1 text-[var(--color-gold-500)] mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 flex-grow">"{review.text}"</p>
                            <div className="font-bold text-slate-900">— {review.name}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild variant="outline" className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50">
                            <Link href="/reviews">
                                Больше отзывов
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild className="w-full sm:w-auto text-slate-500 hover:text-slate-900">
                            <a href="https://yandex.ru/maps/org/md/162399841000/reviews/" target="_blank" rel="noopener noreferrer">
                                На Яндекс.Картах
                            </a>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
