/**
 * Precios por idioma/mercado (valores realistas por región).
 * Cada producto define un precio por locale; aquí solo formateamos.
 */
export type LocaleCode = 'es' | 'en' | 'ko' | 'zh' | 'de-AT' | 'fr'

export const currencyByLocale: Record<LocaleCode, { code: string }> = {
  es: { code: 'MXN' },
  en: { code: 'USD' },
  ko: { code: 'KRW' },
  zh: { code: 'CNY' },
  'de-AT': { code: 'EUR' },
  fr: { code: 'EUR' },
}

export type PricesByLocale = Partial<Record<LocaleCode, number>>

function getConfig(locale: string): { code: string } {
  return currencyByLocale[locale as LocaleCode] ?? currencyByLocale.es
}

/** Obtiene el precio para un locale (fallback a es si no existe). */
export function getPriceForLocale(prices: PricesByLocale, locale: string): number {
  const loc = locale as LocaleCode
  if (prices[loc] != null) return prices[loc]!
  return prices.es ?? 0
}

/** Formatea precio ya definido por locale (ej. precios de menú/combos). */
export function formatPriceDisplayLocal(prices: PricesByLocale, locale: string): string {
  const value = getPriceForLocale(prices, locale)
  const { code } = getConfig(locale)
  const decimals = code === 'KRW' ? 0 : 2
  const formatted = value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return `${formatted} ${code}`
}
