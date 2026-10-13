'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import { clinic, navLinks } from '@/lib/clinic'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full py-2 pr-2 pl-5 transition-all duration-500',
          scrolled || open
            ? 'bg-card/85 shadow-lg shadow-primary/5 ring-1 ring-border backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <a href="#home" className="flex items-center gap-2" aria-label={`${clinic.name} — pradžia`}>
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-mark.jpg" alt="" className="h-7 w-auto" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            {clinic.shortName}<span className="text-primary">.</span>
          </span>
        </a>

        <nav aria-label="Pagrindinė navigacija" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phoneHref}
            className="group flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-4 group-hover:animate-ring" aria-hidden="true" />
            <span className="hidden sm:inline">{clinic.phone}</span>
            <span className="sm:hidden">Skambinti</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full bg-muted md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Uždaryti meniu' : 'Atidaryti meniu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobili navigacija"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl bg-card p-3 shadow-xl ring-1 ring-border md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-2xl font-semibold hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
