"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, UserCheck } from "lucide-react";

const services = [
    {
        icon: Scissors,
        title: "Стрижки",
        description: "Женские, мужские и детские стрижки любой сложности. Подбор формы под тип лица.",
        price: "от 1500 ₽",
    },
    {
        icon: Palette,
        title: "Окрашивание",
        description: "Сложные техники: AirTouch, Balayage, Shatush. Бережное отношение к волосам.",
        price: "от 4000 ₽",
    },
    {
        icon: Sparkles,
        title: "Ногтевой сервис",
        description: "Маникюр, педикюр, покрытие лаком и гель-лаком. Стерильные инструменты.",
        price: "от 1200 ₽",
    },
    {
        icon: UserCheck,
        title: "Уход и лечение",
        description: "Восстановление структуры волос, спа-уходы и профессиональные маски.",
        price: "от 2000 ₽",
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-stone-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Наши Услуги</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Мы предлагаем полный спектр услуг для вашей красоты. Используем только премиальную косметику и современное оборудование.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-gold-500)] transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-slate-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                            <div className="text-[var(--color-gold-600)] font-semibold">{service.price}</div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
