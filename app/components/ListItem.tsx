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
            <div 
                className="bg-gray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
                {/* Image Container */}
                <div className="relative w-full border-4 border-black aspect-[9/4]">
                    <Image 
                        src={image} 
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                
                <div className="p-6 bg-zinc-500/70 border-4 border-black bg-black">
                    {/* Title Section */}
                    <h2 className="mb-3">
                        <Link 
                            href={`/posts/${id}`}
                            className="text-2xl font-bold text-gray-900 hover:text-blue-800 transition"
                        >
                            {title}
                        </Link>
                    </h2>
                    
                    {/* Description */}
                    <h3 className="text-black mb-4 text-lg">
                        {description}
                    </h3>
                    
                    {/* Metadata */}
                    <div className="flex items-center justify-between text-sm text-black">
                        <div className="flex items-center space-x-4">
                            <span>{formattedDate}</span>
                        </div>
                        
                        {/* Read More Link */}
                        <Link 
                            href={`/posts/${id}`}
                            className="text-black font-bold hover:text-blue-800 transition"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}