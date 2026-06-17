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
            Building cool things because I can and it stimulates my brain.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/60">
            I create apps, websites, designs, write, read, and a whole lot of other things, because that is what life is all about. Are a lot of the photos on my website from my wedding day? Yes. And that is because that was the happiest I&apos;ve ever been, I love my wife, and the photos are really good.
          </p>
          <PillButton href="mailto:mahonej79@gmail.com">You seem cool, let&apos;s chat!</PillButton>
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
