import type { LocaleCode } from '../utils/currency'

export type CategoryId = 'ramen' | 'rice' | 'dumplings' | 'noodles' | 'desserts' | 'drinks'

export interface MenuItem {
  id: string
  category: CategoryId
  prices: Record<LocaleCode, number>
  image: string
}

/** Precios realistas por mercado: México (MXN), USA (USD), Francia/Austria (EUR), Corea (KRW), China (CNY). */
export const menuItems: MenuItem[] = [
  // Ramen — México 200-260, USA 15-17, EUR 12-14, KRW 12k-15k, CNY 58-72
  { id: 'r1', category: 'ramen', image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600', prices: { es: 249, en: 16.5, fr: 13.5, ko: 14000, zh: 68, 'de-AT': 13.5 } },
  { id: 'r2', category: 'ramen', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600', prices: { es: 239, en: 15.9, fr: 12.9, ko: 13500, zh: 65, 'de-AT': 12.9 } },
  { id: 'r3', category: 'ramen', image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600', prices: { es: 229, en: 15.2, fr: 12.5, ko: 13000, zh: 62, 'de-AT': 12.5 } },
  // Arroz / Rice — México 170-220, USA 11-14, EUR 9-12, KRW 9k-12k, CNY 42-55
  { id: 'ri1', category: 'rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600', prices: { es: 219, en: 13.5, fr: 11, ko: 11500, zh: 52, 'de-AT': 11 } },
  { id: 'ri2', category: 'rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600', prices: { es: 199, en: 12.5, fr: 10.2, ko: 10500, zh: 48, 'de-AT': 10.2 } },
  { id: 'ri3', category: 'rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600', prices: { es: 189, en: 11.9, fr: 9.8, ko: 10000, zh: 45, 'de-AT': 9.8 } },
  // Dumplings — México 150-180, USA 9-12, EUR 8-10, KRW 8k-10k, CNY 32-42
  { id: 'd1', category: 'dumplings', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600', prices: { es: 179, en: 11.5, fr: 9.5, ko: 9500, zh: 42, 'de-AT': 9.5 } },
  { id: 'd2', category: 'dumplings', image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600', prices: { es: 169, en: 10.8, fr: 8.9, ko: 9000, zh: 38, 'de-AT': 8.9 } },
  { id: 'd3', category: 'dumplings', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600', prices: { es: 175, en: 11.2, fr: 9.2, ko: 9200, zh: 40, 'de-AT': 9.2 } },
  // Noodles — México 200-240, USA 13-15, EUR 11-13, KRW 11k-13k, CNY 55-68
  { id: 'n1', category: 'noodles', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=600', prices: { es: 239, en: 14.5, fr: 12, ko: 12500, zh: 62, 'de-AT': 12 } },
  { id: 'n2', category: 'noodles', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600', prices: { es: 229, en: 13.9, fr: 11.5, ko: 12000, zh: 58, 'de-AT': 11.5 } },
  { id: 'n3', category: 'noodles', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600', prices: { es: 219, en: 13.2, fr: 11, ko: 11500, zh: 55, 'de-AT': 11 } },
  // Postres — México 95-140, USA 5.5-8, EUR 5-7, KRW 5.5k-7.5k, CNY 28-38
  { id: 'de1', category: 'desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600', prices: { es: 119, en: 6.9, fr: 5.8, ko: 6500, zh: 35, 'de-AT': 5.8 } },
  { id: 'de2', category: 'desserts', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600', prices: { es: 109, en: 6.2, fr: 5.2, ko: 6000, zh: 32, 'de-AT': 5.2 } },
  { id: 'de3', category: 'desserts', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600', prices: { es: 139, en: 7.9, fr: 6.5, ko: 7500, zh: 38, 'de-AT': 6.5 } },
  // Bebidas — México 55-95, USA 4-6, EUR 3.5-5.5, KRW 4k-6k, CNY 18-32
  { id: 'dr1', category: 'drinks', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600', prices: { es: 69, en: 4.2, fr: 3.5, ko: 4500, zh: 22, 'de-AT': 3.5 } },
  { id: 'dr2', category: 'drinks', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600', prices: { es: 95, en: 5.9, fr: 5, ko: 6200, zh: 30, 'de-AT': 5 } },
  { id: 'dr3', category: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600', prices: { es: 79, en: 4.9, fr: 4.2, ko: 5200, zh: 25, 'de-AT': 4.2 } },
]
