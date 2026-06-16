import Image from "next/image"
import { profilePhotos } from "@/lib/profilePhotos"
import Divider from "../ui/Divider"
import PillButton from "../ui/PillButton"
import SectionShell from "../ui/SectionShell"

export default function Practice() {
  return (
    <SectionShell id="practice">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-display-md mb-8 font-semibold tracking-display text-balance">
            Blending design and code with functional clarity and creative precision.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/60">
            Delivering thoughtful digital systems with structure, flow, and expressive interaction — from enterprise architecture to personal projects that make complex ideas simple.
          </p>
          <PillButton href="#work">See Works</PillButton>
        </div>
        <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-sm lg:ml-auto">
          <Image
            src={profilePhotos.couple.src}
            alt={profilePhotos.couple.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
      <Divider className="mt-20" />
    </SectionShell>
  )
}
