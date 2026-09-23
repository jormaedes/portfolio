"use client";

import useLangStore from "@/app/store/lang";
import { Globe } from "lucide-react";

export default function ToggleLangButton() {
    const { lang, toggleLang } = useLangStore();

    return (
        <button
            onClick={toggleLang}
            className="p-1.5 sm:p-2 flex items-center cursor-pointer rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0 text-zinc-800 dark:text-zinc-200"
            aria-label="Toggle language"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
        >
            <span className="mr-1 text-xs sm:text-sm font-semibold">{lang === "pt" ? "EN" : "PT"}</span>
            <Globe size={18} className="sm:w-5 sm:h-5" />
        </button>
    );
}