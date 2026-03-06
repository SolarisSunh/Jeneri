import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { languages, type LocaleCode } from '../i18n'

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-ivory/20 bg-carbon/80 px-3 py-2 text-sm text-ivory transition-all hover:border-chinese-red/50 hover:bg-chinese-red/10 hover:text-chinese-yellow"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{current.flag}</span>
        <span className="max-w-[4rem] truncate opacity-90">{current.name}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[10rem] rounded-xl border border-ivory/10 bg-carbon shadow-xl"
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(lang.code as LocaleCode)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition-colors hover:bg-chinese-red/20 ${
                    i18n.language === lang.code ? 'bg-chinese-red/15 text-chinese-yellow' : 'text-ivory'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
