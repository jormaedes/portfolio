import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jormaedes.is-a.dev";

const siteDescription =
  "Jormaedes Luís é um Desenvolvedor Full Stack de Angola, especializado no desenvolvimento de aplicações web modernas com JavaScript, React, Next.js, Node.js, Express e PostgreSQL. Conheça os seus projetos, competências e experiência.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Jormaedes Luís | Desenvolvedor Full Stack",
    template: "%s | Jormaedes Luís",
  },

  description: siteDescription,

  applicationName: "Jormaedes - Portfólio",

  authors: [
    {
      name: "Jormaedes Luís",
      url: siteUrl,
    },
  ],

  creator: "Jormaedes Luís",
  publisher: "Jormaedes Luís",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Jormaedes",
    "Jormaedes Luís",
    "Jormaedes desenvolvedor",
    "Jormaedes Full Stack",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Programador em Angola",
    "Desenvolvedor em Luanda",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Desenvolvimento Web",
    "Portfólio de Programador",
  ],

  openGraph: {
    type: "website",
    locale: "pt",
    url: siteUrl,
    siteName: "Jormaedes Luís | Portfólio",
    title: "Jormaedes Luís | Desenvolvedor Full Stack",
    description: siteDescription,
    images: [
      {
        url: "/photo.png",
        // width: 1200,
        // height: 630,
        alt: "Jormaedes Luís - Desenvolvedor Full Stack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jormaedes Luís | Desenvolvedor Full Stack",
    description: siteDescription,
    images: [
      {
        url: "/photo.png",
        alt: "Jormaedes Luís - Desenvolvedor Full Stack",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}