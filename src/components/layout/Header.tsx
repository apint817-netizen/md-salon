"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/components/providers/BookingProvider";

const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "Мастера", href: "#masters" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Контакты", href: "#contacts" },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { openBooking } = useBooking();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 text-white"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className={cn("text-2xl font-serif font-bold tracking-widest", isScrolled ? "text-slate-900" : "text-white")}>
                    МД
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[var(--color-gold-500)]",
                                isScrolled ? "text-slate-900" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild className={cn(isScrolled ? "text-slate-900" : "text-white")}>
                        <a href="tel:+79099119333">
                            <Phone className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant={isScrolled ? "default" : "secondary"} onClick={openBooking}>Записаться</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden p-2", isScrolled ? "text-slate-900" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-900 py-2 border-b border-slate-100 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Button className="w-full" asChild>
                                    <a href="tel:+79099119333" className="flex items-center justify-center gap-2">
                                        <Phone className="h-4 w-4" /> Позвонить
                                    </a>
                                </Button>
                                <Button variant="outline" className="w-full" onClick={() => { setIsOpen(false); openBooking(); }}>Записаться онлайн</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
