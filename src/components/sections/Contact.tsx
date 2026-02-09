"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <Section id="contacts" className="bg-slate-900 text-white relative overflow-hidden">
            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Контакты</h2>
                            <p className="text-slate-400 text-lg">
                                Ждем вас ежедневно в нашей студии красоты.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[var(--color-gold-500)] shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white mb-1">Адрес</h3>
                                    <p className="text-slate-300">г. Краснодар, ул. Кирилла Россинского, 3/1</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-[var(--color-gold-500)] shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white mb-1">Режим работы</h3>
                                    <p className="text-slate-300">Ежедневно с 10:00 до 21:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-[var(--color-gold-500)] shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white mb-1">Телефон</h3>
                                    <a href="tel:+79099119333" className="text-slate-300 hover:text-white transition-colors">
                                        +7 (909) 911-93-33
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white border-0">
                                <a href="tel:+79099119333">Позвонить</a>
                            </Button>
                            <Button variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                                <a href="https://yandex.ru/maps/-/CDu~UVkP" target="_blank" rel="noopener noreferrer">
                                    <Navigation className="w-4 h-4 mr-2" /> Построить маршрут
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-800 relative">
                        {/* Simple Map Placeholder/Image or Iframe if available. Using a static map image or iframe is better. */}
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=39.024325%2C45.089719&z=17&orgpoint=39.024325%2C45.089719&org=162399841000"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen={true}
                            className="w-full h-full"
                            title="Yandex Map"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
