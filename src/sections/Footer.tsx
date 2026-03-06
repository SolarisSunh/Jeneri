import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Instagram, Facebook, MapPin, Mail } from 'lucide-react'

interface FooterProps {
  onNoAlozClick?: () => void
}

export function Footer({ onNoAlozClick }: FooterProps) {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNoAlozLink = () => {
    onNoAlozClick?.()
  }

  return (
    <footer id="contact" className="relative scroll-mt-24 border-t border-ivory/10 bg-carbon px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-3xl font-bold text-ivory">Jeneri</h3>
            <p className="mt-4 max-w-md text-ivory/80">{t('footer.tagline')}</p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full p-2 text-ivory/70 transition-colors hover:bg-chinese-red/20 hover:text-chinese-yellow"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-ivory/70 transition-colors hover:bg-chinese-red/20 hover:text-chinese-yellow"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold uppercase tracking-wider text-chinese-yellow/90">
              {t('footer.links.menu')}
            </h4>
            <ul className="mt-4 space-y-2">
              {['menu', 'reservations', 'contact', 'careers'].map((key) => (
                <li key={key}>
                  {key === 'menu' ? (
                    <button
                      type="button"
                      onClick={() => scrollTo('menu')}
                      className="text-ivory/80 transition-colors hover:text-chinese-yellow"
                    >
                      {t(`footer.links.${key}`)}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNoAlozLink}
                      className="text-ivory/80 transition-colors hover:text-chinese-yellow"
                    >
                      {t(`footer.links.${key}`)}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold uppercase tracking-wider text-chinese-yellow/90">
              {t('footer.links.contact')}
            </h4>
            <div className="mt-4 space-y-3 text-ivory/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-chinese-red" />
                Pues Aqui
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-chinese-red" />
                aloz@jeneri.com
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 border-t border-ivory/10 pt-8 text-center text-sm text-ivory/60"
        >
          <p>© {new Date().getFullYear()} Jeneri. {t('footer.rights')}</p>
        </motion.div>
      </div>
    </footer>
  )
}
