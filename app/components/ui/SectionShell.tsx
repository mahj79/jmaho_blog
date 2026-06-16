type SectionShellProps = {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-site px-6 py-20 sm:px-10 sm:py-28 ${className}`}>
      {children}
    </section>
  )
}
