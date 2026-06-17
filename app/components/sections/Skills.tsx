import { skills } from "@/lib/skills"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Skills() {
  return (
    <SectionShell id="skills">
      <SectionLabel className="mb-4">Capabilities</SectionLabel>
      <SectionHeading count={skills.length} className="mb-8 sm:mb-12">
        Skills
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 xl:gap-6">
        {skills.map((skill) => (
          <article key={skill.id} className="min-w-0">
            <p className="mb-2 text-xs text-white/40">{skill.index}</p>
            <h3 className="mb-2 text-base font-semibold">{skill.title}</h3>
            <p className="mb-3 text-xs leading-snug text-white/60">{skill.description}</p>
            <ul className="space-y-0.5">
              {skill.items.map((item) => (
                <li key={item} className="text-[11px] leading-snug text-white/50">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
