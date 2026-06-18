import { getSortedPostsData } from "@/lib/posts"
import { SITE_URL } from "@/lib/site"
import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()

  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about/`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/writing/`, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${SITE_URL}/posts/${post.id}/`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]
}
