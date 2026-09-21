"use client";

import useLangStore from "@/app/store/lang";
import { Globe } from "lucide-react";

export default function ToggleLangButton() {
    const { lang, toggleLang } = useLangStore();

    return (
        <button
            onClick={toggleLang}
            className="p-2 flex items-center cursor-pointer"
        >
            <span className="mr-1 text-sm">{lang === "pt" ? "EN" : "PT"}</span>
            <Globe />
        </button>
    );
}