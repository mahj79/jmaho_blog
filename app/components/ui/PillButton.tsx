import Link from "next/link"
import { normalizeHashHref } from "@/lib/normalizeHashHref"
import HashLink from "./HashLink"

type PillButtonProps = {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export default function PillButton({ href, children, external, className = "" }: PillButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full border-2 border-white/50 px-6 py-2.5 text-xs uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black ${className}`

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    )
  }

  if (href.startsWith("#") || href.startsWith("/#")) {
    return (
      <HashLink href={normalizeHashHref(href)} className={classes}>
        {children}
      </HashLink>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
