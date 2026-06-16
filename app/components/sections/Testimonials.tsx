import Image from "next/image"
import { testimonials } from "@/lib/testimonials"
import Divider from "../ui/Divider"
import PillButton from "../ui/PillButton"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Testimonials() {
  return (
    <SectionShell id="testimonials">
      <SectionLabel className="mb-4">What People Say</SectionLabel>
      <div className="mb-8 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading count={testimonials.length}>Testimonials</SectionHeading>
        <PillButton href="mailto:mahonej79@gmail.com">Get in Touch</PillButton>
      </div>
      <Divider className="mb-12" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="flex flex-col border border-white/10 p-6 sm:p-8"
          >
            <p className="mb-8 flex-1 text-sm leading-relaxed text-white/70">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
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
        ))}
      </div>
    </SectionShell>
  )
}
