'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, Phone, Star } from 'lucide-react'
import { clinic } from '@/lib/clinic'

const TennisBall = dynamic(() => import('@/components/tennis-ball'), { ssr: false })

const ease = [0.22, 1, 0.36, 1] as const
const headline = ['Veterinarinė', 'pagalba', 'prie']

// Hours from lib/clinic.ts: Mon–Fri 9–19, Sat 10–14, Sun closed (Lithuania time).
function openStatus(): string {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Vilnius' }))
  const day = now.getDay()
  const h = now.getHours() + now.getMinutes() / 60
  if (day >= 1 && day <= 5) {
    if (h < 9) return 'Šiandien dirbame nuo 9:00'
    if (h < 19) return 'Šiandien dirbame iki 19:00'
  }
  if (day === 6) {
    if (h < 10) return 'Šiandien dirbame nuo 10:00'
    if (h < 14) return 'Šiandien dirbame iki 14:00'
  }
  return 'Šiuo metu nedirbame'
}

export function Hero() {
  const [status, setStatus] = useState<string>('I–V 9–19 · VI 10–14')
  useEffect(() => setStatus(openStatus()), [])

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <motion.a
            href="#reviews"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex w-fit items-center gap-3 rounded-full bg-card py-1.5 pr-4 pl-1.5 text-sm shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
          >
            <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 font-semibold text-primary-foreground">
              <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
              {clinic.rating}
            </span>
            <span className="text-muted-foreground">
              <strong className="font-semibold text-foreground">{clinic.reviewCount}</strong> atsiliepimai Google
            </span>
          </motion.a>

          <h1 className="font-display text-[2.6rem] leading-[0.95] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={{ opacity: 0, y: '0.6em', rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="relative mr-[0.22em] inline-block"
              initial={{ opacity: 0, y: '0.6em', rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
            >
              <span className="relative z-10 italic text-primary">upių</span>
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-[-0.08em] bottom-[0.08em] z-0 h-[0.38em] origin-left rounded-full bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease }}
              />
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: '0.6em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
            >
              santakos.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {clinic.name} — smulkių gyvūnų klinika Vilijampolėje, Kaune. Diagnozuojame ir gydome terapiškai bei
            chirurgiškai, konsultuojame, atliekame tyrimus, turime šunų kraujo banką ir gyvūnų viešbutį.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={clinic.phoneHref}
              className="group flex items-center justify-center gap-3 rounded-full bg-primary py-4 pr-6 pl-4 font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:scale-[1.03]"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Phone className="size-4 animate-ring" aria-hidden="true" />
              </span>
              Skambinti · {clinic.phone}
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold ring-1 ring-foreground/15 transition-colors hover:bg-card"
            >
              Visos paslaugos
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground"
          >
            {['Kraujo bankas šunims', 'Gyvūnų viešbutis', 'Iškvietimas į namus'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="relative aspect-[3/4] w-full"
          >
            <div className="absolute inset-0 isolate overflow-hidden bg-primary [border-radius:50%_50%_2.5rem_2.5rem/36%_36%_2.5rem_2.5rem]">
              <Image
                src="/images/web-hero.jpg"
                alt="Berno zenenhundas klinikoje"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease }}
            className="absolute top-[18%] -right-2 flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-semibold shadow-xl ring-1 ring-border md:-right-6"
          >
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            {status}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -160 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 8, delay: 0.9 }}
            className="absolute -bottom-12 -left-4 size-44 md:-left-12 md:size-56"
          >
            <TennisBall />
            <span className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-semibold whitespace-nowrap text-background">
              Pasukite kamuoliuką
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
