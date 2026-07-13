import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

type PageFrameProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageFrame({ eyebrow, title, description, children }: PageFrameProps) {
  return (
    <SiteShell>
      <section className="border-b border-ink/10 bg-mist/45">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">{title}</h1>
          {description ? <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">{description}</p> : null}
        </div>
      </section>
      {children}
    </SiteShell>
  );
}
