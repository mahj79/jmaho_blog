import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/25 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-site flex-col items-center gap-3 px-6 py-3 sm:flex-row sm:justify-between sm:gap-4 sm:px-10 sm:py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-white/80"
        >
          Maho&apos;s Corner
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-lg">
          <Link
            href="https://www.linkedin.com/in/jack-mahoney-077520107/"
            className="text-white/60 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://twitter.com/mahoneyj50?lang=en"
            className="text-white/60 transition-colors hover:text-white"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://github.com/mahj79"
            className="text-white/60 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.instagram.com/mahoneyj50/"
            className="text-white/60 transition-colors hover:text-white"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </nav>
  )
}
