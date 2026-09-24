"use client";

import { portfolio } from "@/app/data/portfolio";
import useLangStore from "@/app/store/lang";
import { FormEvent, useState } from "react";
import { sendContactMessage } from "@/actions/contact";
import { Heading1 } from "lucide-react";


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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    try {
        const result = await sendContactMessage(name, email, message);

        console.log("RESULTADO:", result);

        setStatus(result.success ? "success" : "error");
    } catch (error) {
        console.error("ERRO NO CLIENT:", error);
        setStatus("error");
    }
}


    if (status === 'success') return (
        <h1>Funcionou</h1>
    )

    if (status === 'error') return (
        <h1>Errou</h1>
    )
    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d0d12] transition-colors duration-500 overflow-hidden scroll-mt-20 pointer-events-auto">
            <div className="container mx-auto max-w-6xl">
                <h2 id="contact"> {contactContent.title[lang]} </h2>
                <div className="flex">
                    <div>
                        <p> {contactContent.content_1[lang]} </p>
                        <p> {contactContent.content_2[lang]} </p>

                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Input your name"
                                        required
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Input your email"
                                        required
                                        value={email}

                                        onChange={(event) => setEmail(event.target.value)}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        placeholder="Input your message"
                                        onChange={(event) => setMessage(event.target.value)}
                                        value={message}
                                    >
                                    </textarea>
                                </div>
                                <button type="submit" className="bg-black text-white">Send</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}