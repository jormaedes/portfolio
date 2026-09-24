"use client";

import { portfolio, Portfolio } from "@/app/data/portfolio";
import useLangStore from "@/app/store/lang";
import { GlobeCode } from "lucide-react";

const servicesContent = {
    title: {
        pt: 'O QUE EU FAÇO',
        en: 'WHAT I DO',
    }
}

export default function Services(){

    const { lang } = useLangStore();

    return (
        <section id="services">
            <h2> {servicesContent.title[lang]} </h2>
            {portfolio.services.map((service, index) => 
                <div key={index}>
                    <GlobeCode />
                    <p> {service.name[lang]} </p>
                    <p> {service.description[lang]} </p>
                </div>
            )}
        </section>
    )
}