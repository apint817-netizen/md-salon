"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Фотографии работ салона
const portfolioItems = [
    { id: 1, src: "/images/portfolio/work-1.jpg", category: "hair" },
    { id: 2, src: "/images/portfolio/work-2.jpg", category: "nails" },
    { id: 3, src: "/images/portfolio/work-3.jpg", category: "hair" },
    { id: 4, src: "/images/portfolio/work-4.jpg", category: "makeup" },
    { id: 5, src: "/images/portfolio/work-5.jpg", category: "nails" },
    { id: 6, src: "/images/portfolio/work-6.jpg", category: "hair" },
];

export function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <Section id="portfolio" className="bg-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Наши Работы</h2>
                    <p className="text-slate-600">Вдохновение и безупречный результат.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <img
                                src={item.src}
                                alt={`Portfolio ${item.id}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium border border-white px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">Смотреть</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        />
                        <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X className="w-8 h-8" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
