import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageFrame } from "@/components/sections/page-frame";
import { buttonVariants } from "@/components/ui/button";
import { artworks } from "@/content/mbg";

export const metadata: Metadata = {
  title: "Oeuvres",
  description: "Selection d'oeuvres de Michel Kirch referencees par MBG Gallery.",
  alternates: { canonical: "/oeuvres" },
};

export default function OeuvresPage() {
  return (
    <PageFrame
      eyebrow="Oeuvres"
      title="Une selection visible, sans catalogue marchand fictif."
      description="Le catalogue Shopify public ne contient pas de produits publies a ce stade. Les demandes se font donc directement aupres de la galerie."
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((work, index) => (
            <article key={work.title} className={index === 0 ? "md:col-span-2" : undefined}>
              <div className={index === 0 ? "relative aspect-[16/10] overflow-hidden bg-mist" : "relative aspect-square overflow-hidden bg-mist"}>
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 62vw, 92vw" : "(min-width: 1024px) 31vw, 92vw"}
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink/12 pt-4">
                <div>
                  <h2 className="font-sans text-xl">{work.title}</h2>
                  <p className="mt-1 text-sm text-ink/54">{work.artist}</p>
                </div>
                <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/contact">
                  Demande
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
