import Link from "next/link";

import { siteConfig } from "@/config/site";
import { navigation } from "@/content/mbg";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-paper/58">{siteConfig.name}</p>
          <p className="mt-5 max-w-sm text-2xl leading-tight text-paper">
            Galerie d&apos;art contemporain itinerante, entre presence digitale et rendez-vous internationaux.
          </p>
        </div>
        <nav aria-label="Navigation secondaire">
          <p className="text-xs uppercase tracking-[0.2em] text-paper/48">Parcours</p>
          <ul className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-paper/30"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-paper/48">Legal</p>
          <ul className="mt-4 grid gap-2">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-sm text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-paper/30"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-4 py-5 text-xs text-paper/45 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}</p>
          <p>Site local de refonte V1. Donnees legales a completer avant publication.</p>
        </div>
      </div>
    </footer>
  );
}
