"use client";

import { portfolio } from "@/app/data/portfolio";
import useLangStore from "@/app/store/lang";
import { Mail } from "lucide-react";

const contactContent = {
    title: {
        pt: 'CONTACTO',
        en: 'CONTACT',
    },
    content_1: {
        pt: "Você tem um projeto em mente? Vamos criar algo incrível juntos.", 
        en: "Do you have a project in mind? Let's create something amazing together.",
    },
    content_2: {
        pt: "Vamos criar algo incrível juntos.", 
        en: "Let's create something amazing together.",
    }
}

export default function Contact() {

    const { lang } = useLangStore();

    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d0d12] transition-colors duration-500 overflow-hidden scroll-mt-20 pointer-events-auto">
            <div className="container mx-auto max-w-6xl">
                <h2 id="contact"> {contactContent.title[lang]} </h2>
                <div className="flex">
                    <div>
                        <p> {contactContent.content_1[lang]} </p>
                        <p> {contactContent.content_2[lang]} </p>

                        <div>
                            <form action={portfolio.socialLinks.email}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Input your name" required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Input your email" required />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" required placeholder="Input your message">
                                    
                                    </textarea>
                                </div>
                                <button type="submit">Send</button>
                            </form>
                        </div>

                    </div>
            
                </div>
            </div>
        </section>
    )
}