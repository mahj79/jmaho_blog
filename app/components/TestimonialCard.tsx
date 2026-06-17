import Image from "next/image"

type TestimonialCardProps = {
  testimonial: Testimonial
  hidden?: boolean
}

export default function TestimonialCard({ testimonial, hidden }: TestimonialCardProps) {
  const isLogo = testimonial.avatarKind === "logo"

  return (
    <article
      className="testimonial-ticker-item flex flex-col border border-white/10 p-6 sm:p-8"
      aria-hidden={hidden}
    >
      <p className="mb-8 flex-1 text-sm leading-relaxed text-white/70">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div
          className={`relative h-10 w-10 shrink-0 overflow-hidden ${
            isLogo ? "rounded-sm" : "rounded-full"
          }`}
        >
          <Image
            src={testimonial.avatar}
            alt={isLogo ? testimonial.company : testimonial.name}
            fill
            className={isLogo ? "object-contain" : "object-cover"}
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-white/50">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  )
}
