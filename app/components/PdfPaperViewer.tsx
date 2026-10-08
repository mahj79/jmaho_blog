type PdfPaperViewerProps = {
  src: string
  title: string
}

export default function PdfPaperViewer({ src, title }: PdfPaperViewerProps) {
  return (
    <section className="mt-12" aria-label="Paper PDF">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <a
          href={src}
          download
          className="rounded-sm bg-white px-5 py-2.5 text-center text-sm font-semibold text-black transition-opacity hover:opacity-80"
        >
          Download PDF
        </a>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/40"
        >
          Open in new tab
        </a>
      </div>

      <iframe
        src={`${src}#view=FitH`}
        title={`${title} (PDF)`}
        className="hidden min-h-[70vh] w-full rounded-sm border border-white/10 sm:block"
      />

      <p className="mt-3 text-xs text-white/40">
        Having trouble viewing the paper?{" "}
        <a href={src} download className="underline">
          Download the PDF
        </a>
        .
      </p>
    </section>
  )
}
