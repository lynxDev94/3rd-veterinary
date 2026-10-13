import { Check, Droplet, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { clinic } from '@/lib/clinic'

const requirements = [
  'Šuniui 1–8 metai',
  'Sveria bent 25 kg, nėra nutukęs',
  'Sveikas, paskiepytas, nesirgęs erkių platinamomis ligomis',
  'Draugiškas ir gali ramiai pagulėti apie 10 minučių',
]

export function Donors() {
  return (
    <section id="donors" aria-labelledby="donors-heading" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-primary uppercase">
            <Droplet className="size-4 fill-accent text-accent" aria-hidden="true" />
            Kraujo donorystė
          </p>
          <h2 id="donors-heading" className="font-display text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
            Jūsų šuo gali išgelbėti kito šuns gyvybę.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Kraujo perpylimo prireikia po traumų, apsinuodijimų ar sunkių ligų. Viena donorystė — iki 450 ml kraujo.
            Procedūra neskausminga, o kraujo bankas klinikoje padeda ne vienam keturkojui.
          </p>
          <a
            href={clinic.phoneHref}
            className="flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-4" aria-hidden="true" />
            Užregistruoti donorą
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-6 rounded-4xl bg-primary p-8 text-primary-foreground md:p-10">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Kas gali tapti donoru?</h3>
            <ul className="flex flex-col gap-4">
              {requirements.map((item) => (
                <li key={item} className="flex gap-4 border-b border-primary-foreground/15 pb-4 last:border-0 last:pb-0">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
