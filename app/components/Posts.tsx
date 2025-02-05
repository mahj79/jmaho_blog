import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()
    
    return (
        <>
            <h2 className="text-4xl font-bold dark:text-white/90 text-center mb-6">
                Blog Posts
            </h2>
            <section className="mt-6 mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 pb-10 list-none">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </section>
        </>
    )
}