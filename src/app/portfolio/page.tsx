"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Instagram } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

// Expanded portfolio data
const allItems = [
    { id: 1, src: `${BASE_PATH}/images/portfolio/work-1.jpg`, category: "hair", title: "Сложное окрашивание" },
    { id: 2, src: `${BASE_PATH}/images/portfolio/work-2.jpg`, category: "nails", title: "Нюдовый маникюр" },
    { id: 3, src: `${BASE_PATH}/images/portfolio/work-3.jpg`, category: "hair", title: "Укладка на длинные волосы" },
    { id: 4, src: `${BASE_PATH}/images/portfolio/work-4.jpg`, category: "makeup", title: "Вечерний макияж" },
    { id: 5, src: `${BASE_PATH}/images/portfolio/work-5.jpg`, category: "nails", title: "Педикюр SMART" },
    { id: 6, src: `${BASE_PATH}/images/portfolio/work-6.jpg`, category: "hair", title: "Стрижка каре" },
    // Reusing images for demo purposes to fill the grid
    { id: 7, src: `${BASE_PATH}/images/portfolio/work-1.jpg`, category: "hair", title: "AirTouch" },
    { id: 8, src: `${BASE_PATH}/images/portfolio/work-2.jpg`, category: "nails", title: "Френч" },
    { id: 9, src: `${BASE_PATH}/images/portfolio/work-4.jpg`, category: "makeup", title: "Свадебный образ" },
];

const categories = [
    { id: "all", label: "Все работы" },
    { id: "hair", label: "Волосы" },
    { id: "nails", label: "Ногти" },
    { id: "makeup", label: "Макияж" },
];

export default function PortfolioPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? allItems
        : allItems.filter(item => item.category === activeCategory);

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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Наши Работы</h1>
                        <p className="text-lg text-slate-300 max-w-2xl">
                            Вдохновение, творчество и безупречное исполнение.
                            Посмотрите, как мы преображаем наших клиентов.
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Filter */}
            <Section className="py-8 bg-white border-b border-slate-100 sticky top-[70px] z-40 shadow-sm">
                <Container>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                        ? "bg-slate-900 text-white shadow-md transform scale-105"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Gallery Grid */}
            <Section className="py-12 md:py-20">
                <Container>
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                                    onClick={() => setSelectedImage(item.src)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                        <h3 className="text-white font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.title}
                                        </h3>
                                        <span className="text-white/80 text-xs uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            Смотреть
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Container>
            </Section>

            {/* Instagram Banner */}
            <Section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
                <Container className="text-center">
                    <Instagram className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Подписывайтесь на нас в Instagram</h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                        Больше работ, backstage из жизни салона и специальные предложения в наших сторис.
                    </p>
                    <Button asChild variant="secondary" size="lg" className="bg-white text-pink-600 hover:bg-white/90">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            @md_salon_krd
                        </a>
                    </Button>
                </Container>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
