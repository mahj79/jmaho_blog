import Image from "next/image"
import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type BlogCardProps = {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col">
      <Link href={`/posts/${post.id}`} className="mb-4 block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
          <Image
            src={post.image || "/images/Mahos_Corner_Final.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>
      <p className="mb-2 text-xs uppercase tracking-[0.15em] text-white/40">
        {getFormattedDate(post.date)}
      </p>
      <Link href={`/posts/${post.id}`}>
        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-white/80 sm:text-2xl">
          {post.title}
        </h3>
      </Link>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60 line-clamp-3">
        {post.description}
      </p>
      <Link
        href={`/posts/${post.id}`}
        className="text-xs uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
      >
        Read More →
      </Link>
    </article>
  )
}
