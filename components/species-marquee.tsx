const species = ['Šunys', 'Katės', 'Triušiai', 'Jūrų kiaulytės', 'Šeškai', 'Paukščiai']

export function SpeciesMarquee() {
  const items = [...species, ...species]
  return (
    <section aria-label="Gyvūnai, kuriais rūpinamės" className="relative -rotate-1 overflow-hidden bg-primary py-5 text-primary-foreground">
      <div className="flex w-max animate-marquee items-center">
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className="flex items-center" aria-hidden={i >= species.length}>
            <span className="px-8 font-display text-3xl font-semibold tracking-tight md:text-5xl">{name}</span>
            <span className="size-4 rounded-full bg-accent md:size-5" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}
