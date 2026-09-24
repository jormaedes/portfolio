import { Resend } from 'resend';
import { portfolio } from '@/app/data/portfolio';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

interface msgData {
    name: string;
    email: string;
    message: string;
}

export async function sendMail({ name, email, message }: msgData) {

    try {
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Todos os campos são obrigatórios.' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio <https://portfolio-six-orpin-81.vercel.app>',
            to: portfolio.socialLinks.email,
            subject: `Nova mensagem de ${name}`,
            replyTo: email,
            text: message,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        return NextResponse.json(
            { error: 'Erro ao processar o pedido.' },
            { status: 500 }
        );
    }
}

