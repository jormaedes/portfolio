"use server";

import { Resend } from "resend";
import { portfolio } from "@/app/data/portfolio";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(
    name: string,
    email: string,
    message: string
) {
    if (!name || !email || !message) {
        return {
            success: false,
            error: "Todos os campos são obrigatórios.",
        };
    }

    console.log("RESEND_API_KEY existe:", !!process.env.RESEND_API_KEY);
    console.log("DESTINO:", portfolio.socialLinks.email);

    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: portfolio.socialLinks.email,
            subject: `Nova mensagem de ${name}`,
            replyTo: email,
            text: message,
        });

        console.log("RESEND DATA:", data);
        console.log("RESEND ERROR:", error);

        if (error) {
            return {
                success: false,
                error: error.message,
            };
        }

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error("RESEND EXCEPTION:", error);

        return {
            success: false,
            error: "Erro inesperado ao enviar o email.",
        };
    }
}
