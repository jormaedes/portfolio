"use client";

import useLangStore from "@/app/store/lang";
import ToggleLangButton from "./ToggleLangButton";
import ThemeToggleButton from "./ToggleThemeButton";
import Link from "next/link";

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

    return (
        <header className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-2">
                <div className="text-lg font-bold p-2 w-9 h-9 flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white">JL</div>
                <span className="text-md text-black dark:text-white">Jormaedes Luís</span>
            </div>

            <nav className="container mx-auto flex flex-1 justify-center items-center px-6">
                <ul className="flex space-x-4 py-2 px-4 bg-white/5 backdrop-blur-md shadow-lg rounded-full">
                    {navLinks.map((link) => (
                        <li key={link.name[lang]} className="text-black dark:text-white">
                            <Link href={link.href} className="hover:text-gray-400 ">
                                {link.name[lang]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center space-x">
                <ToggleLangButton />
                <ThemeToggleButton />
            </div>
        </header>
    );
}