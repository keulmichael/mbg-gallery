import type { Metadata } from "next";
import Image from "next/image";

import { PageFrame } from "@/components/sections/page-frame";
import { galleryStatement, videos } from "@/content/mbg";

export const metadata: Metadata = {
  title: "Artistes",
  description: "Michel Kirch, artiste visuel photographe represente par MBG Gallery.",
  alternates: { canonical: "/artistes" },
};

export default function ArtistesPage() {
  return (
    <PageFrame
      eyebrow="Artiste represente"
      title="Michel Kirch"
      description="MBG Gallery presente le travail de Michel Kirch, artiste visuel photographe."
    >
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-24">
        <div className="relative min-h-[520px] overflow-hidden bg-mist">
          <Image
            src="/mbg/portrait.jpg"
            alt="Portrait reference par MBG Gallery"
            fill
            sizes="(min-width: 1024px) 38vw, 92vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">Images, mondes interieurs, questions ouvertes.</h2>
          <div className="mt-8 grid gap-5">
            {galleryStatement.slice(2).map((item) => (
              <p key={item} className="text-lg leading-8 text-ink/70">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-ink/10 bg-ink py-16 text-paper lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.24em] text-paper/45">Videos referencees</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {videos.map((video) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 border border-paper/12 p-5 text-paper transition-colors hover:border-paper/40 focus-visible:ring-3 focus-visible:ring-paper/35"
              >
                <span>
                  <span className="block text-xl">{video.title}</span>
                  <span className="text-sm text-paper/48">{video.year}</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
