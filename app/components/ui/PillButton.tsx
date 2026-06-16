import Link from "next/link"

type PillButtonProps = {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export default function PillButton({ href, children, external, className = "" }: PillButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-2.5 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white/5 ${className}`

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
