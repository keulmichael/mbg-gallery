import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageFrame } from "@/components/sections/page-frame";
import { contactDetails } from "@/content/mbg";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter MBG Gallery par email ou telephone.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="Demande d'information, d'oeuvre ou de rendez-vous."
      description="Les coordonnees ci-dessous proviennent du site MBG Gallery actuel."
    >
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-24">
        <div className="grid gap-4">
          <a href={`mailto:${contactDetails.email}`} className="border border-ink/12 bg-paper p-6 transition-colors hover:border-clay">
            <Mail className="size-5 text-clay" aria-hidden="true" />
            <p className="mt-6 text-sm text-ink/50">Email</p>
            <p className="mt-2 break-words text-xl">{contactDetails.email}</p>
          </a>
          <a href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`} className="border border-ink/12 bg-paper p-6 transition-colors hover:border-clay">
            <Phone className="size-5 text-clay" aria-hidden="true" />
            <p className="mt-6 text-sm text-ink/50">Telephone</p>
            <p className="mt-2 text-xl">{contactDetails.phone}</p>
          </a>
          <div className="border border-ink/12 bg-paper p-6">
            <MapPin className="size-5 text-clay" aria-hidden="true" />
            <p className="mt-6 text-sm text-ink/50">Presence</p>
            <p className="mt-2 text-xl">{contactDetails.places.join(" / ")}</p>
          </div>
        </div>
        <form action={`mailto:${contactDetails.email}`} method="post" encType="text/plain" className="grid gap-5 border border-ink/12 bg-mist/45 p-5 sm:p-8">
          <div>
            <label className="text-sm font-medium" htmlFor="name">
              Nom
            </label>
            <input id="name" name="Nom" autoComplete="name" className="mt-2 min-h-12 w-full border border-ink/16 bg-paper px-3 text-base" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input id="email" name="Email" type="email" autoComplete="email" className="mt-2 min-h-12 w-full border border-ink/16 bg-paper px-3 text-base" />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea id="message" name="Message" rows={7} className="mt-2 w-full border border-ink/16 bg-paper p-3 text-base" />
          </div>
          <p className="text-sm leading-6 text-ink/58">
            Ce formulaire ouvre votre logiciel de messagerie. Aucune donnee n&apos;est stockee par cette V1 locale.
          </p>
          <button className="min-h-12 w-fit bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-clay" type="submit">
            Envoyer par email
          </button>
        </form>
      </section>
    </PageFrame>
  );
}
