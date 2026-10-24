import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#f6f6f4] px-6 py-16 text-[#171717] dark:bg-[#0d0d12] dark:text-[#f1f3f5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(109,40,217,0.12),transparent_55%)]"
      />

      <div className="w-full max-w-3xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
          <span className="h-px w-8 bg-accent-purple/50" />
          <span>Erro 404</span>
          <span className="h-px w-8 bg-accent-purple/50" />
        </div>

        <div className="relative mx-auto mb-7 w-fit">
          <span
            aria-hidden="true"
            className="font-serif-display text-[clamp(9rem,35vw,20rem)] leading-[0.72] text-accent-purple/10"
          >
            404
          </span>
          <Compass
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-accent-purple sm:h-16 sm:w-16"
            strokeWidth={1.2}
          />
        </div>

        <h1 className="font-serif-display text-4xl leading-tight sm:text-5xl">
          Parece que saímos da rota.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-black/60 dark:text-white/60">
          A página que procuras não existe ou foi movida. Vamos voltar ao início?
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-sm bg-accent-purple px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5b21b6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-purple"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}