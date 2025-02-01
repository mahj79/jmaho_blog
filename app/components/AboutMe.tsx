//About me section
import Link from "next/link"

export default function AboutMe() {
    
    return (
        <section className="text-slate-100 mt-6 mx-auto max-w-2xl">
            <button className="bg-green-900 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-green-300 rounded">
                {/* <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0"> */}
                    <Link href="/AboutMe" className="text-white/90 no-underline hover:text-white transition-colors duration-200">
                        About Me
                    </Link> 
 {/* /               </h1> */}
            </button>                
        </section>
    )
}
