import type { MetadataRoute } from "next";

const baseUrl = "https://www.kpmu.edu.zm";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/programmes",
    "/admissions",
    "/learning-experience",
    "/contact"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}

