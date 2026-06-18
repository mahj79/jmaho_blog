'use client'

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function scrollToHash(hash: string) {
  if (!hash) {
    return
  }

  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function HashScrollHandler() {
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
