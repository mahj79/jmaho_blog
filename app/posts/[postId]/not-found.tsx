import PostBackLink from "@/app/components/PostBackLink"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <h1 className="text-display-md mb-4 font-semibold tracking-display">Post not found</h1>
      <p className="mb-8 text-base text-white/60">The requested post does not exist.</p>
      <PostBackLink />
    </main>
  )
}
