import Link from "next/link"

type PostBackLinkProps = {
  className?: string
}

export default function PostBackLink({ className = "" }: PostBackLinkProps) {
  return (
    <Link
      href="/writing"
      className={`inline-block text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white ${className}`}
    >
      ← Back to Writing
    </Link>
  )
}
