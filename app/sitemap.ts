import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/projects/"), changeFrequency: "monthly", priority: 0.9 },
    ...projects.map(({ slug }) => ({ url: absoluteUrl(`/projects/${slug}/`), changeFrequency: "monthly" as const, priority: 0.7 }))
  ];
}
