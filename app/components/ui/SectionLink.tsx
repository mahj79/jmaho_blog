'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import type { ComponentProps } from "react"

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string
}

function normalizePath(path: string): string {
  const trimmed = path.replace(/\/$/, "")
  return trimmed || "/"
}

function scrollToHash(hash: string) {
  if (!hash) {
    return
  }

  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function SectionLink({ href, onClick, ...props }: SectionLinkProps) {
  const pathname = usePathname()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) {
      return
    }

    const url = new URL(href, window.location.origin)
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
    scrollToHash(targetId)
    window.history.pushState(null, "", targetPath === "/" ? `/#${targetId}` : `${targetPath}#${targetId}`)
  }

  return <Link href={href} onClick={handleClick} {...props} />
}

export function SectionScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const timeout = window.setTimeout(() => scrollToHash(hash), 0)

    return () => window.clearTimeout(timeout)
  }, [pathname])

  useEffect(() => {
    const handleHashChange = () => {
      scrollToHash(window.location.hash.slice(1))
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return null
}
