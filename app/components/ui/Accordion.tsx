"use client"

import { useState } from "react"
import Divider from "./Divider"

type AccordionProps = {
  items: FAQItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id}>
            {index > 0 && <Divider className="my-0" />}
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base text-white/90">{item.question}</span>
              <span className="shrink-0 text-xl text-white/60 transition-transform duration-200" aria-hidden>
                {isOpen ? "×" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 text-sm leading-relaxed text-white/60">{item.answer}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
