import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">МД</h3>
                    <p className="text-sm">Салон красоты в Краснодаре</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/services" className="hover:text-white transition-colors">Услуги</Link>
                    <Link href="/team" className="hover:text-white transition-colors">Команда</Link>
                    <Link href="/portfolio" className="hover:text-white transition-colors">Портфолио</Link>
                    <Link href="/reviews" className="hover:text-white transition-colors">Отзывы</Link>
                    <Link href="/#contacts" className="hover:text-white transition-colors">Контакты</Link>
                </div>

                <div className="text-sm text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Салон красоты МД.</p>
                    <p className="text-xs mt-1 opacity-50">Все права защищены.</p>
                </div>
            </Container>
        </footer>
    );
}
