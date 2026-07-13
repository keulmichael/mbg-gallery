import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageFrame } from "@/components/sections/page-frame";
import { buttonVariants } from "@/components/ui/button";
import { exhibitions } from "@/content/mbg";

export const metadata: Metadata = {
  title: "Expositions",
  description: "Rendez-vous et foires cites par MBG Gallery, dont Miami et Palm Beach.",
  alternates: { canonical: "/expositions" },
};

export default function ExpositionsPage() {
  return (
    <PageFrame
      eyebrow="Expositions"
      title="Foires et rencontres autour des oeuvres."
      description="MBG Gallery invite a suivre les oeuvres dans les grands rendez-vous internationaux, notamment Miami et Palm Beach."
    >
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {exhibitions.map((item, index) => (
          <article
            key={item.title}
            className="grid overflow-hidden border border-ink/12 bg-paper md:grid-cols-[0.82fr_1.18fr]"
          >
            <div className={index % 2 === 1 ? "relative min-h-[460px] bg-mist md:order-2" : "relative min-h-[460px] bg-mist"}>
              <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 42vw, 92vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-end p-6 sm:p-10">
              <p className="text-xs uppercase tracking-[0.22em] text-clay">Rendez-vous cite</p>
              <h2 className="mt-4 text-5xl leading-tight">{item.title}</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ink/64">{item.description}</p>
              <Link className={buttonVariants({ className: "mt-8 w-fit", size: "lg" })} href="/contact">
                Preparer une rencontre
              </Link>
            </div>
          </article>
        ))}
      </section>
    </PageFrame>
  );
}
