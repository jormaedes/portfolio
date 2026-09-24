"use client";

import useLangStore from "@/app/store/lang";
import { portfolio } from "@/app/data/portfolio";

const projectContent = {
    title: {
        pt: "Projetos",
        en: "Projects",
    }
}

export default function Projects() {

    const { lang } = useLangStore();

    return (
        <section>
            <h2>{projectContent.title[lang]}</h2>
        </section>
    )
}