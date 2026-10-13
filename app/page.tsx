import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SpeciesMarquee } from '@/components/species-marquee'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Donors } from '@/components/donors'
import { Prices } from '@/components/prices'
import { Reviews } from '@/components/reviews'
import { CallCta } from '@/components/call-cta'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <Hero />
        <SpeciesMarquee />
        <About />
        <Services />
        <Donors />
        <Prices />
        <Reviews />
        <CallCta />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
