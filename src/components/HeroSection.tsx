"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowUpRight } from "lucide-react";
import useLangStore from "@/app/store/lang";

const HERO_IMAGE = "/photo.png";

const heroContent = {
    badge: {
        en: "Available for new opportunities",
        pt: "Disponível para novas oportunidades",
    },
    iam: {
        en: "I AM",
        pt: "EU SOU",
    },
    nameFirst: "JORMAEDES",
    nameLast: "LUÍS",
    roleFirst: "FULL STACK",
    roleLast: "DEVELOPER",
    specialization: {
        en: "Specialized in Full Stack Development, Next.js, React, Node.js, PostgreSQL and Systems Programming.",
        pt: "Especializado em Desenvolvimento Full Stack, Next.js, React, Node.js, PostgreSQL e Programação de Sistemas.",
    },
    viewProjects: {
        en: "View Projects",
        pt: "Ver Projetos",
    },
    downloadCv: {
        en: "Download CV",
        pt: "Baixar CV",
    },
};

export default function HeroSection() {
    const { lang } = useLangStore();

    return (
        <section className="relative w-full h-screen h-dvh max-h-screen flex flex-col justify-between overflow-hidden bg-white dark:bg-[#0d0d12] transition-colors duration-500 z-0">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
            >
                <div className="w-[500px] sm:w-[720px] lg:w-[960px] h-[450px] sm:h-[600px] lg:h-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.16)_0%,rgba(147,51,234,0.06)_40%,transparent_75%)] dark:bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.34)_0%,rgba(59,7,100,0.22)_45%,transparent_75%)] blur-2xl" />
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-44 sm:h-56 bg-gradient-to-b from-purple-200/30 via-purple-100/10 to-transparent dark:from-purple-950/40 dark:via-purple-950/10 to-transparent z-0"
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden">
                {/* LINHA SUPERIOR: Badge (Esquerda) e Resumo (Direita) */}
                <div className="flex items-start justify-between gap-3 z-20">
                    {/* Badge com ponto luminoso pulsante - Anima a partir da esquerda */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-violet-500/50 animate-slide-left [animation-delay:150ms]">
                        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75 dark:bg-violet-400" />
                            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-violet-600 dark:bg-violet-400" />
                        </span>
                        <span className="text-[11px] sm:text-xs md:text-sm font-medium text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                            {heroContent.badge[lang]}
                        </span>
                    </div>

                    {/* Resumo de Especialidades - Anima a partir da direita */}
                    <div className="max-w-[190px] sm:max-w-[280px] md:max-w-[320px] text-right animate-slide-right [animation-delay:150ms]">
                        <p className="text-[10px] sm:text-xs md:text-sm font-normal text-zinc-600 dark:text-zinc-400 leading-tight sm:leading-relaxed">
                            {heroContent.specialization[lang]}
                        </p>
                    </div>
                </div>

                {/* ÁREA CENTRAL: FOTO DO AUTOR - Anima a partir de baixo */}
                <div className="relative flex-1 min-h-[220px] w-full flex items-end justify-center z-10 my-1 animate-slide-up [animation-delay:250ms]">
                    <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] h-full flex items-end justify-center">
                        <Image
                            src={HERO_IMAGE}
                            alt="Jormaedes Luís"
                            fill
                            priority
                            loading="eager"
                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 540px"
                            className="object-contain object-bottom select-none pointer-events-none drop-shadow-2xl"
                            style={{
                                maskImage:
                                    "linear-gradient(to bottom, black 82%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, black 82%, transparent 100%)",
                            }}
                        />
                    </div>
                </div>

                <div className="hidden lg:flex flex-col justify-end absolute bottom-6 xl:bottom-8 left-6 xl:left-12 z-20 max-w-[340px] xl:max-w-[380px]">
                    <div className="space-y-1 animate-slide-left [animation-delay:300ms]">
                        <p className="text-2xl xl:text-3xl font-black tracking-tight text-zinc-950 dark:text-zinc-100 uppercase">
                            {heroContent.iam[lang]}
                        </p>
                        <h1 className="text-5xl xl:text-7xl font-black tracking-tighter uppercase leading-[0.88] text-zinc-950 dark:text-white">
                            {heroContent.nameFirst}
                            <br />
                            {heroContent.nameLast}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-5 animate-slide-left [animation-delay:450ms]">
                        <Link
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-5 py-2.5 xl:py-3 text-sm font-semibold transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-violet-950/15 dark:shadow-violet-500/10 cursor-pointer"
                        >
                            <span>{heroContent.viewProjects[lang]}</span>
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>

                        <Link
                            href="/cv_jormaedes_pt.pdf"
                            download="cv_jormaedes"
                            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 px-4 py-2.5 xl:py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-300 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        >
                            <span>{heroContent.downloadCv[lang]}</span>
                            <Download
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                            />
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block absolute bottom-6 xl:bottom-8 right-6 xl:right-12 z-20 text-right animate-slide-right [animation-delay:350ms]">
                    <h2 className="text-5xl xl:text-7xl font-black tracking-tighter uppercase leading-[0.88] text-zinc-950 dark:text-white">
                        {heroContent.roleFirst}
                        <br />
                        {heroContent.roleLast}
                    </h2>
                </div>

                <div className="lg:hidden z-20 flex items-end justify-between gap-2 pt-1">
                    <div className="space-y-1 max-w-[62%] sm:max-w-[65%] animate-slide-left [animation-delay:300ms]">
                        <p className="text-[11px] sm:text-xs font-extrabold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                            {heroContent.iam[lang]}
                        </p>
                        <h1 className="text-xl sm:text-3xl font-black tracking-tight uppercase leading-[0.9] text-zinc-950 dark:text-white">
                            {heroContent.nameFirst} {heroContent.nameLast}
                        </h1>

                        <div className="flex flex-wrap items-center gap-2 pt-1.5">
                            <Link
                                href="#projects"
                                className="group inline-flex items-center gap-1.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-3 py-1.5 text-xs font-semibold shadow-sm cursor-pointer"
                            >
                                <span>{heroContent.viewProjects[lang]}</span>
                                <ArrowUpRight size={13} />
                            </Link>

                            <Link
                                href="/cv_jormaedes_pt.pdf"
                                download="cv_jormaedes"
                                className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 px-3 py-1.5 text-xs font-medium backdrop-blur-md cursor-pointer"
                            >
                                <span>{heroContent.downloadCv[lang]}</span>
                                <Download size={13} />
                            </Link>
                        </div>
                    </div>

                    <div className="text-right animate-slide-right [animation-delay:350ms]">
                        <h2 className="text-lg sm:text-2xl font-black tracking-tight uppercase leading-[0.9] text-zinc-950 dark:text-white">
                            {heroContent.roleFirst}
                            <br />
                            {heroContent.roleLast}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}