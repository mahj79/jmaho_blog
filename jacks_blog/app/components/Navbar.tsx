import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-column sm:flex-row">
                <Link href="/"
                className="text-white/90 no-underline hover:text-white">Jack Mahoney
                </Link>
            </div>
        </nav>
    )
}