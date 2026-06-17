"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { profilePhotos } from "@/lib/profilePhotos"

export default function HeroProfileFlip() {
  const [flipped, setFlipped] = useState(false)
  const [canHover, setCanHover] = useState(true)

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches)
  }, [])

  return (
    <div
      className={`hero-profile-flip relative aspect-[3/4] w-full max-w-lg rounded-sm ${!canHover && flipped ? "is-flipped" : ""}`}
    >
      {!canHover ? (
        <button
          type="button"
          className="absolute inset-0 z-10 cursor-pointer rounded-sm border-0 bg-transparent p-0"
          onClick={() => setFlipped((value) => !value)}
          aria-label={flipped ? "Show profile photo" : "Show Chicago skyline photo"}
          aria-pressed={flipped}
        />
      ) : null}
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
    </div>
  )
}
