import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BookingProvider } from "@/components/providers/BookingProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Салон красоты МД | Стрижки, Окрашивание, Маникюр",
  description: "Премиальный салон красоты МД в Краснодаре. Мужские и женские стрижки, окрашивание, ногтевой сервис. Запись онлайн +7 (909) 911-93-33.",
  openGraph: {
    title: "Салон красоты МД",
    description: "Премиальный уход для ваших волос и ногтей.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased bg-stone-50 text-slate-900")}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
