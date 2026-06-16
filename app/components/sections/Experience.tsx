import { experience } from "@/lib/experience"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Experience() {
  return (
    <SectionShell id="experience">
      <SectionLabel className="mb-4">@Experience</SectionLabel>
      <SectionHeading count={experience.length} className="mb-8 sm:mb-12">
        Practice
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="space-y-0">
        {experience.map((role, index) => (
          <div key={role.id}>
            {index > 0 && <Divider className="my-0" />}
            <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
              <div className="sm:col-span-3">
                <p className="text-sm text-white/50">{role.period}</p>
              </div>
              <div className="sm:col-span-4">
                <h3 className="text-lg font-semibold">{role.company}</h3>
                <p className="mt-1 text-sm text-white/60">{role.role}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-white/50">{role.location}</p>
              </div>
              <div className="sm:col-span-3">
                <ul className="space-y-2">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs leading-relaxed text-white/50">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
