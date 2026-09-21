"use client";

import ThemeToggleButton from "./ToggleThemeButton";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const { theme } = useTheme();

    return (
        <header className="container mx-auto flex justify-between items-center py-4 px-6 bg-gray-100 dark:bg-gray-900">
            <div>
                <div>JL</div>
                <span className="text-sm text-gray-400">Jormaedes Luís</span>
            </div>

            <nav className="container mx-auto flex flex-1 justify-center items-center">
                <ul className="flex space-x-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="hover:text-gray-400">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center space-x-4">
                <ThemeToggleButton />
                <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded">
                    Sign Up
                </button>
            </div>
        </header>
    );
}