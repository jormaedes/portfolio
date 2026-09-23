"use client";

import useLangStore from "@/app/store/lang";
import ToggleLangButton from "./ToggleLangButton";
import ThemeToggleButton from "./ToggleThemeButton";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Home, User, Briefcase, CodeXml, Mail } from "lucide-react";

const navLinks = [
    {
        name: {
            pt: "Início",
            en: "Home"
        },
        href: "/",
        icon: Home
    },
    {
        name: {
            pt: "Serviços",
            en: "Services"
        },
        href: "#services",
        icon: Briefcase
    },
    {
        name: {
            pt: "Projetos",
            en: "Projects"
        },
        href: "#projects",
        icon: CodeXml
    },
    {
        name: {
            pt: "Sobre",
            en: "About"
        },
        href: "#about",
        icon: User
    },
    {
        name: {
            pt: "Contato",
            en: "Contact"
        },
        href: "#contact",
        icon: Mail
    },
];

export default function Header() {
    const { lang } = useLangStore();
    const [current, setCurrent] = useState<string | null>(null);
    const navRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const updateCurrent = () => setCurrent(window.location.hash || "/");
        updateCurrent();
        window.addEventListener("hashchange", updateCurrent);
        return () => window.removeEventListener("hashchange", updateCurrent);
    }, []);

    useEffect(() => {
        const activeIndex = navLinks.findIndex((link) => link.href === current);
        const activeItem = itemRefs.current[activeIndex];
        const nav = navRef.current;

        if (!activeItem || !nav) return;

        const updateIndicator = () => {
            const isMobile = window.innerWidth < 768;
            const indicatorWidth = isMobile ? 22 : 32;
            setIndicator({
                left: activeItem.offsetLeft + (activeItem.offsetWidth - indicatorWidth) / 2,
                width: indicatorWidth,
            });
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);

        return () => window.removeEventListener("resize", updateIndicator);
    }, [current, lang]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none animate-slide-down">
            <div className="container mx-auto flex items-center justify-between py-2.5 sm:py-4 px-3 sm:px-6 pointer-events-auto">
                {/* Logo / Nome do Autor - Oculto em telas menores para priorizar o menu e o botão de alternar tema */}
                <div className="hidden sm:flex sm:flex-1 items-center space-x-2">
                    <div className="text-sm sm:text-base font-bold w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full bg-accent-purple text-white shadow-sm shrink-0">
                        JL
                    </div>
                    <span className="hidden md:inline text-sm font-semibold text-black dark:text-white whitespace-nowrap">
                        Jormaedes Luís
                    </span>
                </div>

                {/* Menu de Navegação em Pílula (Ícones no mobile, texto no desktop) */}
                <nav className="flex items-center justify-center">
                    <ul
                        ref={navRef}
                        className="relative flex items-center gap-0.5 sm:gap-1 rounded-full border border-black/15 dark:border-white/15 bg-white/70 dark:bg-black/70 p-1 sm:p-1.5 shadow-lg shadow-black/10 dark:shadow-black/40 backdrop-blur-xl"
                    >
                        {/* Indicador Luminoso Superior Animado */}
                        <span
                            className={`pointer-events-none absolute top-0 z-20 h-[3px] rounded-full bg-black dark:bg-white shadow-[0_0_8px_2px_rgba(0,0,0,0.25)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,0.85)] transition-all duration-300 ease-in-out ${
                                current ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ left: indicator.left, width: indicator.width }}
                        />

                        {navLinks.map((link, idx) => {
                            const isActive = current === link.href;
                            const Icon = link.icon;
                            return (
                                <li
                                    ref={(element) => {
                                        itemRefs.current[idx] = element;
                                    }}
                                    key={link.href}
                                >
                                    <Link
                                        href={link.href}
                                        className={`relative flex min-h-9 md:min-h-10 items-center justify-center rounded-full px-2.5 sm:px-3 md:px-5 text-sm transition-all duration-300 ${
                                            isActive
                                                ? "text-black dark:text-white font-medium"
                                                : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                                        }`}
                                        onClick={() => setCurrent(link.href)}
                                        aria-label={link.name[lang]}
                                        title={link.name[lang]}
                                    >
                                        {/* Destaque de fundo no item ativo */}
                                        <span
                                            className={`absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 shadow-sm transition-all duration-300 ease-out ${
                                                isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"
                                            }`}
                                        />

                                        {/* Visual em Ícone (Mobile / Telas Pequenas) */}
                                        <span className="relative z-10 md:hidden flex items-center justify-center">
                                            <Icon size={18} strokeWidth={isActive ? 2.4 : 1.9} />
                                        </span>

                                        {/* Visual em Texto (Desktop / Telas Maiores) */}
                                        <span className="relative z-10 hidden md:inline">
                                            {link.name[lang]}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Ações Direitas: Idioma e Tema - Mantém o botão de tema sempre visível */}
                <div className="flex sm:flex-1 items-center justify-end space-x-1 sm:space-x-2 shrink-0">
                    <ToggleLangButton />
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    );
}