import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    return (
        <div className="bg-zinc-500/70 p-4 rounded-lg border-4 border-black shadow-md h-[400px] flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
            <div className="w-full h-40 sm:h-48 md:h-56 border-2 border-black overflow-hidden rounded-lg mb-4">

                <Link href={`/posts/${post.id}`}>
                    <Image 
                        src={post.image || '/images/default-cover.jpg'}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>
            <Link className="text-lg sm:text-2xl font-bold underline text-black hover:text-blue-700" href={`/posts/${post.id}`}>
                {post.title}
            </Link>
            <p className="text-xs sm:text-sm text-black mt-2">{getFormattedDate(post.date)}</p>
            <p className="text-xs sm:text-sm text-black mt-2 pt-2line-clamp-3">{post.description}</p>
            <div className="mt-auto text-sm pt-2">
                <Link href={`/posts/${post.id}`} className="text-black hover:text-blue-800">
                    Read More →
                </Link>
            </div>
        </div>
    )
}