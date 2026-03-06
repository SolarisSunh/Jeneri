import type { LocaleCode } from '../utils/currency'

export interface ComboItem {
  id: string
  nameKey: string
  descriptionKey: string
  prices: Record<LocaleCode, number>
  originalPrices?: Record<LocaleCode, number>
  image: string
  highlight?: boolean
}

/** Combos con precios realistas por mercado. */
export const combos: ComboItem[] = [
  {
    id: 'c1',
    nameKey: 'promos.combos.ramenCombo',
    descriptionKey: 'promos.combos.ramenComboDesc',
    image: 'https://images.unsplash.com/photo-1569718212165-3a2854894e50?w=600',
    highlight: true,
    prices: { es: 369, en: 23.5, fr: 19.5, ko: 22500, zh: 128, 'de-AT': 19.5 },
    originalPrices: { es: 429, en: 27, fr: 22.5, ko: 26000, zh: 148, 'de-AT': 22.5 },
  },
  {
    id: 'c2',
    nameKey: 'promos.combos.feast',
    descriptionKey: 'promos.combos.feastDesc',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600',
    prices: { es: 549, en: 35, fr: 29, ko: 35000, zh: 198, 'de-AT': 29 },
    originalPrices: { es: 649, en: 41, fr: 34, ko: 41000, zh: 232, 'de-AT': 34 },
  },
  {
    id: 'c3',
    nameKey: 'promos.combos.dumplingFeast',
    descriptionKey: 'promos.combos.dumplingFeastDesc',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600',
    prices: { es: 289, en: 18.5, fr: 15.5, ko: 16800, zh: 95, 'de-AT': 15.5 },
  },
]
