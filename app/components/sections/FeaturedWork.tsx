import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"
import Divider from "../ui/Divider"
import PillButton from "../ui/PillButton"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function FeaturedWork() {
  return (
    <SectionShell id="work">
      <SectionLabel className="mb-4">Featured Projects</SectionLabel>
      <div className="mb-8 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading count={projects.length}>Featured Work</SectionHeading>
        <PillButton href="/#writing">See Writing</PillButton>
      </div>
      <Divider className="mb-8" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
        {projects.map((project) => {
          const content = (
            <>
              <div className="relative mb-3 aspect-[10/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
                {project.tags.join(" · ")}
              </p>
              <h3 className="mb-1.5 text-base font-semibold">{project.title}</h3>
              <p className="text-xs leading-relaxed text-white/60">{project.description}</p>
            </>
          )

          if (project.href) {
            return (
              <Link
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {content}
              </Link>
            )
          }

          return (
            <article key={project.id} className="group">
              {content}
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
