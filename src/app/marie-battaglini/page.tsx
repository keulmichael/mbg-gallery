import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { PageFrame } from "@/components/sections/page-frame";
import { buttonVariants } from "@/components/ui/button";
import {
  marieBattagliniBiography,
  marieBattagliniInvitation,
  marieBattagliniMichelKirch,
  marieBattagliniProfile,
} from "@/content/marie-battaglini";

export const metadata: Metadata = {
  title: "Marie Battaglini",
  description: "Marie Battaglini, presidente de MBG Gallery.",
  alternates: { canonical: "/marie-battaglini" },
};

export default function MarieBattagliniPage() {
  return (
    <PageFrame
      eyebrow={marieBattagliniProfile.role}
      title={marieBattagliniProfile.name}
      description={marieBattagliniProfile.intro}
    >
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-24">
        <figure className="grid gap-3">
          <div className="overflow-hidden bg-mist">
            <Image
              src={marieBattagliniProfile.portrait.image}
              alt={marieBattagliniProfile.portrait.alt}
              width={1114}
              height={1500}
              priority
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="text-xs uppercase tracking-[0.18em] text-ink/45">
            {marieBattagliniProfile.portrait.credit}
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.24em] text-clay">Presentation</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Une galeriste attentive aux passages entre les epoques, les lieux et les artistes.
          </h2>
          <div className="mt-8 grid gap-5">
            {marieBattagliniBiography.map((item) => (
              <article key={item.title} className="border-t border-ink/12 pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-clay">{item.eyebrow}</p>
                <h3 className="mt-3 font-sans text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-mist/70 py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-clay">Art contemporain</p>
            <h2 className="mt-4 max-w-md text-4xl leading-tight sm:text-5xl">
              {marieBattagliniMichelKirch.title}
            </h2>
          </div>
          <p className="border-t border-ink/12 pt-5 text-lg leading-8 text-ink/72">
            {marieBattagliniMichelKirch.body}
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-clay">Invitation</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{marieBattagliniInvitation.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">{marieBattagliniInvitation.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="/oeuvres">
              Voir les oeuvres
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/expositions">
              Suivre les expositions
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${marieBattagliniProfile.contact.email}`}
            className="border border-ink/12 bg-paper p-6 transition-colors hover:border-clay"
          >
            <Mail className="size-5 text-clay" aria-hidden="true" />
            <span className="mt-6 block text-sm text-ink/50">Email</span>
            <span className="mt-2 block break-words text-lg">{marieBattagliniProfile.contact.email}</span>
          </a>
          <a
            href={`tel:${marieBattagliniProfile.contact.phone.replace(/[^+\d]/g, "")}`}
            className="border border-ink/12 bg-paper p-6 transition-colors hover:border-clay"
          >
            <Phone className="size-5 text-clay" aria-hidden="true" />
            <span className="mt-6 block text-sm text-ink/50">Telephone</span>
            <span className="mt-2 block text-lg">{marieBattagliniProfile.contact.phone}</span>
          </a>
          <div className="border border-ink/12 bg-paper p-6 sm:col-span-2">
            <MapPin className="size-5 text-clay" aria-hidden="true" />
            <span className="mt-6 block text-sm text-ink/50">Presence</span>
            <span className="mt-2 block text-lg">{marieBattagliniProfile.contact.places.join(" / ")}</span>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
