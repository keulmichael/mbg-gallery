import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[60dvh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-clay">Erreur 404</p>
        <div className="space-y-4">
          <h1 className="text-5xl leading-tight sm:text-6xl">Page introuvable.</h1>
          <p className="max-w-xl leading-7 text-ink/64">
            La page demandee n&apos;existe pas ou n&apos;est plus disponible sur MBG Gallery.
          </p>
        </div>
        <Link className={buttonVariants()} href="/">
          Retour a l&apos;accueil
        </Link>
      </section>
    </SiteShell>
  );
}
