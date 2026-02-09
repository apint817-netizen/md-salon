"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const reviews = [
    {
        name: "Екатерина В.",
        text: "Лучший салон в районе! Делала сложное окрашивание у Елены — результат превзошел ожидания. Волосы живые и блестящие.",
        rating: 5,
    },
    {
        name: "Ольга С.",
        text: "Очень уютная атмосфера и вежливый персонал. Маникюр держится уже 3 недели без сколов. Рекомендую!",
        rating: 5,
    },
    {
        name: "Анастасия К.",
        text: "Хожу сюда всей семьей. Муж стрижется, я на уходы. Всегда предлагают вкусный кофе и найти время не проблема.",
        rating: 5,
    },
];

export function Reviews() {
    return (
        <Section id="reviews" className="bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Отзывы Клиентов</h2>
                    <p className="text-slate-600">Мы гордимся тем, что нам доверяют.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
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
                    <Button variant="outline" asChild>
                        <a href="https://yandex.ru/maps/org/md/162399841000/reviews/" target="_blank" rel="noopener noreferrer">
                            Читать все отзывы на Яндекс
                        </a>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
