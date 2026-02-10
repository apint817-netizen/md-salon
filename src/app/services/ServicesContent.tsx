"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/features/BookingModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ServiceItem {
    name: string;
    price: string;
    time: string;
}

interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    items: ServiceItem[];
}

// Helper to group flat services list into categories
const groupServices = (services: any[]) => {
    const categories: Record<string, ServiceCategory> = {
        hair: { id: "hair", title: "Парикмахерский зал", description: "Стрижки, укладки и уходы.", items: [] },
        color: { id: "color", title: "Окрашивание", description: "Сложные техники и тонирование.", items: [] },
        nails: { id: "nails", title: "Ногтевой сервис", description: "Маникюр и педикюр.", items: [] },
        care: { id: "care", title: "Уход", description: "Программы восстановления.", items: [] },
        makeup: { id: "makeup", title: "Визаж", description: "Макияж и брови.", items: [] },
    };

    services.forEach(service => {
        if (categories[service.category]) {
            categories[service.category].items.push({
                name: service.title,
                price: service.price,
                time: service.duration || ""
            });
        }
    });

    return Object.values(categories).filter(c => c.items.length > 0);
};

export function ServicesContent({ services = [] }: { services: any[] }) {
    const [openCategory, setOpenCategory] = useState<string | null>("hair");
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

    const serviceCategories = groupServices(services);

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
