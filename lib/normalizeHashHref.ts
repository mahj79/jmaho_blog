export function normalizeHashHref(href: string): string {
  if (href.startsWith("#")) {
    return `/${href}`
  }

  return href
}
