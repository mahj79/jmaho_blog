import { pricingTiers } from "@/lib/pricing"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Pricing() {
  return (
    <SectionShell id="pricing">
      <SectionLabel className="mb-4">Sample Layout</SectionLabel>
      <SectionHeading count={pricingTiers.length} className="mb-8 sm:mb-12">
        Pick Plans
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <article
            key={tier.id}
            className={`flex flex-col p-8 ${index > 0 ? "md:border-l md:border-white/20" : ""}`}
          >
            <p className="mb-2 text-display-md font-semibold tracking-display">
              {tier.price}
              <span className="text-base font-normal text-white/50">{tier.period}</span>
            </p>
            <h3 className="mb-3 text-lg font-semibold">{tier.name}</h3>
            <p className="mb-8 text-sm leading-relaxed text-white/60">{tier.description}</p>
            <ul className="mt-auto space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="text-white/40">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
