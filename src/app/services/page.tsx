"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/features/BookingModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

// Mock data for services
const serviceCategories = [
    {
        id: "hair",
        title: "Парикмахерский зал",
        description: "Стрижки, укладки и уходы для волос любой длины и текстуры.",
        items: [
            { name: "Женская стрижка (короткие)", price: "1500 ₽", time: "60 мин" },
            { name: "Женская стрижка (средние)", price: "1800 ₽", time: "60 мин" },
            { name: "Женская стрижка (длинные)", price: "2200 ₽", time: "90 мин" },
            { name: "Мужская стрижка", price: "1200 ₽", time: "45 мин" },
            { name: "Детская стрижка (до 7 лет)", price: "900 ₽", time: "45 мин" },
            { name: "Укладка дневная", price: "от 1500 ₽", time: "45 мин" },
            { name: "Укладка вечерняя", price: "от 2500 ₽", time: "90 мин" },
        ]
    },
    {
        id: "color",
        title: "Окрашивание",
        description: "Сложные техники, тонирование и выход из черного. Работаем на премиум красителях.",
        items: [
            { name: "Окрашивание корней", price: "3500 ₽", time: "90 мин" },
            { name: "Окрашивание в один тон", price: "от 4500 ₽", time: "120 мин" },
            { name: "Тонирование", price: "от 3000 ₽", time: "90 мин" },
            { name: "Мелирование", price: "от 5000 ₽", time: "180 мин" },
            { name: "Сложное окрашивание (AirTouch, Shatush)", price: "от 8000 ₽", time: "240 мин" },
            { name: "Контуринг", price: "3500 ₽", time: "90 мин" },
        ]
    },
    {
        id: "nails",
        title: "Ногтевой сервис",
        description: "Маникюр и педикюр с покрытием. Стерильный инструмент, крафт-пакеты вскрываются при вас.",
        items: [
            { name: "Маникюр комбинированный", price: "1200 ₽", time: "60 мин" },
            { name: "Маникюр с покрытием гель-лак", price: "2000 ₽", time: "90 мин" },
            { name: "Педикюр SMART (полный)", price: "2200 ₽", time: "60 мин" },
            { name: "Педикюр SMART с покрытием", price: "3000 ₽", time: "90 мин" },
            { name: "Снятие чужого покрытия", price: "300 ₽", time: "15 мин" },
            { name: "Дизайн (1 ноготь)", price: "от 50 ₽", time: "5 мин" },
        ]
    },
    {
        id: "care",
        title: "Уход и восстановление",
        description: "Программы счастья для волос и спа-ритуалы для рук.",
        items: [
            { name: "Счастье для волос (Lebel)", price: "от 3500 ₽", time: "90 мин" },
            { name: "Кератиновое выпрямление", price: "от 4000 ₽", time: "180 мин" },
            { name: "Ботокс для волос", price: "от 3500 ₽", time: "150 мин" },
            { name: "Парафинотерапия рук", price: "500 ₽", time: "20 мин" },
        ]
    },
    {
        id: "makeup",
        title: "Визаж и брови",
        description: "Подчеркнем вашу естественную красоту.",
        items: [
            { name: "Коррекция бровей", price: "600 ₽", time: "30 мин" },
            { name: "Окрашивание бровей (краска/хна)", price: "800 ₽", time: "30 мин" },
            { name: "Долговременная укладка бровей", price: "1500 ₽", time: "60 мин" },
            { name: "Макияж дневной", price: "2000 ₽", time: "60 мин" },
            { name: "Макияж вечерний", price: "3000 ₽", time: "90 мин" },
        ]
    }
];

export default function ServicesPage() {
    const [openCategory, setOpenCategory] = useState<string | null>("hair");
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

    const toggleCategory = (id: string) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    const handleBook = (serviceName: string) => {
        setSelectedService(serviceName);
        setIsBookingOpen(true);
    };

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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Услуги и цены</h1>
                        <p className="text-lg text-slate-300 max-w-2xl">
                            Прозрачное ценообразование и премиальное качество.
                            Выберите услугу, и мы позаботимся о вашем идеальном образе.
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Price List */}
            <Section className="py-12 md:py-20">
                <Container className="max-w-4xl">
                    <div className="space-y-6">
                        {serviceCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2">
                                            {category.title}
                                        </h2>
                                        <p className="text-slate-500 text-sm md:text-base pr-8">
                                            {category.description}
                                        </p>
                                    </div>
                                    <div className={`p-2 rounded-full bg-slate-100 transition-transform duration-300 ${openCategory === category.id ? "rotate-180" : ""}`}>
                                        <ChevronDown className="w-5 h-5 text-slate-600" />
                                    </div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openCategory === category.id ? "auto" : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 md:p-8 pt-0 border-t border-slate-100">
                                        <div className="space-y-4">
                                            {category.items.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 rounded-lg px-2 -mx-2 transition-colors"
                                                >
                                                    <div className="flex-1">
                                                        <div className="font-medium text-slate-900">{item.name}</div>
                                                        <div className="text-xs text-slate-400 mt-1">{item.time}</div>
                                                    </div>
                                                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                                                        <div className="font-bold text-lg text-[var(--color-gold-600)] whitespace-nowrap">
                                                            {item.price}
                                                        </div>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => handleBook(item.name)}
                                                            className="shrink-0"
                                                        >
                                                            Записаться
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Bottom CTA */}
            <Section className="bg-[var(--color-gold-50)]">
                <Container className="text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                        Не нашли нужную услугу?
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Позвоните нам или напишите в WhatsApp — администратор проконсультирует вас, рассчитает точную стоимость и подберет удобное время.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" onClick={() => { setSelectedService(undefined); setIsBookingOpen(true); }}>
                            Заказать звонок
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="https://wa.me/79099119333" target="_blank" rel="noopener noreferrer">
                                Написать в WhatsApp
                            </a>
                        </Button>
                    </div>
                </Container>
            </Section>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                initialService={selectedService}
            />

            <Footer />
        </main>
    );
}
