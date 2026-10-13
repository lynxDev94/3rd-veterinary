import { Phone } from 'lucide-react'
import { clinic, navLinks } from '@/lib/clinic'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 pt-20 pb-28 md:px-8 md:pb-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <p className="font-display text-6xl font-bold tracking-tighter md:text-8xl">
            {clinic.shortName}<span className="text-accent">.</span>
          </p>
          <nav aria-label="Poraštės navigacija">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-background/70 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-background/15 pt-8 text-sm text-background/60 md:flex-row">
          <p>
            {clinic.name} · {clinic.street}, {clinic.city}
          </p>
          <p>
            © {new Date().getFullYear()} {clinic.name} · <a href={clinic.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a>
          </p>
        </div>
      </div>

      <a
        href={clinic.phoneHref}
        className="fixed right-4 bottom-4 left-4 z-40 flex items-center justify-center gap-3 rounded-full bg-accent py-4 font-semibold text-accent-foreground shadow-2xl md:hidden"
      >
        <Phone className="size-5 animate-ring" aria-hidden="true" />
        Skambinti · {clinic.phone}
      </a>
    </footer>
  )
}
