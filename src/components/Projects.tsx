"use client";

import useLangStore from "@/app/store/lang";
import { portfolio } from "@/app/data/portfolio";
import ProjectCard from "./ProjectCard";

const projectContent = {
    title: {
        pt: "PROJETOS",
        en: "PROJECTS",
    }
}

export default function Projects() {

    const { lang } = useLangStore();

    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d0d12] transition-colors duration-500 overflow-hidden scroll-mt-20 pointer-events-auto">
            <div className="container mx-auto max-w-6xl">
                <h2 id="projects">{projectContent.title[lang]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
                {portfolio.projects.map((project, index)=>(
                    <div key={project.slug} style={{ animationDelay: `${index * 90}ms` }} className="animate-slide-up">
                        <ProjectCard {...project}/>
                    </div>
                ))}
            </div>
                </div>
        </section>
    )
}