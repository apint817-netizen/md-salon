"use client";

import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Calendar } from "lucide-react";
import { useBooking } from "@/components/providers/BookingProvider";

export function MobileStickyCTA() {
    const { openBooking } = useBooking();
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-slate-200 md:hidden flex items-center justify-between gap-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="tel:+79099119333">
                    <Phone className="w-4 h-4 mr-2" /> Позвонить
                </a>
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="https://yandex.ru/maps/-/CDu~UVkP" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" /> Карта
                </a>
            </Button>
            <Button size="sm" className="flex-1 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white border-0" onClick={openBooking}>
                <Calendar className="w-4 h-4 mr-2" /> Запись
            </Button>
        </div>
    );
}
