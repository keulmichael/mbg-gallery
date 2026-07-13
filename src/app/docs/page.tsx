import type { Metadata } from "next";

import { PageFrame } from "@/components/sections/page-frame";

export const metadata: Metadata = {
  title: "Notes de refonte",
  description: "Notes de handoff pour la V1 locale MBG Gallery.",
};

const notes = [
  "V1 locale consacree a MBG Gallery uniquement.",
  "Catalogue Shopify public vide au moment de l'extraction: pas de panier ni de prix simules.",
  "Coordonnees reprises depuis le site source: marie.battaglini@me.com, +1 (646) 275-6364, United States, L'Isle-sur-la-Sorgue.",
  "Pages legales preparees, mais donnees d'identite juridique, hebergement, CGV finales et credits exacts a completer.",
] as const;

export default function DocsPage() {
  return (
    <PageFrame eyebrow="Handoff" title="Notes de refonte MBG Gallery">
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-4">
          {notes.map((note) => (
            <li key={note} className="border border-ink/12 bg-mist/45 p-5 text-sm leading-6 text-ink/68">
              {note}
            </li>
          ))}
        </ul>
      </section>
    </PageFrame>
  );
}
