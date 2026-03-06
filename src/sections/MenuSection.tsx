import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, type CategoryId, type MenuItem } from '../data/menu'
import { formatPriceDisplayLocal } from '../utils/currency'

const categories: { id: CategoryId | 'all'; key: string }[] = [
  { id: 'all', key: 'all' },
  { id: 'ramen', key: 'ramen' },
  { id: 'rice', key: 'rice' },
  { id: 'dumplings', key: 'dumplings' },
  { id: 'noodles', key: 'noodles' },
  { id: 'desserts', key: 'desserts' },
  { id: 'drinks', key: 'drinks' },
]

interface MenuSectionProps {
  onDishClick?: (dish: MenuItem) => void
}

export function MenuSection({ onDishClick }: MenuSectionProps) {
  const { t, i18n } = useTranslation()
  const [active, setActive] = useState<CategoryId | 'all'>('all')

  const filtered =
    active === 'all' ? menuItems : menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="relative scroll-mt-24 bg-carbon px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 text-center"
        >
          <p className="font-display text-chinese-yellow/90 mb-2 text-sm uppercase tracking-widest">
            {t('menu.subtitle')}
          </p>
          <h2 className="font-display text-4xl font-bold text-ivory md:text-5xl">
            {t('menu.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === cat.id
                  ? 'bg-chinese-red text-ivory'
                  : 'bg-ivory/5 text-ivory/80 hover:bg-ivory/15 hover:text-ivory'
              }`}
            >
              {t(cat.id === 'all' ? 'menu.all' : `menu.categories.${cat.key}`)}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                role="button"
                tabIndex={0}
                onClick={() => onDishClick?.(item)}
                onKeyDown={(e) => e.key === 'Enter' && onDishClick?.(item)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/5 transition-all hover:border-chinese-red/30 hover:bg-ivory/10 hover:shadow-xl hover:shadow-chinese-red/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="font-display text-xl font-semibold text-ivory">
                      {t(`menu.dishes.${item.id}.name`)}
                    </h3>
                    <p className="text-sm text-ivory/80 line-clamp-2">
                      {t(`menu.dishes.${item.id}.desc`)}
                    </p>
                    <p className="mt-2 font-semibold text-chinese-yellow">
                      {formatPriceDisplayLocal(item.prices, i18n.language)}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
