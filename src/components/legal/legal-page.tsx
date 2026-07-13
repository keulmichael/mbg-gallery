import { SiteShell } from "@/components/layout/site-shell";

type LegalPageProps = {
  title: string;
  description: string;
  sections: readonly {
    title: string;
    body: string;
  }[];
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-clay">Page legale</p>
          <h1 className="text-5xl leading-tight sm:text-6xl">{title}</h1>
          <p className="max-w-2xl leading-7 text-ink/64">{description}</p>
        </header>
        <div className="mt-12 space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="border border-ink/12 bg-mist/45 p-5">
              <h2 className="font-sans text-lg font-medium">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/62">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
