import { Clock3, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { clinic } from '@/lib/clinic'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-muted/60 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-8">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Kontaktai</p>
          <h2 className="font-display text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
            Vilijampolėje, prie pat upių santakos.
          </h2>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-8 rounded-4xl bg-card p-8 ring-1 ring-border">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <address className="flex flex-col not-italic">
                  <span className="font-display text-xl font-semibold">{clinic.street}</span>
                  <span className="text-muted-foreground">{clinic.city}</span>
                </address>
              </div>

              <div className="flex gap-4">
                <Clock3 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <dl className="flex w-full flex-col gap-2">
                  {clinic.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4 border-b border-dashed pb-2 last:border-0">
                      <dt className="text-muted-foreground">{row.days}</dt>
                      <dd className="font-semibold">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-col gap-3">
                <a href={clinic.phoneHref} className="flex items-center gap-4 font-semibold hover:text-primary">
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                  {clinic.phone}
                </a>
                <a href={`mailto:${clinic.email}`} className="flex items-center gap-4 font-semibold hover:text-primary">
                  <Mail className="size-5 text-primary" aria-hidden="true" />
                  {clinic.email}
                </a>
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  href={clinic.phoneHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Skambinti
                </a>
                <a
                  href={clinic.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold ring-1 ring-foreground/15 transition-colors hover:bg-muted"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Maršrutas
                  <span className="sr-only">(atsidaro naujame lange)</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="relative h-96 overflow-hidden rounded-4xl ring-1 ring-border lg:h-full lg:min-h-[32rem]">
              <iframe
                title={`${clinic.name} žemėlapyje`}
                src={clinic.mapEmbedUrl}
                className="absolute inset-0 size-full grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
