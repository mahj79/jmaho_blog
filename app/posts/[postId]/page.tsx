import PostBackLink from "@/app/components/PostBackLink"
import getFormattedDate from "@/lib/getFormattedDate"
import { getPostById, getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const post = getPostById(postId)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const fallbackImage =
    "https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75"
  const imageUrl = post.image ? `https://mahoscorner.com/${post.image}` : fallbackImage

  return {
    title: post.title,
    description: post.description ?? "A blog post by Jack Mahoney",
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://mahoscorner.com/posts/${postId}`,
      images: [
        {
          url: imageUrl,
          width: 200,
          height: 200,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      site: "@mahoneyj50",
      creator: "@mahoneyj50",
      images: [imageUrl],
    },
  }
}

export default async function Post({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params

  if (!getPostById(postId)) {
    return notFound()
  }

  const { title, date, contentHtml, description } = await getPostData(postId)
  const pubDate = getFormattedDate(date)

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <PostBackLink className="mb-8" />
      <p className="mb-4 text-xs uppercase tracking-[0.15em] text-white/40">{pubDate}</p>
      <h1 className="text-display-md mb-4 font-semibold tracking-display">{title}</h1>
      {description && <p className="mb-12 text-base text-white/60">{description}</p>}

      <article
        className="prose prose-invert prose-sm sm:prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-white prose-a:underline prose-img:rounded-sm"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <footer className="mt-16 border-t border-white/10 pt-8">
        <PostBackLink />
      </footer>
    </main>
  )
}
