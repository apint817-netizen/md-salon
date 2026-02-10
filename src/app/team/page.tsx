"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/features/BookingModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { BASE_PATH } from "@/lib/constants";
import { Star, Award, Scissors } from "lucide-react";

// Expanded mock data for masters
const masters = [
    {
        id: "elena",
        name: "Елена",
        role: "Топ-стилист",
        exp: "Опыт 8 лет",
        specialization: ["Женские стрижки", "Сложное окрашивание", "Укладки любой сложности"],
        bio: "Елена — мастер с утонченным чувством стиля. Регулярно проходит обучение в ведущих академиях Европы. Её конек — создание естественных, «дорогих» образов, которые не требуют сложной укладки дома.",
        image: `${BASE_PATH}/images/masters/elena.jpg`,
    },
    {
        id: "marina",
        name: "Марина",
        role: "Колорист",
        exp: "Опыт 5 лет",
        specialization: ["AirTouch", "Shatush", "Выход из черного", "Тонирование"],
        bio: "Марина знает о колористике всё. Она подберет идеальный оттенок, который подчеркнет цвет ваших глаз и кожи. Работает только на бережных красителях, сохраняя качество волос.",
        image: `${BASE_PATH}/images/masters/marina.jpg`,
    },
    {
        id: "natalia",
        name: "Наталья",
        role: "Мастер маникюра",
        exp: "Опыт 6 лет",
        specialization: ["Комбинированный маникюр", "SMART педикюр", "Дизайн"],
        bio: "Перфекционист до мозга костей. Её маникюр держится неделями, а кутикула выглядит безупречно. Наталья следит за всеми трендами нейл-индустрии и может воплотить любую вашу задумку.",
        image: `${BASE_PATH}/images/masters/natalia.jpg`,
    },
    {
        id: "anna",
        name: "Анна",
        role: "Визажист",
        exp: "Опыт 4 года",
        specialization: ["Дневной макияж", "Вечерний образ", "Архитектура бровей"],
        bio: "Анна видит красоту в каждой девушке. Её макияж никогда не выглядит маской — он лишь подчеркивает ваши достоинства. Идеальные брови от Анны меняют взгляд и делают лицо более выразительным.",
        image: `${BASE_PATH}/images/masters/anna.jpg`,
    },
];

export default function TeamPage() {
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
                                key={master.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row h-full"
                            >
                                <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
                                    <img
                                        src={master.image}
                                        alt={master.name}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                        {master.exp}
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

                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Специализация</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {master.specialization.map((spec, i) => (
                                                <span key={i} className="text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

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
