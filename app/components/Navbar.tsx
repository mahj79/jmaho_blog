import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin, FaHome } from "react-icons/fa"


export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-phthalo from-60% to-[#8faf93] p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white transition-colors duration-200">
                        Maho&apos;s Corner
                    </Link> 
                </h1>

                <div className="flex flex-row items-center gap-6">
                    <Link 
                        className="bg-emerald-700 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors duration-200 mr-6 sm:mr-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2" 
                        href="/"
                    >
                        <FaHome className="text-2xl sm:text-3xl" />
                    </Link>

                    <Link 
                         className="text-white p-2 no-underline relative group text-xl
                         before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gradient-to-r before:from-emerald-500 before:to-gray-400 before:top-[-5px] before:left-0 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 before:ease-out hover:before:scale-x-100
                         after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-emerald-500 after:to-gray-400 after:bottom-[-5px] after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-400 after:ease-out hover:after:scale-x-100"
                         href="/about"
                    >
                        About Me!
                    </Link>

                    <div className="flex flex-row justify-center gap-6 sm:gap-4 text-3xl sm:text-4xl lg:text-5xl">
                        <Link className="text-white/90 hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/jack-mahoney-077520107/">
                            <FaLinkedin />
                        </Link>
                        <Link className="text-white/90 hover:text-white transition-colors duration-200" href="https://twitter.com/mahoneyj50?lang=en">
                            <FaTwitter />
                        </Link>
                        <Link className="text-white/90 hover:text-white transition-colors duration-200" href="https://github.com/mahj79">
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}