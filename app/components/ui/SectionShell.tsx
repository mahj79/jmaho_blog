type SectionShellProps = {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-site px-6 py-12 sm:px-16 sm:py-20 ${className}`}>
      {children}
    </section>
  )
}
