import Image from "next/image"
import { profilePhotos } from "@/lib/profilePhotos"
import PillButton from "../ui/PillButton"
import SectionShell from "../ui/SectionShell"

export default function Hero() {
  return (
    <SectionShell id="top" className="pb-16 pt-12 sm:pb-24 sm:pt-16">
      {/* Row 1: tagline left, small accent right — tops level (Framer-style) */}
      <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:mb-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            A Jack of all trades is a master of none, but often times better than a master of one.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/60 lg:mt-8">
            Based in Chicago /
            <br />
            <span className="font-bold">Creator</span> + <span className="font-bold">Mental Health Advocate</span> + <span className="font-bold">Software Engineer</span> + <span className="font-bold">Enterprise Architect</span>
          </p>
        </div>

        <div className="flex lg:col-span-5 lg:justify-end">
          <div className="relative aspect-square w-[112px] shrink-0 overflow-hidden rounded-sm sm:w-[128px]">
            <Image
              src={profilePhotos.portrait.src}
              alt={profilePhotos.portrait.alt}
              fill
              className="object-cover object-top"
              priority
              sizes="128px"
            />
          </div>
        </div>
      </div>

      {/* Row 2: display title — single line, scales to container width */}
      <div className="hero-title-block mb-12 border-y border-white/20 bg-black py-5 sm:mb-16 sm:py-7 lg:mb-20 lg:py-8">
        <h1 className="hero-wordmark w-full">
          Maho&apos;s Corner™
        </h1>
      </div>

      {/* Row 3: large profile left, bio right — swapped & scaled up */}
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-sm">
            <Image
              src={profilePhotos.profile.src}
              alt={profilePhotos.profile.alt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Hi, I&apos;m Jack Mahoney — Maho to my friends. I&apos;m a software engineer and enterprise architect in Chicago who loves solving hard problems, building thoughtful systems, and writing about tech, sports, cooking, and life.
          </p>
          <PillButton href="mailto:mahonej79@gmail.com">Contact</PillButton>
        </div>
      </div>
    </SectionShell>
  )
}
