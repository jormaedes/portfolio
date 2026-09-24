'use client';

import { portfolio } from "@/app/data/portfolio";
import Link from "next/link";
import useLangStore from "@/app/store/lang";


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

export default function Footer() {

    const { lang } = useLangStore();

    return (
        <footer className="pointer-events-none animate-slide-down bg-black rounded-t-md">
            <div className="container mx-auto  py-2.5 sm:py-4 px-3 sm:px-6 pointer-events-auto">
                <div className="flex justify-between items-center">

                    <div className="hidden sm:flex sm:flex-1 items-center space-x-2">
                        <div className="text-sm sm:text-base font-bold w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full bg-accent-purple text-white shadow-sm shrink-0">
                            JL
                        </div>
                        <span className="hidden md:inline text-sm font-semibold text-black dark:text-white whitespace-nowrap">
                            Jormaedes Luís
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Link
                            href={portfolio.socialLinks.linkedin}
                            target="_blank"
                        >
                            <LinkedinIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>

                        <Link
                            href={portfolio.socialLinks.github}
                            target="_blank"
                        >
                            <GithubIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>

                        <Link
                            href={portfolio.socialLinks.whatsapp}
                            target="_blank"
                        >
                        {/* Aqui vai o logo do whatsapp */}
                            <GithubIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                        
                        <Link
                            href={portfolio.socialLinks.discord}
                            target="_blank"
                        >
                            {/* Aqui vai o logo do discord */}
                            <GithubIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                        </Link>
                    </div>
                </div>

                <div className="border-t flex justify-between items-end">
                    <div className="flex flex-col">
                        <span>
                            &copy; 2026 Jormaedes Luís
                        </span>
                        <span>
                            All rights reserved
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        {navLinks.map((nav)=>
                            <Link key={nav.href} href={nav.href}>
                                {nav.name[lang]}
                            </Link>
                        )}
                    </div>
                </div>

            </div>

        </footer>
    )
}