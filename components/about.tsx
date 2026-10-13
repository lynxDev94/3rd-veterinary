import Image from 'next/image'
import { Droplet, House, Stethoscope } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: Stethoscope,
    title: 'Gydymas ir chirurgija',
    body: 'Smulkių gyvūnų ligų diagnostika ir gydymas — terapiškai ir chirurgiškai, su laboratoriniais tyrimais.',
  },
  {
    icon: Droplet,
    title: 'Šunų kraujo bankas',
    body: 'Kai skaičiuojamos minutės, kraujo perpylimas gali išgelbėti gyvybę. Kraujo turime vietoje.',
  },
  {
    icon: House,
    title: 'Atvykstame į namus',
    body: 'Jei augintinio atvežti negalite, gydytojas atvyks pas jus. Iškvietimas — 25–45 €.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
            <Image
              src="/images/web-about-cat.jpg"
              alt="Trispalvė katė"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-8 w-48 overflow-hidden rounded-3xl border-4 border-background shadow-2xl md:-right-10 md:w-64">
            <div className="relative aspect-square">
              <Image
                src="/images/web-cat-square.jpg"
                alt="Katė ilsisi saulėje"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-10">
          <Reveal className="flex flex-col gap-5">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Apie kliniką</p>
            <h2 className="font-display text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
              Ten, kur susitinka Neris ir Nemunas.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Klinika įsikūrusi Vilijampolėje, Tilžės gatvėje — netoli Neries ir Nemuno santakos, iš kurios ir kilo
              mūsų pavadinimas. Rūpinamės šunimis, katėmis, triušiais, šeškais, jūrų kiaulytėmis ir paukščiais:
              konsultuojame, gydome, operuojame, o išvykstant — prižiūrime gyvūnų viešbutyje.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <li className="group flex gap-5 rounded-3xl bg-card p-5 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <pillar.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{pillar.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
