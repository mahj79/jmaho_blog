import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export type BlogPost = {
    id: string;
    title: string;
    date: string;
    description?: string;  // Optional field
    image?: string;        // Optional field
  };

export default function ListItem({post}: Props) {
    const {id, title, date, description, image} = post;
    const formattedDate = getFormattedDate(date);
    return(
        <li className="text-slate-100 mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white"
            href={`/posts/${id}`}>{title}</Link>
            <br/>
            <p className="text-slate-100 text-sm mt-1">{description}</p>
            <p className="text-slate-100 text-sm mt-1">{formattedDate}</p>
        </li>
    )
}