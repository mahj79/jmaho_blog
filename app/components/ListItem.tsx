import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id, title, date, description, image} = post;
    const formattedDate = getFormattedDate(date);
    return(
        <li className="flex items-start space-x-4 text-slate-100 mt-4 text-2xl dark:text-white/90">
            <div 
                key = {post.id}
                className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
                {/* Image Container */}
                <div className="relative w-full h-48">
                    <Image 
                        src={image} 
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 700px, 700px"
                    />
                </div>
                
                <div className="p-6">
                    <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-blue-600">
                            <Link className="underline hover:text-black/70 dark:hover:text-white"
                                href={`/posts/${id}`}>{title}
                            </Link>
                        </span>
                </div>
                
                <div className="flex justify-between items-center text-gray-500 text-sm">
                    <p className="text-black-100 text-sm mt-1">
                        {description}
                    </p>
                </div>

            </div>

            {/* <div>
                <Link className="underline hover:text-black/70 dark:hover:text-white"
                href={`/posts/${id}`}>{title}</Link>
                <br/>
                <p className="text-slate-100 text-sm mt-1">{description}</p>
                <p className="text-slate-100 text-sm mt-1">{formattedDate}</p>
            </div> */}
            </div>
        </li>
    )
}

