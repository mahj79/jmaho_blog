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
        Services
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <article key={skill.id}>
            <p className="mb-4 text-xs text-white/40">{skill.index}</p>
            <h3 className="mb-3 text-lg font-semibold">{skill.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-white/60">{skill.description}</p>
            <ul className="space-y-1">
              {skill.items.map((item) => (
                <li key={item} className="text-xs text-white/50">
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
