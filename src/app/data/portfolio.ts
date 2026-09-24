export type Locale = "pt" | "en";
export type Localized = Record<Locale, string>;

export type Service = {
    name: Localized;
    description: Localized;
};

export type ProjectLink = {
    label: string;
    url: string;
};

export type Project = {
    slug: string;
    featured: boolean; // true = aparece em destaque; false = secção "mais projetos"
    name: Localized;
    description: Localized;
    imageSrc: string; // screenshots em /public/projects/
    stack: string[];
    links: ProjectLink[];
};

export type Technology = {
    name: string;
    icon: string;
};

export type SocialLinks = {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
    discord: string;
};

export type Portfolio = {
    name: string;
    aboutMe: Localized;
    yearsOfExperience: number;
    socialLinks: SocialLinks;
    services: Service[];
    projects: Project[];
    technologies: Technology[];
};

const devicon = (name: string, variant: "original" | "plain" = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const portfolio: Portfolio = {
    name: "Jormaedes Luís",
    aboutMe: {
        pt: "Sou programador full stack júnior, baseado em Luanda. Estudo Ciências da Computação na Universidade Katyavala Bwila e programação na 42 Luanda, com foco em programação de sistemas (C e C++). Em paralelo, sigo o currículo de JavaScript Full Stack do The Odin Project, onde construo aplicações completas com Node.js, PostgreSQL, React e Next.js. Tenho experiência profissional em desenvolvimento frontend na Hidrotap e procuro oportunidades, locais ou remotas, para crescer numa equipa de desenvolvimento.",
        en: "I'm a junior full stack developer based in Luanda, Angola. I study Computer Science at Universidade Katyavala Bwila and programming at 42 Luanda, where I focus on systems programming in C and C++. Alongside that, I follow The Odin Project's Full Stack JavaScript curriculum, building complete applications with Node.js, PostgreSQL, React and Next.js. I have professional frontend experience at Hidrotap and I'm looking for opportunities, local or remote, to grow within a development team.",
    },

    yearsOfExperience: 2,

    socialLinks: {
        github: "https://github.com/jormaedes",
        linkedin: "https://www.linkedin.com/in/jormaedes",
        email: 'jormahed@gmail.com',
        whatsapp: 'https://wa.me/244940817186',
        discord: 'https://discord.com/channels/jormaedes'
    },

    services: [
        {
            name: {
                pt: "Sites e landing pages",
                en: "Websites and landing pages",
            },
            description: {
                pt: "Criação de sites responsivos e rápidos com Next.js, React e Tailwind CSS, prontos para publicar.",
                en: "Responsive, fast websites built with Next.js, React and Tailwind CSS, ready to deploy.",
            },
        },
        {
            name: {
                pt: "APIs REST e backend",
                en: "REST APIs and backend",
            },
            description: {
                pt: "Desenvolvimento de APIs com Node.js e Express, base de dados PostgreSQL com Prisma, autenticação JWT e validação de dados.",
                en: "API development with Node.js and Express, PostgreSQL databases with Prisma, JWT authentication and data validation.",
            },
        },
        {
            name: {
                pt: "Aplicações web completas",
                en: "Full stack web applications",
            },
            description: {
                pt: "Aplicações com autenticação, painéis de administração e ligação entre frontend e backend, do modelo de dados até ao deploy.",
                en: "Applications with authentication, admin dashboards and a connected frontend and backend, from data model to deployment.",
            },
        },
        {
            name: {
                pt: "Melhoria de interfaces existentes",
                en: "Improving existing interfaces",
            },
            description: {
                pt: "Correção de bugs, melhoria de responsividade e novas funcionalidades em frontends já existentes.",
                en: "Bug fixes, responsiveness improvements and new features for existing frontends.",
            },
        },
    ],

    projects: [
        {
            slug: "webrtc-video-chat",
            featured: true,
            name: {
                pt: "Videochamada P2P com WebRTC",
                en: "P2P Video Chat with WebRTC",
            },
            description: {
                pt: "Videochamada peer-to-peer em tempo real, construída em equipa. Usa WebRTC para a ligação de vídeo entre utilizadores e WebSockets para a sinalização, com servidor em Node.js e Express publicado no Render.",
                en: "Real-time peer-to-peer video chat, built as a team. It uses WebRTC for the video connection between users and WebSockets for signaling, with a Node.js and Express server deployed on Render.",
            },
            imageSrc: "/projects/webrtc.png",
            stack: ["WebRTC", "Node.js", "Express", "WebSockets", "Render"],
            links: [
                { label: "Live", url: "https://webrtc-video-chat-gnj9.onrender.com" }
            ],
        },
        {
            slug: "blog-fullstack",
            featured: true,
            name: {
                pt: "Blog full stack (API, Admin e Leitor)",
                en: "Full Stack Blog (API, Admin and Reader)",
            },
            description: {
                pt: "Plataforma de blog dividida em três repositórios: uma API REST com autenticação JWT e validação de dados, um painel de administração em Next.js e um site público para leitores.",
                en: "Blog platform split into three repositories: a REST API with JWT authentication and data validation, an admin dashboard in Next.js and a public site for readers.",
            },
            imageSrc: "/projects/blog.png",
            stack: [
                "Node.js",
                "Express",
                "Prisma",
                "PostgreSQL",
                "JWT",
                "Next.js",
                "Tailwind CSS"
            ],
            links: [
                { label: "Live: Reader", url: "https://blog-client-three.vercel.app" },
                { label: "GitHub: API", url: "https://github.com/jormaedes/blog-api" },
                { label: "Live: Admin", url: "https://blog-admin-sand-omega.vercel.app" },
                { label: "GitHub: Admin", url: "https://github.com/jormaedes/blog-admin" },
                { label: "GitHub: Reader", url: "https://github.com/jormaedes/blog-client" }
            ],
        },
        {
            slug: "members-only",
            featured: true,
            name: {
                pt: "Members Only",
                en: "Members Only",
            },
            description: {
                pt: "Aplicação com autenticação via Passport.js, gestão de sessões e PostgreSQL, com papéis de membro e administrador. Interface em EJS, publicada no Vercel.",
                en: "Application with Passport.js authentication, session management and PostgreSQL, with member and admin roles. EJS views, deployed on Vercel.",
            },
            imageSrc: "/projects/members-only.png",
            stack: ["Node.js", "Express", "Passport.js", "PostgreSQL", "EJS", "Vercel"],
            links: [
                { label: "Live", url: "https://members-only-chi-eight.vercel.app/" },
                { label: "GitHub", url: "https://github.com/jormaedes/Members-Only" }
            ],
        },
        {
            slug: "inventory-app",
            featured: true,
            name: {
                pt: "Aplicação de Inventário",
                en: "Inventory Application",
            },
            description: {
                pt: "Aplicação de gestão de inventário com PostgreSQL, validação de formulários com express-validator e interface em Tailwind CSS v4.",
                en: "Inventory management application with PostgreSQL, form validation with express-validator and a Tailwind CSS v4 interface.",
            },
            imageSrc: "/projects/inventory.png",
            stack: [
                "Node.js",
                "Express",
                "PostgreSQL",
                "Tailwind CSS",
                "express-validator",
            ],
            links: [
                { label: "Live", url: "https://inventory-app-five-rho.vercel.app" },
                { label: "GitHub", url: "https://github.com/jormaedes/inventory-app" }
            ],
        },
        {
            slug: "battleship",
            featured: false,
            name: {
                pt: "Battleship",
                en: "Battleship",
            },
            description: {
                pt: "Jogo de batalha naval desenvolvido com TDD usando Jest, Webpack e uma camada completa de manipulação do DOM.",
                en: "Battleship game built with TDD using Jest, Webpack and a complete DOM layer.",
            },
            imageSrc: "/projects/battleship.png",
            stack: ["JavaScript", "Jest", "Webpack"],
            links: [
                { label: "Live", url: "https://jormaedes.github.io/battleship" },
                { label: "GitHub", url: "https://github.com/jormaedes/battleship" }
            ],
        },
        {
            slug: "memory-card",
            featured: false,
            name: {
                pt: "Jogo da Memória Pokémon",
                en: "Pokémon Memory Card Game",
            },
            description: {
                pt: "Jogo de memória com dados da PokéAPI, pedidos em paralelo com Promise.all e cartas baralhadas com o algoritmo Fisher-Yates.",
                en: "Memory game using data from the PokéAPI, parallel requests with Promise.all and cards shuffled with the Fisher-Yates algorithm.",
            },
            imageSrc: "/projects/memory-card.png",
            stack: ["JavaScript", "PokéAPI"],
            links: [
                { label: "Live", url: "https://memorycard-dun.vercel.app" },
                { label: "GitHub", url: "https://github.com/jormaedes/memorycard" }
            ],
        },
        {
            slug: "react-shopping-cart",
            featured: false,
            name: {
                pt: "Carrinho de Compras em React",
                en: "React Shopping Cart",
            },
            description: {
                pt: "Carrinho de compras em React com estado gerido por Zustand, estilizado com Tailwind e com produtos vindos da Fake Store API.",
                en: "React shopping cart with state managed by Zustand, styled with Tailwind and using products from the Fake Store API.",
            },
            imageSrc: "/projects/shopping-cart.png",
            stack: ["React", "Zustand", "Tailwind CSS", "Fake Store API", "Vercel"],
            links: [
                { label: "Live", url: "https://shopping-cart-theta-amber.vercel.app/" },
                { label: "GitHub", url: "https://github.com/jormaedes/shopping-cart" }
            ],
        },
    ],

    technologies: [
        { name: "HTML", icon: devicon("html5") },
        { name: "CSS", icon: devicon("css3") },
        { name: "JavaScript", icon: devicon("javascript") },
        { name: "TypeScript", icon: devicon("typescript") },
        { name: "React", icon: devicon("react") },
        { name: "Zustand", icon: devicon("zustand") },
        { name: "Next.js", icon: devicon("nextjs") },
        { name: "Node.js", icon: devicon("nodejs") },
        { name: "Express", icon: devicon("express") },
        { name: "PostgreSQL", icon: devicon("postgresql") },
        { name: "Prisma", icon: devicon("prisma") },
        { name: "Tailwind CSS", icon: devicon("tailwindcss") },
        { name: "Jest", icon: devicon("jest", "plain") },
        { name: "Webpack", icon: devicon("webpack") },
        { name: "C", icon: devicon("c") },
        { name: "C++", icon: devicon("cplusplus") },
        { name: "Git", icon: devicon("git") },
        { name: "GitHub", icon: devicon("github") },
    ],
};