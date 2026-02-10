"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Clock, Flame, ChevronRight, ChevronLeft } from "lucide-react";
import { BookingModal } from "./BookingModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Mock data for hot slots (in a real app, this would come from an API/CMS)
const hotSlots = [
    {
        id: 1,
        time: "Сегодня, 16:00",
        master: "Елена",
        service: "Стрижка + Укладка",
        price: "2500 ₽",
        oldPrice: "3000 ₽",
        discount: "-15%",
    },
    {
        id: 2,
        time: "Сегодня, 18:30",
        master: "Марина",
        service: "Окрашивание корней",
        price: "3500 ₽",
        oldPrice: "4200 ₽",
        discount: "-20%",
    },
    {
        id: 3,
        time: "Завтра, 10:00",
        master: "Наталья",
        service: "Маникюр с покрытием",
        price: "1800 ₽",
        oldPrice: "2200 ₽",
        discount: "-15%",
    },
    {
        id: 4,
        time: "Завтра, 12:00",
        master: "Анна",
        service: "Макияж дневной",
        price: "2000 ₽",
        oldPrice: "2500 ₽",
        discount: "-20%",
    },
    {
        id: 5,
        time: "Завтра, 14:00",
        master: "Елена",
        service: "Уход для волос",
        price: "3000 ₽",
        oldPrice: "4000 ₽",
        discount: "-25%",
    },
];

export function HotSlots() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState<{ service: string } | null>(null);

    const handleBookSlot = (service: string) => {
        setSelectedSlot({ service });
        setIsBookingOpen(true);
    };

    return (
        <Section className="py-12 bg-gradient-to-r from-red-50 to-orange-50 border-y border-red-100">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                            <Flame className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                                Горящие окошки
                            </h2>
                            <p className="text-slate-600 text-sm">Успейте записаться со скидкой до 25%</p>
                        </div>
                    </div>

                    {/* Navigation Buttons for Swiper */}
                    <div className="flex gap-2 hidden md:flex">
                        <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-red-200 bg-white text-red-400 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-red-200 bg-white text-red-400 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        className="py-2"
                    >
                        {hotSlots.map((slot) => (
                            <SwiperSlide key={slot.id}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl p-5 border border-red-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2 text-red-500 font-medium text-sm bg-red-50 px-2 py-1 rounded-md">
                                            <Clock className="w-3.5 h-3.5" />
                                            {slot.time}
                                        </div>
                                        <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full">
                                            {slot.discount}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-slate-800 text-lg mb-1">{slot.service}</h3>
                                    <p className="text-slate-500 text-sm mb-4">Мастер: {slot.master}</p>

                                    <div className="mt-auto flex items-end justify-between">
                                        <div>
                                            <span className="text-xs text-slate-400 line-through block">{slot.oldPrice}</span>
                                            <span className="text-lg font-bold text-[var(--color-gold-600)]">{slot.price}</span>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="bg-red-500 hover:bg-red-600 text-white border-0"
                                            onClick={() => handleBookSlot(slot.service)}
                                        >
                                            Забрать
                                        </Button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                initialService={selectedSlot?.service}
            />
        </Section>
    );
}
