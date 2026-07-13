import { ArrowRight, Mail, MapPin, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { contactDetails, exhibitions, galleryStatement, artworks, videos } from "@/content/mbg";

export function MbgHome() {
  const featured = artworks[0];

  return (
    <SiteShell>
      <section className="grain overflow-hidden border-b border-ink/10">
        <div className="relative mx-auto grid min-h-[calc(100dvh-88px)] w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-14">
          <div className="relative z-10 flex flex-col justify-between gap-12">
            <div className="reveal-up max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-clay">Galerie d&apos;art contemporain</p>
              <h1 className="mt-5 text-balance text-6xl leading-[0.9] text-ink sm:text-7xl lg:text-8xl">
                MBG Gallery
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">
                Une galerie itinerante consacree aux oeuvres qui voyagent, du regard numerique aux foires
                internationales.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className={buttonVariants({ size: "lg" })} href="/oeuvres">
                  Explorer les oeuvres
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/contact">
                  Contacter la galerie
                </Link>
              </div>
            </div>
            <dl className="grid gap-4 border-y border-ink/10 py-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-ink/45">Artiste represente</dt>
                <dd className="mt-1 text-ink">Michel Kirch</dd>
              </div>
              <div>
                <dt className="text-ink/45">Presence</dt>
                <dd className="mt-1 text-ink">Miami, Palm Beach</dd>
              </div>
              <div>
                <dt className="text-ink/45">Contact</dt>
                <dd className="mt-1 text-ink">Sur demande</dd>
              </div>
            </dl>
          </div>

          <div className="relative z-10 grid min-h-[520px] grid-cols-[0.7fr_1fr] gap-3 sm:gap-4">
            <div className="relative mt-20 overflow-hidden bg-mist">
              <Image
                src="/mbg/portrait.jpg"
                alt="Portrait reference sur le site MBG Gallery"
                fill
                priority
                sizes="(min-width: 1024px) 24vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden bg-ink">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/76 to-transparent p-5 text-paper">
                <p className="text-xs uppercase tracking-[0.2em] text-paper/70">{featured.artist}</p>
                <p className="mt-2 text-2xl font-medium">{featured.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-clay">Position</p>
          <h2 className="mt-4 max-w-sm text-4xl leading-tight sm:text-5xl">Une galerie pensee en mouvement.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {galleryStatement.map((item) => (
            <p key={item} className="border-t border-ink/12 pt-5 text-base leading-8 text-ink/72">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-paper lg:py-24" id="oeuvres">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-paper/45">Selection</p>
              <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Oeuvres de Michel Kirch</h2>
            </div>
            <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/oeuvres">
              Voir la selection
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {artworks.slice(1).map((work, index) => (
              <article
                key={work.title}
                className={index === 1 ? "md:row-span-2" : undefined}
              >
                <Link
                  href="/oeuvres"
                  className="group block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-paper/35"
                >
                  <div className={index === 1 ? "relative min-h-[560px] overflow-hidden bg-paper/10" : "relative aspect-square overflow-hidden bg-paper/10"}>
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      sizes="(min-width: 768px) 31vw, 92vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sans text-base text-paper">{work.title}</h3>
                      <p className="mt-1 text-sm text-paper/50">{work.artist}</p>
                    </div>
                    <ArrowRight className="mt-1 size-4 text-paper/45 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-clay">Artiste</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Michel Kirch</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            MBG Gallery presente Michel Kirch comme un artiste visuel photographe dont les images traversent
            les frontieres et convoquent des mondes interieurs.
          </p>
          <Link className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-clay hover:text-ink" href="/artistes">
            Lire la page artiste
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-3">
          {videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-16 items-center justify-between gap-4 border-t border-ink/12 py-4 text-ink transition-colors hover:text-clay focus-visible:ring-3 focus-visible:ring-clay/35"
            >
              <span>
                <span className="block text-lg">{video.title}</span>
                <span className="text-sm text-ink/48">{video.year}</span>
              </span>
              <PlayCircle className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-mist/70 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-clay">Expositions</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Rendez-vous cites par la galerie</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {exhibitions.map((item) => (
              <article key={item.title} className="grid gap-5 bg-paper p-3 md:grid-cols-[0.7fr_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 24vw, 92vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-end p-3">
                  <h3 className="text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/64">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-clay">Contact</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Demande d&apos;information ou d&apos;acquisition.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <a className="group border border-ink/12 bg-paper p-6 transition-colors hover:border-clay" href={`mailto:${contactDetails.email}`}>
            <Mail className="size-5 text-clay" aria-hidden="true" />
            <span className="mt-6 block text-sm text-ink/50">Email</span>
            <span className="mt-2 block break-words text-lg">{contactDetails.email}</span>
          </a>
          <div className="border border-ink/12 bg-paper p-6">
            <MapPin className="size-5 text-clay" aria-hidden="true" />
            <span className="mt-6 block text-sm text-ink/50">Presence</span>
            <span className="mt-2 block text-lg">{contactDetails.places.join(" / ")}</span>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
