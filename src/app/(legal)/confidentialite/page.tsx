import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Politique de confidentialite preparatoire de MBG Gallery.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialite"
      description="Cette page presente le socle RGPD a finaliser pour MBG Gallery. Les traitements definitifs doivent etre valides avec le responsable du site avant publication."
      sections={[
        {
          title: "Donnees collectees",
          body: "Dans cette V1 locale, le formulaire de contact ouvre le logiciel de messagerie de l'utilisateur et ne stocke aucune donnee sur le site. En production, toute collecte via formulaire, Shopify, email, CRM ou outil d'analyse devra etre documentee.",
        },
        {
          title: "Finalites",
          body: "Les donnees transmises volontairement peuvent servir a repondre aux demandes d'information, de rendez-vous ou d'acquisition. Les finalites commerciales, statistiques ou marketing doivent etre confirmees avant activation.",
        },
        {
          title: "Bases legales et durees",
          body: "Bases legales, durees de conservation et criteres d'archivage a renseigner avec les pratiques reelles de MBG Gallery.",
        },
        {
          title: "Destinataires et sous-traitants",
          body: "Les prestataires techniques, hebergeur, outils email, Shopify, paiement, analytics ou CRM eventuels doivent etre listes uniquement lorsqu'ils sont effectivement utilises.",
        },
        {
          title: "Droits des personnes",
          body: "Les modalites d'exercice des droits RGPD sont a finaliser. L'email public de contact est marie.battaglini@me.com.",
        },
      ]}
    />
  );
}
