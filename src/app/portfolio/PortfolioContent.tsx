"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Instagram } from "lucide-react";

export function PortfolioContent({ portfolioItems = [] }: { portfolioItems: any[] }) {
    const [filter, setFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = [
        { id: "all", name: "Все работы" },
        { id: "hair", name: "Волосы" },
        { id: "nails", name: "Ногти" },
        { id: "makeup", name: "Макияж" },
    ];

    const filteredItems = filter === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Портфолио</h1>
                        <p className="text-lg text-slate-300 max-w-2xl">
                            Визуальное доказательство нашего мастерства.
                            Реальные работы для реальных людей.
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Filter */}
            <Section className="py-8 bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
                <Container>
                    <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat.id
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat.name}
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
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item._id}
                                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group bg-slate-200"
                                onClick={() => setSelectedImage(item.imageUrl)}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.title || "Portfolio item"}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                    <span className="text-white/80 text-sm font-medium border border-white/40 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                        Смотреть
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            В этой категории пока нет работ.
                        </div>
                    )}
                </Container>
            </Section>

            {/* Instagram Banner */}
            <Section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
                <Container className="text-center">
                    <div className="max-w-2xl mx-auto">
                        <Instagram className="w-12 h-12 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Больше работ в Instagram</h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Подписывайтесь на нас, чтобы следить за свежими преображениями, акциями и жизнью салона.
                        </p>
                        <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 border-0 font-bold" asChild>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                @md_salon
                            </a>
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl pointer-events-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />
                        <button className="absolute top-4 right-4 text-white/50 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all">
                            <X className="w-8 h-8" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
