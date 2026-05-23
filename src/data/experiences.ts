export interface Experience {
  id: string;
  countryCode: string;
  cityName: string;
  locations: string;
  duration: string;
  price: string;
  nextDate: string;
  tag: string;
  titleHtml: string;
}

export const experiences: Experience[] = [
  {
    id: 'rio',
    countryCode: '01 — BRAZIL',
    cityName: 'Rio de Janeiro',
    titleHtml: 'Rio de<br/>Janeiro',
    locations: 'Copacabana · Barra · Gracie Barra HQ',
    duration: '14 days',
    price: 'From $2,400',
    nextDate: 'Jun 12',
    tag: 'The Birthplace'
  },
  {
    id: 'tokyo',
    countryCode: '02 — JAPAN',
    cityName: 'Tokyo',
    titleHtml: 'Tokyo',
    locations: 'Shibuya · Roppongi · Tri-Force Academy',
    duration: '10 days',
    price: 'From $3,200',
    nextDate: 'Jul 03',
    tag: 'Eastern Frontier'
  },
  {
    id: 'lisbon',
    countryCode: '03 — PORTUGAL',
    cityName: 'Lisbon',
    titleHtml: 'Lisbon',
    locations: 'Alfama · Cascais · BJJ Portugal Hub',
    duration: '12 days',
    price: 'From $2,800',
    nextDate: 'Sep 08',
    tag: 'Atlantic Gateway'
  },
  {
    id: 'dubai',
    countryCode: '04 — UAE',
    cityName: 'Dubai',
    titleHtml: 'Dubai',
    locations: 'Marina · DTCC · World Pro Arena',
    duration: '8 days',
    price: 'From $4,200',
    nextDate: 'Nov 14',
    tag: 'Desert Elite'
  },
  {
    id: 'thailand',
    countryCode: '05 — THAILAND',
    cityName: 'Phuket',
    titleHtml: 'Phuket',
    locations: 'Tiger Camp · Phangan · Open-Air Mats',
    duration: '21 days',
    price: 'From $3,600',
    nextDate: 'Jan 18',
    tag: 'Tropical Camp'
  }
];
