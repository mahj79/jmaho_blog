type SectionHeadingProps = {
  children: React.ReactNode
  count?: number
  className?: string
}

export default function SectionHeading({ children, count, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-display-lg font-semibold tracking-display ${className}`}>
      {children}
      {count !== undefined && (
        <sup className="ml-1 text-[0.35em] font-normal align-super">({count})</sup>
      )}
    </h2>
  )
}
