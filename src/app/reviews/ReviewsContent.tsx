"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, MessageCircle, Quote } from "lucide-react";

export function ReviewsContent({ reviews = [] }: { reviews: any[] }) {

    // Calculate average rating if there are reviews, else mock it
    const averageRating = reviews.length > 0
        ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
        : "4.9";

    const reviewCount = reviews.length > 0 ? reviews.length : 500; // Mock count if empty

    return (
        <main className="min-h-screen bg-stone-50">
            <Header />

            {/* Page Header */}
            <div className="bg-slate-900 pt-32 pb-16 md:pt-40 md:pb-24 text-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Отзывы</h1>
                        <p className="text-lg text-slate-300 max-w-2xl">
                            Мы ценим обратную связь и гордимся тем, что 98% наших клиентов возвращаются к нам снова.
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Rating Summary */}
            <Section className="bg-white py-12 border-b border-slate-100">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[var(--color-gold-50)] p-8 rounded-2xl border border-[var(--color-gold-100)]">
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-slate-900 leading-none">{averageRating}</div>
                                <div className="flex gap-1 text-[var(--color-gold-500)] justify-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <div className="text-slate-500 text-xs mt-1">Рейтинг клиентов</div>
                            </div>
                            <div className="h-16 w-px bg-[var(--color-gold-200)] hidden sm:block" />
                            <div className="hidden sm:block">
                                <h3 className="text-lg font-bold text-slate-900">Высокое доверие</h3>
                                <p className="text-slate-600 text-sm">Более {reviewCount} положительных оценок</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Button asChild className="bg-[#FC3F1D] hover:bg-[#D93012] text-white border-0 gap-2">
                                <a href="https://yandex.ru/maps/org/md/162399841000/reviews/" target="_blank" rel="noopener noreferrer">
                                    Оставить отзыв на Яндекс
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="gap-2 bg-white">
                                <a href="https://2gis.ru" target="_blank" rel="noopener noreferrer">
                                    Оставить отзыв на 2GIS
                                </a>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Reviews Grid */}
            <Section className="py-16 md:py-24">
                <Container>
                    {reviews.length === 0 ? (
                        <div className="text-center text-slate-500 py-12">
                            Пока нет отзывов. Будьте первыми!
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative group hover:shadow-md transition-shadow"
                                >
                                    <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-[var(--color-gold-100)] transition-colors" />

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex gap-1 text-[var(--color-gold-500)]">
                                            {[...Array(review.rating || 5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-300">• {review.source || 'Салон'}</span>
                                    </div>

                                    <p className="text-slate-700 italic mb-6 leading-relaxed flex-grow">
                                        "{review.text}"
                                    </p>

                                    <div className="border-t border-slate-50 pt-4 mt-auto">
                                        <div className="font-bold text-slate-900">{review.name}</div>
                                        <div className="flex justify-between items-center text-xs mt-1">
                                            <span className="text-slate-500">{review.service}</span>
                                            <span className="text-slate-400">{review.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </Container>
            </Section>

            {/* Feedback Form CTA */}
            <Section className="bg-stone-100 py-16">
                <Container className="max-w-2xl text-center">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
                        <MessageCircle className="w-12 h-12 text-[var(--color-gold-500)] mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                            Ваше мнение важно для нас
                        </h2>
                        <p className="text-slate-600 mb-8">
                            Если у вас остались вопросы или предложения по улучшению качества обслуживания, напишите нам напрямую. Мы обязательно ответим.
                        </p>
                        <Button size="lg" asChild>
                            <a href="https://wa.me/79099119333" target="_blank" rel="noopener noreferrer">
                                Написать управляющему
                            </a>
                        </Button>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
