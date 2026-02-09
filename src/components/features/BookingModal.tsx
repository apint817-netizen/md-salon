"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep("success");
    };

    const reset = () => {
        setStep("form");
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border border-[var(--color-gold-500)]/20">
                                <div className="flex justify-between items-center mb-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-serif font-bold text-slate-900"
                                    >
                                        {step === "form" ? "Онлайн запись" : "Успешно!"}
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="text-slate-400 hover:text-slate-900 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {step === "form" ? (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Ваше имя
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-2 rounded-md border border-slate-300 focus:border-[var(--color-gold-500)] focus:ring-1 focus:ring-[var(--color-gold-500)] outline-none transition-all placeholder:text-slate-300"
                                                placeholder="Иван Иванов"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Телефон
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-4 py-2 rounded-md border border-slate-300 focus:border-[var(--color-gold-500)] focus:ring-1 focus:ring-[var(--color-gold-500)] outline-none transition-all placeholder:text-slate-300"
                                                placeholder="+7 (999) 000-00-00"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Услуга
                                            </label>
                                            <select className="w-full px-4 py-2 rounded-md border border-slate-300 focus:border-[var(--color-gold-500)] focus:ring-1 focus:ring-[var(--color-gold-500)] outline-none transition-all bg-white">
                                                <option>Стрижка</option>
                                                <option>Окрашивание</option>
                                                <option>Маникюр/Педикюр</option>
                                                <option>Уход за волосами</option>
                                            </select>
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                className="w-full bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? "Отправка..." : "Записаться"}
                                            </Button>
                                            <p className="text-xs text-center text-slate-400 mt-3">
                                                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                                            </p>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <p className="text-lg text-slate-700 mb-2">
                                            Спасибо за заявку!
                                        </p>
                                        <p className="text-slate-500 mb-6">
                                            Мы свяжемся с вами в течение 15 минут для подтверждения записи.
                                        </p>
                                        <Button onClick={reset} variant="outline" className="w-full">
                                            Закрыть
                                        </Button>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
