"use client";

import { portfolio } from "@/app/data/portfolio";
import useLangStore from "@/app/store/lang";
import { FormEvent, useState } from "react";
import { sendContactMessage } from "@/actions/contact";
import { ArrowUpRight, Mail } from "lucide-react";


const contactContent = {
    title: {
        pt: 'Entre em contato comigo',
        en: 'Get in touch with me',
    },
    content_1: {
        pt: "Você tem um projeto em mente? Vamos criar algo incrível juntos.",
        en: "Do you have a project in mind? Let's create something amazing together.",
    },
    content_2: {
        pt: "Vamos criar algo incrível juntos.",
        en: "Let's create something amazing together.",
    },
    form: {
        name: { pt: "Nome", en: "Name" },
        email: { pt: "Email", en: "Email" },
        message: { pt: "Mensagem", en: "Message" },
        namePlaceholder: { pt: "O seu nome", en: "Your name" },
        emailPlaceholder: { pt: "O seu email", en: "Your email" },
        messagePlaceholder: { pt: "Como posso ajudar?", en: "How can I help?" },
        submit: { pt: "Enviar mensagem", en: "Send message" },
        sending: { pt: "A enviar...", en: "Sending..." },
        success: {
            pt: "Mensagem enviada. Obrigado pelo contacto!",
            en: "Message sent. Thank you for reaching out!",
        },
        error: {
            pt: "Não foi possível enviar a mensagem. Tente novamente.",
            en: "The message could not be sent. Please try again.",
        },
    }
};

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

        setStatus(result.success ? "success" : "error");
    } catch (error) {
        setStatus("error");
    }
}

    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d0d12] transition-colors duration-500 overflow-hidden scroll-mt-20 pointer-events-auto">
            <div className="container mx-auto max-w-6xl">
                <h2 id="contact"> {contactContent.title[lang]} </h2>
                <div className="mt-10 grid gap-8 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="animate-slide-left">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                            <Mail size={21} />
                        </div>
                        <p className="max-w-md text-lg font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                            {contactContent.content_1[lang]}
                        </p>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                            {contactContent.content_2[lang]}
                        </p>
                        <a
                            href={`mailto:${portfolio.socialLinks.email}`}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 transition-colors hover:text-violet-600 dark:text-zinc-200 dark:hover:text-violet-300"
                        >
                            {portfolio.socialLinks.email}
                            <ArrowUpRight size={15} />
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="animate-slide-right space-y-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-zinc-800/80 dark:bg-zinc-800/40 sm:p-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                                    {contactContent.form.name[lang]}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={contactContent.form.namePlaceholder[lang]}
                                    required
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                                    {contactContent.form.email[lang]}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder={contactContent.form.emailPlaceholder[lang]}
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                                {contactContent.form.message[lang]}
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={5}
                                placeholder={contactContent.form.messagePlaceholder[lang]}
                                onChange={(event) => setMessage(event.target.value)}
                                value={message}
                                className="w-full resize-y rounded-lg border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                            />
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p aria-live="polite" className={`text-xs ${status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                                {status === "success" && contactContent.form.success[lang]}
                                {status === "error" && contactContent.form.error[lang]}
                            </p>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-zinc-800 disabled:cursor-wait disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                            >
                                {status === "loading" ? contactContent.form.sending[lang] : contactContent.form.submit[lang]}
                                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}