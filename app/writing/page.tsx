import { getSortedPostsData } from "@/lib/posts"
import BlogCard from "../components/BlogCard"
import Divider from "../components/ui/Divider"
import SectionHeading from "../components/ui/SectionHeading"
import SectionLabel from "../components/ui/SectionLabel"
import SectionShell from "../components/ui/SectionShell"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on software, architecture, and learning by Jack Mahoney.",
}

export default function WritingPage() {
  const posts = getSortedPostsData()

  return (
    <main>
      <SectionShell id="writing" className="pb-20 pt-16 sm:pb-28 sm:pt-20">
        <Link
          href="/#writing"
          className="mb-8 inline-block text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>

        <SectionLabel className="mb-4">Previous Posts</SectionLabel>
        <SectionHeading count={posts.length} className="mb-8 sm:mb-12">
          Writing
        </SectionHeading>
        <Divider className="mb-12" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </SectionShell>
    </main>
  )
}
