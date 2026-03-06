import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export function StorySection() {
  const { t } = useTranslation()

  return (
    <section id="story" className="relative scroll-mt-24 bg-carbon px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chinese-red/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-display text-chinese-yellow/90 mb-2 text-sm uppercase tracking-widest">
            {t('story.subtitle')}
          </p>
          <h2 className="font-display text-4xl font-bold text-ivory md:text-5xl">
            {t('story.title')}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-14 space-y-8 text-center font-body text-lg leading-relaxed text-ivory/90 md:text-xl"
        >
          <p>{t('story.paragraph1')}</p>
          {t('story.paragraph2') && <p>{t('story.paragraph2')}</p>}
          {t('story.paragraph3') && <p className="font-display text-xl text-chinese-yellow/95">{t('story.paragraph3')}</p>}
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-chinese-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
