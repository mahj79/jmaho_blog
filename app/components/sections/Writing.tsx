import { getSortedPostsData } from "@/lib/posts"
import BlogCard from "../BlogCard"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Writing() {
  const posts = getSortedPostsData()

  return (
    <SectionShell id="writing">
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
  )
}
