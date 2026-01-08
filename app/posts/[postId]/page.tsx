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
  
    const { title, date, contentHtml, image, description } = await getPostData(postId);
  
    const pubDate = getFormattedDate(date);
  
    return (
      <main className="text-gray-100 px-6 prose prose-base sm:prose-2xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-xl sm:text-2xl text-gray-300 mt-2 mb-0">{title}</h1>
        <p className="text-sm sm:text-lg text-gray-200 mt-2">{pubDate}</p>
        

        <article>
          <section
            className="bg-[#e1dab7] bg-gradient-to-br from-[#e6e6c5] to-[#d8d1a7] text-gray-900 p-4 sm:p-6 rounded-lg border-4 border-black shadow-md my-4 prose-sm sm:prose-xl [&>*>img]:mx-auto [&>*>img]:block [&>*>img]:max-w-[85%] sm:[&>*>img]:max-w-[75%] md:[&>*>img]:max-w-[65%] [&>*>img]:h-auto [&>*>img]:p-2 [&>*>img]:box-border prose-ul:marker:text-black prose-ol:marker:text-black"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <p>
            <Link href="/" className="text-gray-300">
              Back to Home
            </Link>
          </p>
        </article>
      </main>
    );
  }