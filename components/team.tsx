import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const team = [
  {
    name: 'Dr. Marcus Hale',
    role: 'Founder & Medical Director',
    pet: 'Lives with Pretzel, a very opinionated dachshund',
    image: '/images/team-1.png',
    alt: 'Dr. Marcus Hale holding a dachshund',
  },
  {
    name: 'Dr. Priya Raman',
    role: 'Veterinary Surgeon',
    pet: 'Lives with Miso, a black cat who runs the house',
    image: '/images/team-2.png',
    alt: 'Dr. Priya Raman holding a black cat',
  },
  {
    name: 'Denise Okafor, RVT',
    role: 'Head Veterinary Nurse',
    pet: 'Lives with Biscuit & Bean, two chatty guinea pigs',
    image: '/images/team-3.png',
    alt: 'Denise Okafor holding a guinea pig',
  },
]

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-14 flex max-w-2xl flex-col gap-5">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">Meet the team</p>
        <h2 className="font-display text-4xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
          Pet people, first. Doctors, a very close second.
        </h2>
      </Reveal>

      <ul className="grid gap-6 md:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.12}>
            <li className="group flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-muted">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <p className="absolute inset-x-3 bottom-3 translate-y-[calc(100%+1.5rem)] rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-500 ease-out group-hover:translate-y-0">
                  {member.pet}
                </p>
              </div>
              <div className="flex flex-col gap-0.5 px-1">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
