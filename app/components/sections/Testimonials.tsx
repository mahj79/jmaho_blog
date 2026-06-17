import { testimonials } from "@/lib/testimonials"
import TestimonialCard from "../TestimonialCard"
import Divider from "../ui/Divider"
import PillButton from "../ui/PillButton"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Testimonials() {
  const tickerItems = [...testimonials, ...testimonials]

  return (
    <SectionShell id="testimonials">
      <SectionLabel className="mb-4">What People Say</SectionLabel>
      <div className="mb-8 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading count={testimonials.length}>Testimonials</SectionHeading>
        <PillButton href="mailto:mahonej79@gmail.com">Get in Touch</PillButton>
      </div>
      <Divider className="mb-12" />

      <div className="testimonial-ticker" role="region" aria-label="Testimonials">
        <div className="testimonial-ticker-track">
          {tickerItems.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
              hidden={index >= testimonials.length}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
