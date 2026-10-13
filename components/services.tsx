import Image from 'next/image'
import { ArrowUpRight, Microscope, Scissors, ShoppingBag, Smile, Stethoscope, Syringe } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { clinic } from '@/lib/clinic'

const services = [
  {
    icon: Stethoscope,
    title: 'Apžiūra ir konsultacija',
    body: 'Sveikatos patikra, ligų diagnostika ir gydymo planas. Apžiūra — 25 €.',
  },
  {
    icon: Syringe,
    title: 'Vakcinacija ir pasai',
    body: 'Skiepai, mikroschemos ir ES gyvūno augintinio pasas kelionėms.',
  },
  {
    icon: Microscope,
    title: 'Laboratoriniai tyrimai',
    body: 'Kraujo, šlapimo, citologiniai ir histopatologiniai tyrimai, greitieji testai.',
  },
  {
    icon: Scissors,
    title: 'Chirurgija',
    body: 'Kastracijos, sterilizacijos, minkštųjų audinių ir kaulų lūžių operacijos.',
  },
  {
    icon: Smile,
    title: 'Dantų priežiūra',
    body: 'Burnos higiena, dantų traukimas ir graužikų dantų trumpinimas.',
  },
  {
    icon: ShoppingBag,
    title: 'Pašarai ir prekės',
    body: 'Pašarų ir zooprekių galite įsigyti vietoje, klinikoje.',
  },
]

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <TiltCard className="h-full">
      <article className="group flex h-full flex-col justify-between gap-10 rounded-3xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-2xl hover:shadow-primary/10">
        <div className="flex items-start justify-between">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-muted text-primary transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-primary group-hover:text-primary-foreground">
            <service.icon className="size-7" aria-hidden="true" />
          </span>
          <ArrowUpRight
            className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl font-semibold tracking-tight">{service.title}</h3>
          <p className="leading-relaxed text-muted-foreground">{service.body}</p>
        </div>
      </article>
    </TiltCard>
  )
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-muted/60 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-5">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Paslaugos</p>
            <h2 className="font-display text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
              Viskas, ko reikia augintinio sveikatai — vienoje vietoje.
            </h2>
          </div>
          <a
            href={clinic.phoneHref}
            className="w-fit shrink-0 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Registruotis vizitui
          </a>
        </Reveal>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Reveal className="md:col-span-2 lg:row-span-2">
            <article className="group relative flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground">
              <Image
                src="/images/web-donor-dog.jpg"
                alt="Vokiečių aviganis žolėje"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="relative flex flex-col gap-3">
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-wide text-accent-foreground uppercase">
                  Gelbstime gyvybes
                </span>
                <h3 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  Šunų kraujo bankas ir perpylimas
                </h3>
                <p className="max-w-md leading-relaxed text-primary-foreground/85">
                  Nustatome kraujo grupę ir atliekame kraujo perpylimą — kartais tai vienintelis būdas išgelbėti
                  sunkiai sergantį šunį. Kraują dovanoja mūsų keturkojai donorai.
                </p>
              </div>
            </article>
          </Reveal>

          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}

          <Reveal className="md:col-span-2">
            <article className="group relative flex h-full min-h-64 items-center overflow-hidden rounded-3xl bg-secondary">
              <div className="relative z-10 flex max-w-[55%] flex-col gap-2 p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Gyvūnų viešbutis</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Išvykstate? Prižiūrėsime: katėms nuo 10 €/d., šunims 20 €/d., triušiams, šeškams, paukščiams ir
                  jūrų kiaulytėms — 10 €/d.
                </p>
              </div>
              <div className="absolute inset-y-0 right-0 w-1/2">
                <Image
                  src="/images/rabbit.png"
                  alt="Purus triušis"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </article>
          </Reveal>

          {services.slice(4).map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
