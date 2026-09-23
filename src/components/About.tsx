"use client";

import useLangStore from "@/app/store/lang";
import { CalendarCheck2, CodeXml, User } from "lucide-react";
import { portfolio } from '@/app/data/portfolio';

const aboutContent = {
    title: {
        pt: 'Sobre Mim',
        en: 'About Me'
    },
    yearsExperienceText: {
        pt: 'Anos de Experiência.',
        en: 'After I will translate'
    },
    projectsText: {
        pt: 'Projetos construídos.',
        en: 'After I will translate'
    },
    clientsText: {
        pt: 'Clientes satisfeitos.',
        en: 'After I will translate'
    },
}

export default function AboutSection() {
    const { lang } = useLangStore();

    return (
        <section id="about" className="pointer-events-auto">

            <div className="text-center">
                <h2> {aboutContent.title[lang]} </h2>
            </div>

            <div>

                <div>
                    <p> {portfolio.aboutMe[lang]} </p>
                </div>

                <div className="flex bg-gray-600 items-center mx-auto py-2 px-4 justify-between rounded-md">
                    <div>
                        <span className="flex">
                            <CalendarCheck2 />

                            {portfolio.yearsOfExperience}+
                        </span>
                        <span> {aboutContent.yearsExperienceText[lang]} </span>
                    </div>

                    <div>
                        <span className="flex">
                            <CodeXml />

                            {portfolio.projects.length}+
                        </span>
                        <span> {aboutContent.projectsText[lang]} </span>
                    </div>

                    <div>
                        <span className="flex">
                            <User />
                            {4}+
                        </span>
                        <span> {aboutContent.clientsText[lang]} </span>
                    </div>
                </div>
            </div>

        </section>
    )
}