"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { profilePhotos } from "@/lib/profilePhotos"

export default function HeroProfileFlip() {
  const [flipped, setFlipped] = useState(false)
  const [useHover, setUseHover] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setUseHover(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  const toggleFlipped = () => setFlipped((value) => !value)

  return (
    <button
      type="button"
      className={`hero-profile-flip relative aspect-[3/4] w-full max-w-lg rounded-sm border-0 bg-transparent p-0 text-left ${flipped ? "is-flipped" : ""}`}
      onMouseEnter={() => useHover && setFlipped(true)}
      onMouseLeave={() => useHover && setFlipped(false)}
      onClick={() => {
        if (!useHover) toggleFlipped()
      }}
      aria-label={flipped ? "Show profile photo" : "Show Chicago skyline photo"}
      aria-pressed={flipped}
    >
      <div className="hero-profile-flip-inner h-full w-full">
        <div className="hero-profile-flip-face hero-profile-flip-front overflow-hidden rounded-sm">
          <Image
            src={profilePhotos.profile.src}
            alt={profilePhotos.profile.alt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="hero-profile-flip-face hero-profile-flip-back overflow-hidden rounded-sm">
          <Image
            src={profilePhotos.chicago.src}
            alt={profilePhotos.chicago.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
      </div>
    </button>
  )
}
