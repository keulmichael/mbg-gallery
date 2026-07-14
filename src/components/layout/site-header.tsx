import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/content/mbg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="w-fit text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-clay/35"
        >
          <Image
            src="/mbg/logo-mbg-gallery.png"
            alt="MBG Gallery — Marie Battaglini Gallery"
            width={1080}
            height={698}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>
        <nav aria-label="Navigation principale" className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center border border-transparent px-3 text-sm text-ink/68 transition-colors hover:border-ink/10 hover:text-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-clay/35"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
