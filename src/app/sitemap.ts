import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = [
  "/",
  "/artistes",
  "/oeuvres",
  "/expositions",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cookies",
  "/cgv",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route === "/oeuvres" ? 0.8 : 0.45,
  }));
}
