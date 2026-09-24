'use client';

import { portfolio } from "@/app/data/portfolio";
import Link from "next/link";
import useLangStore from "@/app/store/lang";
import { Mail } from "lucide-react";


const navLinks = [
    {
        name: {
            pt: "Início",
            en: "Home",
        },
        href: "#home",
    },
    {
        name: {
            pt: "Sobre",
            en: "About",
        },
        href: "#about",
    },
    {
        name: {
            pt: "Serviços",
            en: "Services",
        },
        href: "#services",
    },
    {
        name: {
            pt: "Projetos",
            en: "Projects",
        },
        href: "#projects",
    },
    {
        name: {
            pt: "Contato",
            en: "Contact",
        },
        href: "#contact",
    },
];

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.66-1.63 1.65 1.65 0 0 0-3.3 0 1.64 1.64 0 0 0 1.64 1.63m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
    );
}

function WhatsappIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43Zm-8.44 18.3h-.01a9.89 9.89 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.89 9.89 0 1 1 8.37 4.62Zm5.43-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.76-.88-2.91-1.57-4.07-3.56-.31-.53.31-.49.89-1.63.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49 1.89.82 2.63.89 3.57.75.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
    );
}

function DiscordIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M19.54 5.27A16.9 16.9 0 0 0 15.42 4l-.5 1.02a15.2 15.2 0 0 0-5.84 0L8.58 4a16.9 16.9 0 0 0-4.12 1.27C1.85 9.1 1.14 12.84 1.5 16.53a16.8 16.8 0 0 0 5.07 2.55l1.23-1.68c-.68-.25-1.33-.56-1.94-.92l.47-.36c3.74 1.73 8.02 1.73 11.72 0l.47.36c-.61.36-1.26.67-1.94.92l1.23 1.68a16.8 16.8 0 0 0 5.07-2.55c.42-4.28-.72-7.98-3.34-11.26ZM8.73 14.5c-1.1 0-2-.99-2-2.21s.88-2.21 2-2.21c1.13 0 2.02.99 2 2.21 0 1.22-.88 2.21-2 2.21Zm6.54 0c-1.1 0-2-.99-2-2.21s.88-2.21 2-2.21c1.13 0 2.02.99 2 2.21 0 1.22-.88 2.21-2 2.21Z" />
        </svg>
    );
}

export default function Footer() {

    const { lang } = useLangStore();

    return (
        <footer className="pointer-events-none animate-slide-down bg-black rounded-t-md">
            <div className="container mx-auto  py-2.5 sm:py-4 px-3 sm:px-6 pointer-events-auto">
                <div className="flex justify-between items-center">

                    <div className="hidden sm:flex sm:flex-1 items-center space-x-2">
                        <div className="text-sm sm:text-base font-bold w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full bg-accent-purple text-white shadow-sm shrink-0">
                            {portfolio.name.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="hidden md:inline text-sm font-semibold text-white whitespace-nowrap">
                            {portfolio.name}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Link
                            href={portfolio.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="group text-white/75 hover:text-white transition-colors"
                        >
                            <LinkedinIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>

                        <Link
                            href={portfolio.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="group text-white/75 hover:text-white transition-colors"
                        >
                            <GithubIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>

                        <Link
                            href={portfolio.socialLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="group text-white/75 hover:text-white transition-colors"
                        >
                            <WhatsappIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                        
                        <Link
                            href={portfolio.socialLinks.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            className="group text-white/75 hover:text-white transition-colors"
                        >
                            <DiscordIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>

                        <Link
                            href={`mailto:${portfolio.socialLinks.email}`}
                            aria-label="Email"
                            className="group text-white/75 hover:text-white transition-colors"
                        >
                            <Mail className="w-9 h-9 p-1 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-3 border-t border-white/15 pt-3 text-xs text-white/60 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col">
                        <span>
                            &copy; 2026 {portfolio.name}
                        </span>
                        <span>
                            {lang === "pt" ? "Todos os direitos reservados" : "All rights reserved"}
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end">
                        {navLinks.map((nav)=>
                            <Link key={nav.href} href={nav.href} className="text-white/60 transition-colors hover:text-white">
                                {nav.name[lang]}
                            </Link>
                        )}
                    </div>
                </div>

            </div>

        </footer>
    )
}