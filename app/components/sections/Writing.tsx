import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import BlogCard from "../BlogCard"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

const PREVIEW_COUNT = 2

export default function Writing() {
  const posts = getSortedPostsData()
  const previewPosts = posts.slice(0, PREVIEW_COUNT)

  return (
    <SectionShell id="writing">
      <SectionLabel className="mb-4">Previous Posts</SectionLabel>
      <SectionHeading count={posts.length} className="mb-8 sm:mb-12">
        <Link href="/writing">Writing</Link>
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {previewPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length > PREVIEW_COUNT && (
        <div className="mt-12 flex justify-center sm:justify-start">
          <Link
            href="/writing"
            className="text-xs uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
          >
            View all writing ({posts.length}) →
          </Link>
        </div>
      )}
    </SectionShell>
  )
}
