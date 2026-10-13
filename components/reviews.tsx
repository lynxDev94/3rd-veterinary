import { ArrowUpRight, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { clinic, reviews } from '@/lib/clinic'


function Stars({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ''}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-accent text-accent" />
      ))}
    </div>
  )
}

function ReviewColumn({ items, reverse }: { items: readonly (typeof reviews)[number][]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative h-[34rem] overflow-hidden">
      <ul
        className="flex animate-marquee-up flex-col gap-4"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((review, i) => (
          <li
            key={`${review.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex flex-col gap-4 rounded-3xl bg-primary-foreground/[0.07] p-6 ring-1 ring-primary-foreground/10"
          >
            <Stars />
            <p className="leading-relaxed text-primary-foreground/90">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-accent font-display font-bold text-accent-foreground">
                {review.name[0]}
              </span>
              <div className="text-sm">
                <p className="font-semibold">{review.name}</p>
                <p className="text-primary-foreground/60">Google · {review.year}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 px-3 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-4xl bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col justify-center gap-8">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">Google atsiliepimai</p>
          <div className="flex items-end gap-4">
            <span className="font-display text-8xl leading-none font-bold tracking-tighter md:text-9xl">
              {clinic.rating}
            </span>
            <div className="flex flex-col gap-2 pb-3">
              <Stars />
              <p className="text-sm text-primary-foreground/70">{clinic.reviewCount} atsiliepimai Google</p>
            </div>
          </div>
          <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
            „Ši klinika yra viena ir vienintelė priežastis kodėl mano šuo gyvas.“
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-primary-foreground/75 text-pretty">
            Buvote pas mus? Trumpas atsiliepimas Google padeda kitiems augintinių šeimininkams rasti patikimą
            pagalbą.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              <Star className="size-4 fill-current" aria-hidden="true" />
              Palikti atsiliepimą
              <span className="sr-only">(atsidaro naujame lange)</span>
            </a>
            <a
              href={clinic.allReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold ring-1 ring-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"
            >
              Skaityti visus
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(atsidaro naujame lange)</span>
            </a>
          </div>
        </Reveal>

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          aria-label="Klientų atsiliepimai"
        >
          <ReviewColumn items={reviews.slice(0, 4)} />
          <div className="hidden sm:block">
            <ReviewColumn items={reviews.slice(4)} reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
