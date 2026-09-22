"use client";

import useLangStore from "@/app/store/lang";
import ToggleLangButton from "./ToggleLangButton";
import ThemeToggleButton from "./ToggleThemeButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRef } from "react";

const navLinks = [
    {
        name: {
            pt: "Início",
            en: "Home"
        }, href: "/"
    },
    {
        name: {
            pt: "Sobre",
            en: "About"
        }, href: "#about"
    },
    {
        name: {
            pt: "Serviços",
            en: "Services"
        }, href: "#services"
    },
    {
        name: {
            pt: "Projetos",
            en: "Projects"
        }, href: "#projects"
    },
    {
        name: {
            pt: "Contato",
            en: "Contact"
        }, href: "#contact"
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
            const indicatorWidth = 32;
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
        <header className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-2">
                <div className="text-lg font-bold p-2 w-9 h-9 flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white">JL</div>
                <span className="text-md text-black dark:text-white">Jormaedes Luís</span>
            </div>

            <nav className="flex flex-1 justify-center items-center px-6">
                <ul ref={navRef} className="relative flex items-center gap-1 rounded-full border border-black/15 bg-white/70 p-1.5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-white/15 dark:bg-black/70 dark:shadow-black/30">
                    <span
                        className={`pointer-events-none absolute top-0 z-10 h-1 rounded-full bg-black shadow-[0_0_8px_2px_rgba(0,0,0,0.25)] transition-[left,opacity] duration-500 ease-in-out dark:bg-white dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] ${current ? "opacity-100" : "opacity-0"}`}
                        style={{ left: indicator.left, width: indicator.width }}
                    />
                    {navLinks.map((link) => {
                        const isActive = current === link.href;
                        return (
                            <li ref={(element) => { itemRefs.current[navLinks.indexOf(link)] = element; }} key={link.name[lang]}>
                                <Link
                                    href={link.href}
                                    className={`relative flex min-h-10 items-center rounded-full px-5 text-sm font-medium transition-colors ${isActive
                                        ? "text-black dark:text-white"
                                        : "text-black/80 hover:text-black dark:text-white/85 dark:hover:text-white"
                                        }`}
                                    onClick={() => setCurrent(link.href)}
                                >
                                    <span className={`absolute inset-0 rounded-full bg-white shadow-sm transition-all duration-300 ease-out dark:bg-white/8 ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"}`} />
                                    <span className="relative">{link.name[lang]}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="flex items-center space-x">
                <ToggleLangButton />
                <ThemeToggleButton />
            </div>
        </header>
    );
}