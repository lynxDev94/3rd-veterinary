// All facts below come from santakosveterinarija.lt and the clinic's Google profile.
// Demo only — do not publish without the clinic's approval.

const placeId = 'ChIJP-8xXAAi50YR-q9PauyKyCk'

export const clinic = {
  name: 'Santakos veterinarija',
  shortName: 'Santakos',
  tagline: 'Veterinarinės paslaugos Jūsų augintiniams',
  phone: '+370 620 41484',
  phoneHref: 'tel:+37062041484',
  email: 'SantakosVet@gmail.com',
  street: 'Tilžės g. 10',
  city: 'Vilijampolė, Kaunas',
  facebookUrl: 'https://www.facebook.com/santakosveterinarija',
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Til%C5%BE%C4%97s+g.+10,+Kaunas&destination_place_id=${placeId}`,
  mapEmbedUrl: 'https://www.google.com/maps?q=Santakos+veterinarija,+Til%C5%BE%C4%97s+g.+10,+Kaunas&z=16&output=embed',
  reviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
  allReviewsUrl: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
  rating: 4.7,
  reviewCount: 102,
  // Hours from santakosveterinarija.lt. Google profile shows Mon–Fri 11:00–19:00 — confirm with the clinic.
  hours: [
    { days: 'Pirmadienis – penktadienis', time: '09:00 – 19:00' },
    { days: 'Šeštadienis', time: '10:00 – 14:00' },
    { days: 'Sekmadienis', time: 'Nedirbame' },
  ],
  hoursShort: 'I–V 9–19 · VI 10–14',
} as const

export const navLinks = [
  { href: '#about', label: 'Apie mus' },
  { href: '#services', label: 'Paslaugos' },
  { href: '#prices', label: 'Kainos' },
  { href: '#reviews', label: 'Atsiliepimai' },
  { href: '#contact', label: 'Kontaktai' },
] as const

export type PriceGroup = { title: string; items: { name: string; price: string }[] }

export const priceGroups: PriceGroup[] = [
  {
    title: 'Bendrosios paslaugos',
    items: [
      { name: 'Apžiūra, konsultacija', price: '25 €' },
      { name: 'Pakartotinė apžiūra', price: '15 €' },
      { name: 'Vakcinacija', price: '20–35 €' },
      { name: 'Vakcinacija nuo pasiutligės', price: '15 €' },
      { name: 'ES gyvūno augintinio pasas', price: '15 €' },
      { name: 'Nagų kirpimas', price: '5–15 €' },
      { name: 'Ausų valymas', price: '10 €' },
      { name: 'Iškvietimas į namus', price: '25–45 €' },
    ],
  },
  {
    title: 'Identifikavimas',
    items: [
      { name: 'Mikroschemos įvedimas', price: '25 €' },
      { name: 'Duomenų keitimas', price: '10 €' },
      { name: 'DNR tyrimas', price: '80 €' },
    ],
  },
  {
    title: 'Laboratoriniai tyrimai',
    items: [
      { name: 'Kraujo morfologinis tyrimas', price: '35 €' },
      { name: 'Kraujo biocheminis tyrimas (kompleksinis)', price: '36 €' },
      { name: 'Šlapimo tyrimas', price: '15 €' },
      { name: 'Citologinis tyrimas', price: '40 €' },
      { name: 'Greitieji testai', price: '25 €' },
      { name: 'Histopatologinis tyrimas', price: '50 €' },
    ],
  },
  {
    title: 'Kraujo perpylimas',
    items: [
      { name: 'Kraujo perpylimas', price: '65 €' },
      { name: 'Kraujo grupės nustatymas', price: '65 €' },
    ],
  },
  {
    title: 'Traumatologija',
    items: [
      { name: 'Žaizdos siuvimas', price: '10–45 €' },
      { name: 'Kaulų lūžių operacija', price: '200–600 €' },
      { name: 'Kelio kryžminių raiščių operacija', price: '200–400 €' },
    ],
  },
  {
    title: 'Odontologija',
    items: [
      { name: 'Burnos higiena', price: '55–65 €' },
      { name: 'Danties traukimas', price: '10 / 60 €' },
      { name: 'Graužikų dantų trumpinimas', price: '10 €' },
    ],
  },
  {
    title: 'Ginekologija ir urologija',
    items: [
      { name: 'Katino kastracija', price: '35 €' },
      { name: 'Katės sterilizacija', price: '55 €' },
      { name: 'Šuns kastracija', price: '55–130 €' },
      { name: 'Kalės sterilizacija', price: '80–300 €' },
    ],
  },
  {
    title: 'Kitos operacijos',
    items: [
      { name: 'Skrandžio / žarnyno operacija', price: '300–400 €' },
      { name: 'Eutanazija', price: 'nuo 25 €' },
    ],
  },
]

export const reviews = [
  {
    name: 'Mantas B.',
    year: '2023',
    text: 'Begalo dekingi Santakos klinikai ir visiems kraujo donorams už išgelbėtą mūsų šėimos nario gyvybę! Ačiū Ačiū Ačiū!',
  },
  {
    name: 'Karolina K.',
    year: '2022',
    text: 'Visada priimti, net skubiai randa laiko, visada išžiūrėti, išmyliuoti. Nei karto neteko nusivilt! Dirba mylinčios gvūnėlius specialistės.',
  },
  {
    name: 'Laura',
    year: '2026',
    text: '…ši klinika yra viena ir vienintelė priežastis kodėl mano šuo gyvas. Darbuotojų empatija yra neapsakoma ir rūpestys didesnis negu bet kur kitur.',
  },
  {
    name: 'Aurelijus V.',
    year: '2024',
    text: 'Verta pasitikėjimo klinika! Labai malonus aptarnavimas, profesionali pagalba :)',
  },
  {
    name: 'Saulius',
    year: '2019',
    text: 'Labai paslaugus ir malonus darbuotojai. Iskirtinis demesys Jusu augintiniui. Bet labiausiai gerbiu uz gydymo rezultatus. Daug kur vesdavau savo suniuka, bet pilnai isgyde tik cia. Rekomenduoju.',
  },
  {
    name: 'Justė K.',
    year: '2026',
    text: 'Skubos tvarka atkeliavę iš Vilniaus, gavome ne tik gyvybiškai svarbų kraujo perpylimą, bet ir palaikymą, rūpestį ir aukščiausio lygio profesionalumą.',
  },
  {
    name: 'Dalia J.',
    year: '2018',
    text: 'Daug metų turiu augintinius bet tokio dėmesio ir švelnumo sulaukė tik dabar. O profesionali pagalba irgi labai puiki, atidi ir kokybiška.',
  },
  {
    name: 'Jonas B.',
    year: '2021',
    text: 'Profesionalus ir malonus kolektyvas, matosi, kad myli gyvūnus.',
  },
] as const
