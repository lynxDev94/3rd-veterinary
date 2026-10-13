import { ExternalLink, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { clinic } from '@/lib/clinic'

export function CallCta() {
  return (
    <section aria-labelledby="call-heading" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="flex flex-col items-center gap-8 text-center">
          <p id="call-heading" className="text-sm font-semibold tracking-widest text-primary uppercase">
            Nerimaujate dėl augintinio? Paskambinkite.
          </p>
          <a
            href={clinic.phoneHref}
            className="group flex flex-col items-center gap-6 md:flex-row"
            aria-label={`Skambinti ${clinic.phone}`}
          >
            <span className="flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl shadow-accent/40 transition-transform duration-300 group-hover:scale-110 md:size-28">
              <Phone className="size-9 animate-ring md:size-12" aria-hidden="true" />
            </span>
            <span className="font-display text-5xl font-bold tracking-tighter transition-colors group-hover:text-primary sm:text-7xl lg:text-8xl">
              {clinic.phone}
            </span>
          </a>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Darbo laikas: pirmadienį–penktadienį 9:00–19:00, šeštadienį 10:00–14:00. Papasakokite, kas nutiko — patarsime,
            ką daryti toliau.
          </p>
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-semibold ring-1 ring-border transition-shadow hover:shadow-md"
          >
            <ExternalLink className="size-4 text-primary" aria-hidden="true" />
            Naujienos ir akcijos — mūsų Facebook puslapyje
            <span className="sr-only">(atsidaro naujame lange)</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
