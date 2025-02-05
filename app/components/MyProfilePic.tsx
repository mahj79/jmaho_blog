import Image from "next/image"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto mb-4">
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-2xl 
                shadow-black rounded-3xl mx-auto mt-8"
                src={"/images/Mahos_Corner_Final.jpg"}
                width={800}
                height={400}
                alt="Welcome image of Maho's Corner. Features a desk and various things he associates with such as his french bulldog Cleo,
                an MSU and Lions helmet, a Tigers baseball bat, the Chicago Skyline, and golf clubs."
                priority={true}
            />
        </section>
    )
}