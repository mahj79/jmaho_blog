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

export function generateMetadata({params}: {params: { postId: string}}) {
    
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find(post => post.id === postId);
    
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    
    return {
        title: post.title,
    }
}

export default async function Post({params}: {params: { postId: string}}) {
    
    const posts = getSortedPostsData();
    const { postId } = params;

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }
    
    const {title, date, contentHtml} = await getPostData(postId);

    const pubDate = getFormattedDate(date);

    return (
        <main className="text-gray-100 px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl text-gray-300 mt-4 mb-0">{title}</h1>
            <p className="text-gray-200 mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{__html: contentHtml}}/>
                <p>
                    <Link href="/" className="text-gray-300">Back to Home</Link>
                </p>
            </article>
        </main>
    )
}