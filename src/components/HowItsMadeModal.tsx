import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Flame, CircleDot, UtensilsCrossed, ChefHat } from 'lucide-react'
import type { MenuItem } from '../data/menu'
import { formatPriceDisplayLocal } from '../utils/currency'

const stepIcons = [Flame, CircleDot, UtensilsCrossed, ChefHat]

interface HowItsMadeModalProps {
  dish: MenuItem | null
  onClose: () => void
}

export function HowItsMadeModal({ dish, onClose }: HowItsMadeModalProps) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (!dish) return
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [dish, onClose])

  if (!dish) return null

  const stepsRaw = t(`menu.recipes.${dish.id}.steps`, { returnObjects: true })
  const steps = Array.isArray(stepsRaw) ? stepsRaw as string[] : []

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop con blur y gradiente animado */}
        <div className="absolute inset-0 bg-carbon/90 backdrop-blur-md" />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-radial from-chinese-red/20 via-transparent to-transparent"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-chinese-yellow/10 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-ivory/20 bg-carbon shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cabeza: imagen y nombre */}
          <div className="relative aspect-[3/2] overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src={dish.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-3xl font-bold text-ivory md:text-4xl"
              >
                {t(`menu.dishes.${dish.id}.name`)}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-1 text-chinese-yellow"
              >
                {formatPriceDisplayLocal(dish.prices, i18n.language)}
              </motion.p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-carbon/80 p-2 text-ivory transition-colors hover:bg-chinese-red hover:text-ivory"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Título de la sección */}
          <div className="border-b border-ivory/10 px-6 py-4">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm font-medium uppercase tracking-widest text-chinese-yellow/90"
            >
              {t('menu.howItsMade')}
            </motion.p>
          </div>

          {/* Pasos animados */}
          <div className="max-h-[40vh] overflow-y-auto px-6 py-6">
            <div className="relative space-y-6 pl-1">
              {/* Línea vertical que conecta los pasos */}
              {steps.length > 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute left-5 top-5 bottom-5 w-px origin-top bg-gradient-to-b from-chinese-red/60 via-chinese-red/30 to-transparent"
                />
              )}
              {steps.map((step, index) => {
                const Icon = stepIcons[index % stepIcons.length]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.12, duration: 0.4 }}
                    className="relative flex gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.12, type: 'spring', stiffness: 400 }}
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chinese-red/20 text-chinese-red ring-4 ring-carbon"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div className="flex-1 pt-0.5">
                      <span className="text-xs font-semibold text-chinese-yellow/80">
                        {index + 1}
                      </span>
                      <p className="mt-1 text-ivory/90">{step}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
