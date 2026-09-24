"use client"

import { portfolio, type Project } from "@/app/data/portfolio"
import useLangStore from "@/app/store/lang";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


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

export default function ProjectCard(project: Project) {
    const { lang } = useLangStore();
    return (
        <div className="group rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-800/40 p-5 sm:p-6 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-50/30 dark:hover:bg-violet-950/20">
            <div className="flex items-center justify-between mb-3">
                <img className="rounded-md" src={project.imageSrc} alt={project.name[lang]} />
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                {project.name[lang]}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                {project.description[lang]}
            </p>

            <div className="flex items-center gap-1.5 mt-1.5">
                <Link
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm cursor-pointer"

                    title="Ver a demo"
                >
                    <span>Live Demo</span>
                    <ArrowUpRight
                        size={14}
                        className="opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </Link>

                {project.links[1] && (
                    <Link
                        href={project.links[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-zinc-300/90 dark:border-zinc-700/90 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-[1.03] active:scale-[0.98] shadow-sm cursor-pointer"
                        title="Ver código fonte"
                    >
                        <GithubIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
                        <span>GitHub</span>
                    </Link>)
                }
            </div>
        </div>
    )
}