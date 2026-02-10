"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, UserCheck } from "lucide-react";

interface ServiceProps {
    services: any[];
}

export function Services({ services = [] }: ServiceProps) {
    // Map category to icon
    const getIcon = (category: string) => {
        switch (category) {
            case 'hair': return Scissors;
            case 'color': return Palette;
            case 'nails': return Sparkles;
            case 'care': return UserCheck;
            default: return Scissors;
        }
    };

    // We need to pick 4 representative services for the homepage
    // Or just show 4 items from the list.
    // Let's take 4 items that have distinct categories if possible.
    const displayServices = services.slice(0, 4).map(s => ({
        ...s,
        icon: getIcon(s.category)
    }));
    return (
        <Section id="services" className="bg-stone-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Наши Услуги</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Мы предлагаем полный спектр услуг для вашей красоты. Используем только премиальную косметику и современное оборудование.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {displayServices.map((service, index) => (
                        <motion.div
                            key={service._id || index}
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

                <div className="text-center">
                    <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                        <Link href="/services">
                            Смотреть весь прайс
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
