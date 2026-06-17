type BlogPost = {
    id: string
    title: string
    date: string
    description: string
    image: string
}

type Project = {
    id: string
    title: string
    description: string
    tags: string[]
    image: string
    href?: string
}

type Experience = {
    id: string
    company: string
    companyUrl?: string
    role: string
    period: string
    location: string
    highlights: string[]
}

type SkillCategory = {
    id: string
    index: string
    title: string
    description: string
    items: string[]
}

type Testimonial = {
    id: string
    quote: string
    name: string
    role: string
    company: string
    avatar: string
}

type Award = {
    id: string
    count: string
    platform: string
    description: string
    thumbnails: string[]
}

type Client = {
    id: string
    name: string
    image: string
}

type PricingTier = {
    id: string
    price: string
    period: string
    name: string
    description: string
    features: string[]
}

type FAQItem = {
    id: string
    question: string
    answer: string
}
