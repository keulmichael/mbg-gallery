import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Conditions generales de vente",
  description: "Socle CGV a completer pour les ventes d'oeuvres MBG Gallery.",
  alternates: { canonical: "/cgv" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions generales de vente"
      description="Cette V1 ne met pas en ligne de checkout ni de prix. Les CGV devront etre completees avant toute vente en ligne effective."
      sections={[
        {
          title: "Produits et disponibilite",
          body: "Les oeuvres, editions, formats, prix, disponibilites, certificats et credits exacts doivent etre renseignes a partir du catalogue valide par MBG Gallery.",
        },
        {
          title: "Commande et paiement",
          body: "Aucun paiement n'est active dans cette V1. Les moyens de paiement, etapes de commande et conditions d'acceptation devront etre precises si Shopify ou un autre checkout est connecte.",
        },
        {
          title: "Livraison",
          body: "Zones, delais, transporteurs, frais, assurance et procedure de reception a completer avec les conditions reelles.",
        },
        {
          title: "Droit de retractation et retours",
          body: "Les regles applicables aux oeuvres d'art, editions, commandes specifiques et ventes internationales doivent etre validees juridiquement.",
        },
        {
          title: "Garanties, litiges et mediation",
          body: "Garanties legales, droit applicable, juridiction, mediateur et contact de reclamation a renseigner avec les informations exactes de l'editeur.",
        },
      ]}
    />
  );
}
