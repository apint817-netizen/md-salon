"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/features/BookingModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Award, Scissors } from "lucide-react";

export function TeamContent({ masters = [] }: { masters: any[] }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Наша Команда</h1>
                        <p className="text-lg text-slate-300 max-w-2xl">
                            Талантливые, амбициозные и влюбленные в свое дело.
                            Мы постоянно учимся, чтобы предвосхищать ваши ожидания.
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Team List */}
            <Section className="py-12 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {masters.map((master, index) => (
                            <motion.div
                                key={master._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row h-full"
                            >
                                <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
                                    <img
                                        src={master.imageUrl || "/images/placeholder.jpg"}
                                        alt={master.name}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                        {master.experience}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-2xl font-serif font-bold text-slate-900">{master.name}</h2>
                                        <div className="text-[var(--color-gold-600)] font-medium text-sm border border-[var(--color-gold-200)] bg-[var(--color-gold-50)] px-2 py-0.5 rounded">
                                            {master.role}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {master.bio}
                                    </p>

                                    {master.specialization && (
                                        <div className="mb-6">
                                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Специализация</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {master.specialization.map((spec: string, i: number) => (
                                                    <span key={i} className="text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <Button onClick={() => setIsBookingOpen(true)} className="w-full mt-auto bg-slate-900 text-white hover:bg-slate-800">
                                        Записаться к мастеру
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Trust Badges */}
            <Section className="bg-white py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center p-6">
                            <div className="w-16 h-16 bg-[var(--color-gold-50)] rounded-full flex items-center justify-center mb-4 text-[var(--color-gold-500)]">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Дипломированные эксперты</h3>
                            <p className="text-slate-500 text-sm">Все мастера имеют профильное образование и сертификаты международного образца.</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="w-16 h-16 bg-[var(--color-gold-50)] rounded-full flex items-center justify-center mb-4 text-[var(--color-gold-500)]">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Опыт от 4 лет</h3>
                            <p className="text-slate-500 text-sm">Мы не берем новичков. У нас работают только устоявшиеся профессионалы.</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="w-16 h-16 bg-[var(--color-gold-50)] rounded-full flex items-center justify-center mb-4 text-[var(--color-gold-500)]">
                                <Scissors className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Постоянное развитие</h3>
                            <p className="text-slate-500 text-sm">Каждые 6 месяцев наши сотрудники проходят повышение квалификации в Москве.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Join Us CTA */}
            <Section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 -skew-x-12 translate-x-12 opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Хотите работать в команде мечты?</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            Мы всегда в поиске талантливых мастеров. Если вы любите свое дело так же, как и мы, присылайте портфолио.
                        </p>
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-0">
                            Стать частью команды
                        </Button>
                    </div>
                </Container>
            </Section>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />

            <Footer />
        </main>
    );
}
