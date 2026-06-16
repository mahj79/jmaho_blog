import { faqItems } from "@/lib/faq"
import Accordion from "../ui/Accordion"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function FAQ() {
  return (
    <SectionShell id="faq">
      <SectionLabel className="mb-4">Questions</SectionLabel>
      <SectionHeading count={faqItems.length} className="mb-8 sm:mb-12">
        FAQ
      </SectionHeading>
      <Divider className="mb-4" />
      <Accordion items={faqItems} />
    </SectionShell>
  )
}
