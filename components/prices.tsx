'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { clinic, priceGroups } from '@/lib/clinic'
import { cn } from '@/lib/utils'

export function Prices() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="prices" className="scroll-mt-24 bg-muted/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="flex flex-col gap-5 lg:col-span-4">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Kainos</p>
          <h2 className="font-display text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-5xl">
            Aiškios kainos — be staigmenų.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Čia pateikiamos dažniausių paslaugų kainos. Galutinė kaina priklauso nuo gyvūno dydžio ir būklės —
            jei abejojate, paskambinkite ir pasitarsime.
          </p>
          <a href={clinic.phoneHref} className="w-fit font-semibold text-primary underline-offset-4 hover:underline">
            Klauskite telefonu · {clinic.phone}
          </a>
        </Reveal>

        <div className="flex flex-col gap-3 lg:col-span-8">
          {priceGroups.map((group, i) => {
            const isOpen = open === i
            return (
              <Reveal key={group.title} delay={Math.min(i, 4) * 0.05}>
                <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`price-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-xl font-semibold tracking-tight transition-colors hover:text-primary md:text-2xl"
                    >
                      {group.title}
                      <span
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-primary transition-all duration-300',
                          isOpen && 'rotate-45 bg-primary text-primary-foreground',
                        )}
                      >
                        <Plus className="size-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`price-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <dl className="flex flex-col px-6 pb-5">
                          {group.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-baseline justify-between gap-4 border-t border-dashed border-border py-3"
                            >
                              <dt className="text-muted-foreground">{item.name}</dt>
                              <dd className="shrink-0 font-semibold whitespace-nowrap">{item.price}</dd>
                            </div>
                          ))}
                        </dl>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
