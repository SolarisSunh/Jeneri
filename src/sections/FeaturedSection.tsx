import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { featuredDishes } from '../data/featured'
import { menuItems } from '../data/menu'
import { formatPriceDisplayLocal } from '../utils/currency'
import type { MenuItem } from '../data/menu'

interface FeaturedSectionProps {
  onDishClick?: (dish: MenuItem) => void
}

export function FeaturedSection({ onDishClick }: FeaturedSectionProps) {
  const { t, i18n } = useTranslation()
  const [index, setIndex] = useState(0)
  const featured = featuredDishes[index]
  const menuItem = menuItems.find((m) => m.id === featured.menuId)!

  const next = () => setIndex((i) => (i + 1) % featuredDishes.length)
  const prev = () => setIndex((i) => (i - 1 + featuredDishes.length) % featuredDishes.length)

  return (
    <section id="featured" className="relative scroll-mt-24 overflow-hidden bg-carbon px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-chinese-red/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="font-display text-chinese-yellow/90 mb-2 text-sm uppercase tracking-widest">
            {t('featured.subtitle')}
          </p>
          <h2 className="font-display text-4xl font-bold text-ivory md:text-5xl">
            {t('featured.title')}
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/5 shadow-2xl"
          >
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
              <img
                src={featured.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    featured.badge === 'chef'
                      ? 'bg-chinese-gold/90 text-carbon'
                      : featured.badge === 'popular'
                        ? 'bg-chinese-red text-ivory'
                        : 'bg-ivory/90 text-carbon'
                  }`}
                >
                  {t(`featured.badges.${featured.badge}`)}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="font-display text-3xl font-bold text-ivory md:text-4xl">
                {t(`menu.dishes.${menuItem.id}.name`)}
              </h3>
              <p className="mt-4 text-ivory/85">
                {t(`menu.dishes.${menuItem.id}.desc`)}
              </p>
              <p className="mt-6 text-2xl font-semibold text-chinese-yellow">
                {formatPriceDisplayLocal(menuItem.prices, i18n.language)}
              </p>
              {onDishClick && (
                <button
                  type="button"
                  onClick={() => onDishClick(menuItem)}
                  className="mt-6 flex w-fit items-center gap-2 rounded-full bg-chinese-red/20 px-5 py-2.5 text-sm font-medium text-chinese-yellow transition-colors hover:bg-chinese-red/40"
                >
                  <Play className="h-4 w-4" />
                  {t('menu.howItsMade')}
                </button>
              )}
              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-ivory/30 p-2 text-ivory transition-colors hover:bg-ivory/10"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-ivory/30 p-2 text-ivory transition-colors hover:bg-ivory/10"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="flex items-center gap-2">
                  {featuredDishes.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === index ? 'w-8 bg-chinese-red' : 'w-2 bg-ivory/30 hover:bg-ivory/50'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
