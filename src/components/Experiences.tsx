"use client";

import { useState } from "react";
import { BriefcaseBusiness, ChevronDown, MapPin } from "lucide-react";
import { portfolio } from "@/app/data/portfolio";
import useLangStore from "@/app/store/lang";
import ScrollReveal from "./ScrollReveal";

const experienceContent = {
    title: { pt: "EXPERIÊNCIAS", en: "EXPERIENCE" },
    // description: {
    //     pt: "Uma seleção do trabalho que tenho desenvolvido em equipas e projectos reais.",
    //     en: "A selection of the work I have delivered across real teams and projects.",
    // },
    responsibilities: { pt: "Responsabilidades", en: "Responsibilities" },
};

export default function Experiences() {
    const { lang } = useLangStore();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="experiences" className="w-full scroll-mt-20 bg-white px-4 py-8 transition-colors duration-500 dark:bg-[#0d0d12] sm:px-6 sm:py-16 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <ScrollReveal className="animate-slide-up">
                    <div className="flex flex-col border-b gap-3 border-zinc-200/80 pb-8 dark:border-zinc-800/80 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 id="experiences">{experienceContent.title[lang]}</h2>
                            {/* <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{experienceContent.description[lang]}</p> */}
                        </div>
                        <BriefcaseBusiness className="hidden text-violet-600 dark:text-violet-400 sm:block" size={28} />
                    </div>
                </ScrollReveal>

                <div className="mt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                    {(portfolio.experiences ?? []).map((experience, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <ScrollReveal key={`${experience.company.pt}-${experience.period.pt}`} style={{ animationDelay: `${index * 90}ms` }} className="animate-slide-up">
                                <article className="border-b border-zinc-200/80 dark:border-zinc-800/80">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                        className="group flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left sm:items-center sm:py-6"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">{experience.company[lang]}</p>
                                            <h3 className="mt-1 text-lg font-bold text-zinc-900 transition-colors group-hover:text-violet-600 dark:text-zinc-100 dark:group-hover:text-violet-300 sm:text-xl">{experience.title[lang]}</h3>
                                        </div>
                                        <div className="flex shrink-0 items-center gap-3 text-right text-xs text-zinc-500 dark:text-zinc-400">
                                            <div>
                                                <span className="block font-medium text-zinc-700 dark:text-zinc-300">{experience.period[lang]}</span>
                                                {experience.location && <span className="mt-1 inline-flex items-center gap-1.5"><MapPin size={13} />{experience.location[lang]}</span>}
                                            </div>
                                            <ChevronDown className={`text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-violet-600 dark:text-violet-400" : ""}`} size={20} />
                                        </div>
                                    </button>

                                    <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="min-h-0 overflow-hidden">
                                            <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40 sm:p-6">
                                                <div>
                                                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{experience.description[lang]}</p>
                                                </div>
                                                <div className="mt-5 border-t border-zinc-200/80 pt-5 dark:border-zinc-800/80">
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">{experienceContent.responsibilities[lang]}</h4>
                                                    <ul className="mt-3 space-y-2">
                                                        {experience.responsibilities?.map((responsibility) => (
                                                            <li key={responsibility[lang]} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                                                                <span>{responsibility[lang]}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}