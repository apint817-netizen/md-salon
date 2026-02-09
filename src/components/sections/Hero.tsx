"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BookingModal } from "@/components/features/BookingModal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleBookingClick = () => {
        scrollToServices();
        // Открываем модальное окно с небольшой задержкой после начала прокрутки
        setTimeout(() => setIsBookingOpen(true), 500);
    };

    return (
        <>
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="/images/salon-hero.jpg"
                        alt="Salon Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                <Container className="relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
                            Салон красоты <span className="text-[var(--color-gold-500)]">МД</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 text-balance">
                            Премиальный уход для тех, кто ценит стиль и качество.
                            <br className="hidden md:block" />
                            Стрижки, окрашивание и маникюр в Краснодаре.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto text-base gap-2 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white border-0"
                                onClick={handleBookingClick}
                            >
                                Записаться онлайн <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto text-base backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
                                onClick={scrollToServices}
                            >
                                Наши услуги
                            </Button>
                        </div>

                        <div className="pt-12 flex items-center justify-center gap-8 text-sm text-slate-300 font-medium">
                            <div className="flex flex-col items-center">
                                <span className="block text-2xl font-serif text-white">4</span>
                                <span>Топ-мастера</span>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="flex flex-col items-center">
                                <span className="block text-2xl font-serif text-white">10:00</span>
                                <span>До 21:00</span>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="flex flex-col items-center">
                                <span className="block text-2xl font-serif text-white">4.9</span>
                                <span>Яндекс</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
}
