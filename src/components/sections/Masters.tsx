"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const masters = [
    {
        name: "Елена",
        role: "Топ-стилист",
        exp: "Опыт 8 лет",
        image: "/images/masters/elena.jpg",
    },
    {
        name: "Марина",
        role: "Колорист",
        exp: "Опыт 5 лет",
        image: "/md-salon/images/masters/marina.jpg",
    },
    {
        name: "Наталья",
        role: "Мастер маникюра",
        exp: "Опыт 6 лет",
        image: "/md-salon/images/masters/natalia.jpg",
    },
    {
        name: "Анна",
        role: "Визажист",
        exp: "Опыт 4 года",
        image: "/md-salon/images/masters/anna.jpg",
    },
];

export function Masters() {
    return (
        <Section id="masters" className="bg-stone-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Наши Мастера</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Профессионалы, которые создают ваш идеальный образ.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {masters.map((master, index) => (
                        <motion.div
                            key={master.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="relative mb-6 mx-auto w-48 h-48 sm:w-full sm:h-auto sm:aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={master.image}
                                    alt={master.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-medium">{master.exp}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{master.name}</h3>
                            <p className="text-[var(--color-gold-600)] font-medium">{master.role}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
