import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ postId: string }> }) {
  
    const posts = getSortedPostsData();
    const { postId } = await params;

    const post = posts.find(post => post.id === postId);
  
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }
  
    return {
      title: post.title,
      description: post.description ?? "A blog post by Jack Mahoney",
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://mahoscorner.com/posts/${postId}`,
        images: [
          {
            url: post.image ? `https://mahoscorner.com/${post.image}`: "https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75",
            width: 200,
            height: 200,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        site: `@mahoneyj50`,
        creator: "@mahoneyj50",
        images: [post.image ? `https://mahoscorner.com/${post.image}`: "https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75"],
      },
    };
  }

  export default async function Post({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;
  
    const posts = getSortedPostsData();
  
    if (!posts.find((post) => post.id === postId)) {
      return notFound();
    }
  
    const { title, date, contentHtml, description } = await getPostData(postId);
  
    const pubDate = getFormattedDate(date);
  
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <Link
          href="/#writing"
          className="mb-8 inline-block text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
        >
          ← Back to Writing
        </Link>
        <p className="mb-4 text-xs uppercase tracking-[0.15em] text-white/40">{pubDate}</p>
        <h1 className="text-display-md mb-4 font-semibold tracking-display">{title}</h1>
        {description && (
          <p className="mb-12 text-base text-white/60">{description}</p>
        )}

        <article
          className="prose prose-invert prose-sm sm:prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-white prose-a:underline prose-img:rounded-sm"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>
    );
  }
