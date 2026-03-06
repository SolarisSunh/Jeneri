import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { LanguageSelector } from '../components/LanguageSelector'

const navKeys = ['menu', 'featured', 'story', 'promos', 'contact'] as const

export function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrollPosition(60)
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-carbon/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-display text-2xl font-bold tracking-wide text-ivory transition-colors hover:text-chinese-yellow md:text-3xl"
        >
          Jeneri
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navKeys.map((key) => (
            <li key={key}>
              <button
                type="button"
                onClick={() => scrollTo(key)}
                className="relative text-sm font-medium text-ivory/90 transition-colors hover:text-chinese-yellow after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-chinese-yellow after:transition-all after:duration-300 hover:after:w-full"
              >
                {t(`nav.${key}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 text-ivory transition-colors hover:bg-ivory/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-ivory/10 bg-carbon md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navKeys.map((key) => (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => scrollTo(key)}
                    className="w-full rounded-lg px-4 py-3 text-left text-ivory hover:bg-chinese-red/20"
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
