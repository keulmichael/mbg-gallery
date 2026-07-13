import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique de cookies preparatoire de MBG Gallery.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique de cookies"
      description="Aucun outil d'analyse, pixel publicitaire ou traceur non essentiel n'est ajoute dans cette V1 locale. Un bandeau de consentement devra etre installe uniquement si des traceurs soumis au consentement sont actives."
      sections={[
        {
          title: "Cookies strictement necessaires",
          body: "Les cookies necessaires au fonctionnement technique doivent etre listes lorsque l'hebergement et les fonctionnalites finales sont confirmes.",
        },
        {
          title: "Mesure d'audience",
          body: "Aucun outil de mesure d'audience n'est configure dans cette V1. Tout futur outil devra etre documente et, si necessaire, soumis au consentement.",
        },
        {
          title: "Services tiers",
          body: "Les liens Vimeo et les fonctions Shopify eventuelles peuvent impliquer des tiers. Les integrations definitives devront etre inventoriees avant publication.",
        },
        {
          title: "Gestion du consentement",
          body: "Si des traceurs non essentiels sont ajoutes, l'utilisateur devra pouvoir accepter, refuser et modifier son choix avec le meme niveau de facilite.",
        },
        {
          title: "Duree de vie",
          body: "Les durees de vie des cookies devront correspondre aux outils reellement installes.",
        },
      ]}
    />
  );
}
