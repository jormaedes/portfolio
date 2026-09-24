"use client";

import { portfolio } from "@/app/data/portfolio";
import useLangStore from "@/app/store/lang";
import { GlobeCode } from "lucide-react";

const servicesContent = {
    title: {
        pt: 'O QUE EU FAÇO',
        en: 'WHAT I DO',
    }
}

export default function Services() {

    const { lang } = useLangStore();

    return (
        <section  className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d0d12] transition-colors duration-500 overflow-hidden scroll-mt-20 pointer-events-auto">
            <div className="container mx-auto max-w-6xl">
                <h2 id="services"> {servicesContent.title[lang]} </h2>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">

                    {portfolio.services.map((service, index) =>
                        <div key={index} style={{ animationDelay: `${index * 90}ms` }} className="group animate-slide-up rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-800/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-50/30 hover:shadow-lg hover:shadow-violet-950/5 dark:hover:bg-violet-950/20">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 dark:bg-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                    <GlobeCode size={20} />

                                </div>

                            </div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                                {service.name[lang]}
                            </h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                                {service.description[lang]}
                            </p>
                        </div>
                    )}
                </div>
            </div>


        </section>
    )
}