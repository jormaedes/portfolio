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
            en: "Home",
        },
        href: "#home",
        icon: Home,
    },
    {
        name: {
            pt: "Sobre",
            en: "About",
        },
        href: "#about",
        icon: User,
    },
    {
        name: {
            pt: "Serviços",
            en: "Services",
        },
        href: "#services",
        icon: Briefcase,
    },
    {
        name: {
            pt: "Projetos",
            en: "Projects",
        },
        href: "#projects",
        icon: CodeXml,
    },
    {
        name: {
            pt: "Contato",
            en: "Contact",
        },
        href: "#contact",
        icon: Mail,
    },
];

export default function Header() {
    const { lang } = useLangStore();
    const [current, setCurrent] = useState<string | null>("#home");
    const [hasScrolled, setHasScrolled] = useState(false);
    const navRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const isClickScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        setCurrent(href);

        // Bloqueia temporariamente o scroll spy para evitar conflito de animação ao clicar
        isClickScrollingRef.current = true;
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            isClickScrollingRef.current = false;
        }, 1000);

        if (href === "/" || href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
        } else if (href.startsWith("#")) {
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href);
            }
        }
    };

    useEffect(() => {
        const updateCurrent = () => {
            if (isClickScrollingRef.current) return;
            const hash = window.location.hash;
            if (hash) {
                setCurrent(hash);
            } else if (window.scrollY < 120) {
                setCurrent("#home");
            }
        };

        const sectionIds = ["contact", "projects", "services", "about", "home"];

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setHasScrolled(scrollY > 8);

            // Se o scroll foi disparado pelo clique do usuário no nav, não interfere no indicador
            if (isClickScrollingRef.current) return;

            const scrollPos = scrollY + 220;
            if (scrollY < 120) {
                setCurrent("#home");
                return;
            }

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop - 80;
                    if (scrollPos >= top) {
                        setCurrent(id === "home" ? "#home" : `#${id}`);
                        break;
                    }
                }
            }
        };

        updateCurrent();
        window.addEventListener("hashchange", updateCurrent);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("hashchange", updateCurrent);
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const activeIndex = navLinks.findIndex(
            (link) =>
                link.href === current ||
                (current === "/" && link.href === "#home")
        );
        const activeItem = itemRefs.current[activeIndex];
        const nav = navRef.current;

        if (!activeItem || !nav) return;

        const updateIndicator = () => {
            const isMobile = window.innerWidth < 768;
            const indicatorWidth = isMobile ? 22 : 32;
            setIndicator({
                left:
                    activeItem.offsetLeft +
                    (activeItem.offsetWidth - indicatorWidth) / 2,
                width: indicatorWidth,
            });
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);

        return () => window.removeEventListener("resize", updateIndicator);
    }, [current, lang]);

    return (
        <>
            <div
                className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-[76px] border-b border-black/5 transition-all duration-300 ${
                    hasScrolled
                        ? "bg-white/35 backdrop-blur-xl dark:bg-[#0d0d12]/35"
                        : "bg-transparent backdrop-blur-none"
                }`}
            />

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
                            const isActive =
                                current === link.href ||
                                (current === "/" && link.href === "#home");
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
                                        onClick={(e) =>
                                            handleNavClick(e, link.href)
                                        }
                                        aria-label={link.name[lang]}
                                        title={link.name[lang]}
                                    >
                                        {/* Destaque de fundo no item ativo */}
                                        <span
                                            className={`absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 shadow-sm transition-all duration-300 ease-out ${
                                                isActive
                                                    ? "scale-100 opacity-100"
                                                    : "scale-90 opacity-0"
                                            }`}
                                        />

                                        {/* Visual em Ícone (Mobile / Telas Pequenas) */}
                                        <span className="relative z-10 md:hidden flex items-center justify-center">
                                            <Icon
                                                size={18}
                                                strokeWidth={
                                                    isActive ? 2.4 : 1.9
                                                }
                                            />
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
        </>
    );
}