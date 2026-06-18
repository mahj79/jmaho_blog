'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { normalizeHashHref } from "@/lib/normalizeHashHref"
import type { ComponentProps } from "react"

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string
}

function normalizePath(path: string): string {
  const trimmed = path.replace(/\/$/, "")
  return trimmed || "/"
}

export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname()
  const normalizedHref = normalizeHashHref(href)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) {
      return
    }

    const url = new URL(normalizedHref, window.location.origin)
    const targetId = url.hash.slice(1)

    if (!targetId) {
      return
    }

    const currentPath = normalizePath(pathname)
    const targetPath = normalizePath(url.pathname)

    if (currentPath !== targetPath) {
      return
    }

    event.preventDefault()
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.pushState(null, "", targetPath === "/" ? `/#${targetId}` : `${targetPath}#${targetId}`)
  }

  return <Link href={normalizedHref} onClick={handleClick} {...props} />
}
