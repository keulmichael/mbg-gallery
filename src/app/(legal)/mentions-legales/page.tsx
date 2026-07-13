import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales de MBG Gallery a completer avant publication.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Mentions legales"
      description="Cette page prepare les mentions legales du site MBG Gallery. Les donnees d'identification non publiees sur le site source doivent etre completees avant mise en ligne."
      sections={[
        {
          title: "Editeur du site",
          body: "Identite juridique, forme sociale, adresse, immatriculation et numero de TVA intracommunautaire a renseigner avec les informations exactes de MBG Gallery.",
        },
        {
          title: "Responsable de publication",
          body: "Nom du responsable de publication a confirmer avant publication.",
        },
        {
          title: "Contact",
          body: "Email publie: marie.battaglini@me.com. Telephone publie: +1 (646) 275-6364.",
        },
        {
          title: "Hebergement",
          body: "Hebergeur, adresse de l'hebergeur et contact de l'hebergeur a renseigner selon la plateforme retenue.",
        },
        {
          title: "Propriete intellectuelle",
          body: "Les textes, visuels, photographies, videos, noms d'oeuvres et elements graphiques doivent etre utilises uniquement avec les droits necessaires. Les credits exacts des oeuvres et photographies sont a valider.",
        },
      ]}
    />
  );
}
