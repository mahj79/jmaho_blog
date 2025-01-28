import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id, title, date, description, image} = post;
    const formattedDate = getFormattedDate(date);
    
    return (
        <li className="mt-12 w-full md:max-w-2xl mx-auto">
            <div className="bg-zinc-500/70 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-black">
                {/* Image Container */}
                <div className="relative w-full aspect-[9/4]">
                    <Link href={`/posts/${id}`}>
                        <Image 
                            src={image} 
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </Link>
                </div>
                
                {/* Content Container */}
                <div className="p-6 border-t-4 border-black">
                    <h2 className="mb-3">
                        <Link 
                            href={`/posts/${id}`}
                            className="text-2xl font-bold text-black hover:text-blue-700 transition"
                        >
                            {title}
                        </Link>
                    </h2>
                    
                    <h3 className="text-black mb-4 text-lg">
                        {description}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-black">
                        <span>{formattedDate}</span>
                        <Link 
                            href={`/posts/${id}`}
                            className="text-black font-bold hover:text-blue-700 transition"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}