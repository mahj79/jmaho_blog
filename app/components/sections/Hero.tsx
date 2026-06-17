import Image from "next/image"
import { profilePhotos } from "@/lib/profilePhotos"
import PillButton from "../ui/PillButton"
import SectionShell from "../ui/SectionShell"

const heroMeta = [
  { label: "Based in Chicago" },
  { label: "Creator + Mental Health Advocate" },
  { label: "Software Engineer + Enterprise Architect" },
]

export default function Hero() {
  return (
    <SectionShell id="top" className="pb-16 pt-14 sm:pb-24 sm:pt-[4.575rem]">
      <div className="mb-8 grid grid-cols-[1fr_auto] items-center gap-4 lg:mb-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="flex min-w-0 items-center lg:col-span-7">
          <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            A <span className="font-bold italic">Jack</span> of all trades is a master of none, but often times better than a master of one.
          </p>
        </div>

        <div className="flex items-center lg:col-span-5 lg:justify-end">
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

      <div className="hero-row-stack mb-12 sm:mb-16 lg:mb-22">
        <div className="hero-grid-row-2 border-t border-white/20 bg-black">
          <div className="hero-title-block">
            <h1 className="hero-wordmark m-0 max-w-full">
              Maho&apos;s Corner™
            </h1>
          </div>
        </div>

        <div className="py-3 grid grid-cols-1 items-center gap-2 border-y border-white/20 bg-black px-2 text-[10px] uppercase tracking-[0.15em] text-white/60 sm:grid-cols-3 sm:gap-0 sm:px-0 sm:text-xs sm:tracking-[0.2em]">
          {heroMeta.map((item, index) => (
            <p
              key={item.label}
              className={`min-w-0 break-words text-balance text-center ${
                index === 0
                  ? "sm:text-left"
                  : index === 1
                    ? "sm:text-center"
                    : "sm:text-right"
              }`}
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>

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
