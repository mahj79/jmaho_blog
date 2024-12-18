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
            {/* Image Container */}
            <div className="relative w-24 h-24 flex-shrink-0">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100px, 100px"
                />
            </div>
            
            <div>
                <Link className="underline hover:text-black/70 dark:hover:text-white"
                href={`/posts/${id}`}>{title}</Link>
                <br/>
                <p className="text-slate-100 text-sm mt-1">{description}</p>
                <p className="text-slate-100 text-sm mt-1">{formattedDate}</p>
            </div>
        </li>
    )
}