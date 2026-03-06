import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { combos } from '../data/combos'
import { formatPriceDisplayLocal } from '../utils/currency'

export function PromosSection() {
  const { t, i18n } = useTranslation()

  return (
    <section id="promos" className="relative scroll-mt-24 bg-carbon px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="font-display text-chinese-yellow/90 mb-2 text-sm uppercase tracking-widest">
            {t('promos.subtitle')}
          </p>
          <h2 className="font-display text-4xl font-bold text-ivory md:text-5xl">
            {t('promos.title')}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {combos.map((combo, i) => (
            <motion.article
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border transition-all hover:shadow-xl ${
                combo.highlight
                  ? 'border-chinese-red/50 bg-chinese-red/10 shadow-lg shadow-chinese-red/10'
                  : 'border-ivory/10 bg-ivory/5 hover:border-chinese-yellow/30'
              }`}
            >
              {combo.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-chinese-yellow px-3 py-1 text-xs font-bold text-carbon">
                  {t('promos.cta')}
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={combo.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {t(combo.nameKey)}
                </h3>
                <p className="mt-2 text-sm text-ivory/80">
                  {t(combo.descriptionKey)}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xl font-bold text-chinese-yellow">
                    {formatPriceDisplayLocal(combo.prices, i18n.language)}
                  </span>
                  {combo.originalPrices != null && (
                    <span className="text-sm text-ivory/50 line-through">
                      {formatPriceDisplayLocal(combo.originalPrices, i18n.language)}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
