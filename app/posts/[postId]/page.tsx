import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postId: post.id
    }))
}

const postsDirectory = path.join(process.cwd(), "posts");

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    contentHtml: matterResult.content, // Process this further for HTML rendering if needed
    ...matterResult.data, // Includes title, date, description, image
  };
}

export async function generateMetadata({ params }: { params: { postId: string } }) {
    const { postId } = params;
  
    const post = await getPostData(postId);
  
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }
  
    return {
      title: post.title,
      description: post.description || "A blog post by Jack Mahoney",
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://mahoscorner.com/posts/${postId}`,
        images: [
          {
            url: post.image || "https://mahoscorner.com/default-image.jpg",
            width: 600,
            height: 400,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [post.image || "https://mahoscorner.com/default-image.jpg"],
      },
    };
  }

  export default async function Post({ params }: { params: { postId: string } }) {
    const { postId } = params;
  
    const posts = getSortedPostsData();
  
    if (!posts.find((post) => post.id === postId)) {
      return notFound();
    }
  
    const { title, date, contentHtml, image, description } = await getPostData(postId);
  
    const pubDate = getFormattedDate(date);
  
    return (
      <main className="text-gray-100 px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl text-gray-300 mt-4 mb-0">{title}</h1>
        <p className="text-gray-200 mt-0">{pubDate}</p>
        {image && <img src={image} alt={description || title} className="mb-4" />}
        <article>
          <section
            className="text-gray-200 mt-0"
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