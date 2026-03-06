import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown, Flame } from 'lucide-react'
import { HeroCanvas } from '../components/HeroCanvas'

export function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <HeroCanvas />
      <div className="noise-overlay absolute inset-0 bg-gradient-to-b from-carbon/40 via-transparent to-carbon" />
      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[15%] top-[25%] h-24 w-24 rounded-full border border-chinese-red/20 opacity-60" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute right-[20%] top-[40%] h-16 w-16 rounded-full bg-chinese-yellow/5" style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
        <div className="absolute bottom-[30%] left-[10%] h-px w-32 rotate-[-20deg] bg-gradient-to-r from-transparent via-chinese-gold/30 to-transparent" style={{ animation: 'float 7s ease-in-out infinite 0.5s' }} />
        <div className="absolute right-[12%] bottom-[25%] h-20 w-px bg-gradient-to-t from-transparent via-chinese-red/20 to-transparent" style={{ animation: 'float 5s ease-in-out infinite 2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-display text-chinese-yellow/90 mb-2 text-sm uppercase tracking-[0.3em] md:text-base"
        >
          {t('hero.slogan')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-6xl font-bold tracking-tight text-ivory drop-shadow-lg md:text-8xl lg:text-9xl"
        >
          Jeneri
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={() => scrollTo('menu')}
          className="group relative overflow-hidden rounded-full bg-chinese-red px-8 py-4 font-semibold text-ivory shadow-lg transition-all hover:bg-chinese-red-dark hover:shadow-chinese-red/30"
        >
          <span className="relative z-10">{t('hero.viewMenu')}</span>
        </button>
        <button
          type="button"
          onClick={() => scrollTo('featured')}
          className="flex items-center gap-2 rounded-full border-2 border-chinese-yellow/80 bg-chinese-yellow/10 px-8 py-4 font-semibold text-chinese-yellow transition-all hover:bg-chinese-yellow/20"
        >
          <Flame className="h-5 w-5" />
          {t('hero.featuredDish')}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() => scrollTo('menu')}
          className="flex flex-col items-center gap-1 text-ivory/60 transition-colors hover:text-chinese-yellow"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 animate-float" />
        </button>
      </motion.div>
    </section>
  )
}
