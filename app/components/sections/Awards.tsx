import Image from "next/image"
import { awards } from "@/lib/awards"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Awards() {
  return (
    <SectionShell id="awards">
      <SectionLabel className="mb-4">Recognition</SectionLabel>
      <SectionHeading count={awards.length} className="mb-8 sm:mb-12">
        Awards
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="space-y-0">
        {awards.map((award, index) => (
          <div key={award.id}>
            {index > 0 && <Divider className="my-0" />}
            <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-12 sm:items-center sm:py-10">
              <div className="sm:col-span-1">
                <p className="text-sm font-medium">{award.count}</p>
              </div>
              <div className="sm:col-span-3">
                <h3 className="text-lg font-semibold">{award.platform}</h3>
              </div>
              <div className="sm:col-span-5">
                <p className="text-sm leading-relaxed text-white/60">{award.description}</p>
              </div>
              <div className="flex gap-2 sm:col-span-3 sm:justify-end">
                {award.thumbnails.map((thumb, thumbIndex) => (
                  <div
                    key={`${award.id}-${thumbIndex}`}
                    className="relative h-16 w-12 overflow-hidden rounded-sm"
                  >
                    <Image
                      src={thumb}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
