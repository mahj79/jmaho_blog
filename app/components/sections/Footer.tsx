import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import Divider from "../ui/Divider"
import PillButton from "../ui/PillButton"

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Awards", href: "#awards" },
  { label: "Writing", href: "#writing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "/about" },
]

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-site px-6 pb-12 pt-8 sm:px-10 sm:pb-16">
      <Divider className="mb-16" />

      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Quick Links</p>
          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Connect</p>
          <div className="flex gap-4 text-xl">
            <Link
              href="https://www.linkedin.com/in/jack-mahoney-077520107/"
              className="text-white/70 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/mahoneyj50?lang=en"
              className="text-white/70 transition-colors hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://github.com/mahj79"
              className="text-white/70 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.instagram.com/mahoneyj50/"
              className="text-white/70 transition-colors hover:text-white"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/60">
            <a href="mailto:mahonej79@gmail.com" className="hover:text-white">
              mahonej79@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <PillButton href="#top">Back to Top</PillButton>
        </div>
      </div>

      <p className="text-display-md font-semibold tracking-display">©2025</p>
      <p className="mt-2 text-sm text-white/40">Maho&apos;s Corner — Jack Mahoney</p>
    </footer>
  )
}
