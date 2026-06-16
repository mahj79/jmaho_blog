export const profilePhotos = {
  portrait: {
    src: "/images/jack-portrait-smile.png",
    alt: "Jack Mahoney smiling in a tuxedo at a formal celebration",
  },
  profile: {
    src: "/images/jack-portrait-profile.png",
    alt: "Jack Mahoney in a tuxedo holding a drink in an art-filled room",
  },
  couple: {
    src: "/images/jack-portrait-couple.png",
    alt: "Jack Mahoney in a tuxedo with his partner in a modern creative space",
  },
} as const

export const highlightedPhotos = [
  profilePhotos.portrait,
  profilePhotos.profile,
  profilePhotos.couple,
] as const
