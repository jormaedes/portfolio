"use client";

import useLangStore from "@/app/store/lang";
import {
    CalendarCheck2,
    CodeXml,
    MapPin,
    GraduationCap,
    Download,
    ArrowUpRight,
    Goal,
} from "lucide-react";
import { portfolio } from "@/app/data/portfolio";
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

const aboutContent = {
    badge: {
        pt: "Sobre Mim",
        en: "About Me",
    },
    headingFirst: {
        pt: "Da Lógica de Baixo Nível",
        en: "From Low-Level Logic",
    },
    headingSecond: {
        pt: "às Soluções Web Modernas.",
        en: "to Modern Web Solutions.",
    },
    lead: {
        pt: "Desenvolvedor Full Stack apaixonado por arquiteturas eficientes, código limpo e interfaces que encantam o usuário.",
        en: "Full Stack Developer passionate about efficient architecture, clean code, and interfaces that delight users.",
    },
    locationLabel: {
        pt: "Localização",
        en: "Location",
    },
    locationValue: {
        pt: "Luanda, Angola",
        en: "Luanda, Angola",
    },
    educationLabel: {
        pt: "Formação",
        en: "Education",
    },
    educationValue: {
        pt: "42 Luanda & UKB",
        en: "42 Luanda & UKB",
    },
    focusLabel: {
        pt: "Especialidade",
        en: "Focus",
    },
    focusValue: {
        pt: "Full Stack & Sistemas",
        en: "Full Stack & Systems",
    },
    socialTitle: {
        pt: "Conecte-se comigo",
        en: "Connect with me",
    },
    downloadCv: {
        pt: "Baixar CV",
        en: "Download CV",
    },
    stats: {
        experience: {
            number: portfolio.yearsOfExperience.toString()+'+',
            title: {
                pt: "Anos de Experiência",
                en: "Years Experience",
            },
            subtitle: {
                pt: "Prática contínua em projetos reais",
                en: "Continuous real-world practice",
            },
        },
        projects: {
            number: "20+",
            title: {
                pt: "Projetos Construídos",
                en: "Projects Completed",
            },
            subtitle: {
                pt: "WebRTC, APIs REST e Aplicações Web",
                en: "WebRTC, REST APIs & Web Apps",
            },
        },
        dedication: {
            number: "100%",
            title: {
                pt: "Dedicação & Clean Code",
                en: "Focus & Clean Code",
            },
            subtitle: {
                pt: "Boas práticas, rigor e performance",
                en: "Best practices, rigor & performance",
            },
        },
    },
};

export default function AboutSection() {
    const { lang } = useLangStore();

    return (
        <section
            className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d0d12] transition-colors duration-500 overflow-hidden scroll-mt-20 pointer-events-auto"
        >
            {/* Brilhos sutis em degradê roxo de fundo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 right-0 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(109,40,217,0.18)_0%,transparent_70%)] blur-3xl -z-10"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-0 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.09)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(76,29,149,0.18)_0%,transparent_70%)] blur-3xl -z-10"
            />

            <div className="container mx-auto max-w-6xl">
                {/* -------------------------------------------------------------
                    CARD CONTAINER PRINCIPAL
                    ------------------------------------------------------------- */}
                <div className="relative rounded-lg sm:rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-violet-950/5 dark:shadow-violet-950/20">
                    {/* Linha Superior: Badge e Tagline */}
                    <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
                        {/* Badge Roxo Elegante */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 dark:border-violet-400/25 bg-violet-500/10 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600 dark:bg-violet-400" />
                            </span>
                            <span id="about" className="text-xs font-bold tracking-wider uppercase">
                                {aboutContent.badge[lang]}
                            </span>
                        </div>

                        {/* Detalhe estético: Tag do Autor */}
                        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
                            <span>JORMAEDES</span>
                            
                            <span>LUÍS</span>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------
                        CORPO CENTRAL EM DUAS COLUNAS
                        Coluna Esquerda: Título de impacto, dados rápidos e links sociais
                        Coluna Direita: Texto lead, biografia completa e tags
                        --------------------------------------------------------- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Coluna Esquerda (5 colunas) */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Título de Destaque */}
                            <div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
                                    {aboutContent.headingFirst[lang]}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-300">
                                        {aboutContent.headingSecond[lang]}
                                    </span>
                                </h2>
                            </div>

                            {/* Informações rápidas em Chips (Localização, Formação, Especialidade) */}
                            <div className="space-y-2.5 pt-1 border-t border-zinc-200/60 dark:border-zinc-800/60">
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                                        <MapPin size={16} />
                                    </div>
                                    <div>
                                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                                            {aboutContent.locationLabel[lang]}
                                        </span>
                                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                            {aboutContent.locationValue[lang]}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                                        <GraduationCap size={16} />
                                    </div>
                                    <div>
                                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                                            {aboutContent.educationLabel[lang]}
                                        </span>
                                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                            {aboutContent.educationValue[lang]}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                                        <Goal size={16} />
                                    </div>
                                    <div>
                                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                                            {aboutContent.focusLabel[lang]}
                                        </span>
                                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                            {aboutContent.focusValue[lang]}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* -------------------------------------------------
                                ESPAÇO PARA LINKS SOCIAIS (GITHUB E LINKEDIN)
                                ------------------------------------------------- */}
                            <div className="pt-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2.5">
                                    {aboutContent.socialTitle[lang]}
                                </span>

                                <div className="flex flex-wrap items-center gap-2.5">
                                    {/* Link GitHub */}
                                    <a
                                        href={portfolio.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 rounded-full border border-zinc-300/90 dark:border-zinc-700/90 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-[1.03] active:scale-[0.98] shadow-sm cursor-pointer"
                                        title="Abrir perfil no GitHub"
                                    >
                                        <GithubIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
                                        <span>GitHub</span>
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </a>

                                    {/* Link LinkedIn */}
                                    <a
                                        href={portfolio.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 rounded-full border border-zinc-300/90 dark:border-zinc-700/90 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] dark:hover:bg-[#0077b5] dark:hover:text-white dark:hover:border-[#0077b5] hover:scale-[1.03] active:scale-[0.98] shadow-sm cursor-pointer"
                                        title="Abrir perfil no LinkedIn"
                                    >
                                        <LinkedinIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                                        <span>LinkedIn</span>
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </a>

                                    {/* Botão Baixar CV */}
                                    <Link
                                        href="/cv_jormaedes_pt.pdf"
                                        download="cv_jormaedes"
                                        className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-300 hover:scale-[1.03] active:scale-[0.98] shadow-sm cursor-pointer"
                                        title="Baixar currículo em PDF"
                                    >
                                        <Download
                                            size={14}
                                            className="transition-transform duration-300 group-hover:translate-y-0.5"
                                        />
                                        <span>{aboutContent.downloadCv[lang]}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Coluna Direita (7 colunas): Textos e Detalhes */}
                        <div className="lg:col-span-7 space-y-4 lg:pt-1">
                            {/* Parágrafo de Destaque / Lead */}
                            <p className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                                {aboutContent.lead[lang]}
                            </p>

                            {/* Biografia detalhada vinda dos dados do portfólio */}
                            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                                {portfolio.aboutMe[lang]}
                            </p>

                            {/* Badges de Stacks Principais */}
                            <div className="pt-3">
                                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                    {portfolio.technologies.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white/90 transition-transform duration-200 hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800/80 dark:ring-zinc-800"
                                            title={tech.name}
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="h-5 w-5 object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    {/* ---------------------------------------------------------
                        BARRA DE ESTATÍSTICAS INFERIOR (Inspirada nas Imagens 1 e 2)
                        3 Cards modernos com ícones e métricas de impacto
                        --------------------------------------------------------- */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
                        {/* Card 1: Anos de Experiência */}
                        <div className="group rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-800/40 p-5 sm:p-6 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-50/30 dark:hover:bg-violet-950/20">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 dark:bg-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                    <CalendarCheck2 size={20} />
                                </div>
                                <span className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
                                    {aboutContent.stats.experience.number}
                                </span>
                            </div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                                {aboutContent.stats.experience.title[lang]}
                            </h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                                {aboutContent.stats.experience.subtitle[lang]}
                            </p>
                        </div>

                        {/* Card 2: Projetos Construídos (Destaque visual invertido / alto contraste como Imagem 1) */}
                        <div className="group rounded-xl border border-zinc-950 dark:border-zinc-700 bg-zinc-950 dark:bg-zinc-800/90 text-white p-5 sm:p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-900/20">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 rounded-lg bg-white/10 dark:bg-white/15 flex items-center justify-center text-violet-300 dark:text-violet-300">
                                    <CodeXml size={20} />
                                </div>
                                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                                    {aboutContent.stats.projects.number}
                                </span>
                            </div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                                {aboutContent.stats.projects.title[lang]}
                            </h3>
                            <p className="text-xs text-zinc-300 dark:text-zinc-400 mt-1 leading-normal">
                                {aboutContent.stats.projects.subtitle[lang]}
                            </p>
                        </div>

                        {/* Card 3: Dedicação & Clean Code */}
                        <div className="group rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-800/40 p-5 sm:p-6 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-50/30 dark:hover:bg-violet-950/20">
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 dark:bg-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                    <Goal size={20} />
                                </div>
                                <span className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
                                    {aboutContent.stats.dedication.number}
                                </span>
                            </div>
                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                                {aboutContent.stats.dedication.title[lang]}
                            </h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                                {aboutContent.stats.dedication.subtitle[lang]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}