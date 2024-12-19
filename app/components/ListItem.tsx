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
        <li className="mt-4">
            <div 
                className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
                {/* Image Container */}
                <div className="relative w-full h-48">
                    <Image 
                        src={image} 
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                
                <div className="p-6">
                    {/* Title Section */}
                    <h2 className="mb-3">
                        <Link 
                            href={`/posts/${id}`}
                            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
                        >
                            {title}
                        </Link>
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                        {description}
                    </p>
                    
                    {/* Metadata */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                            <span>{formattedDate}</span>
                        </div>
                        
                        {/* Read More Link */}
                        <Link 
                            href={`/posts/${id}`}
                            className="text-blue-600 hover:text-blue-800 transition"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}