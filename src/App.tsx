import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { MenuSection } from './sections/MenuSection'
import { FeaturedSection } from './sections/FeaturedSection'
import { StorySection } from './sections/StorySection'
import { PromosSection } from './sections/PromosSection'
import { Footer } from './sections/Footer'
import { HowItsMadeModal } from './components/HowItsMadeModal'
import type { MenuItem } from './data/menu'

function App() {
  const { i18n } = useTranslation()
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null)
  const [showNoAlozMessage, setShowNoAlozMessage] = useState(false)

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const handleNoAlozClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowNoAlozMessage(true)
    setTimeout(() => setShowNoAlozMessage(false), 2000)
  }

  return (
    <>
      {showNoAlozMessage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon/95 backdrop-blur-sm">
          <p className="font-display text-3xl font-bold text-white md:text-4xl">NO HAY ALOZ PARA TI</p>
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <MenuSection onDishClick={setSelectedDish} />
        <FeaturedSection onDishClick={setSelectedDish} />
        <StorySection />
        <PromosSection />
        <Footer onNoAlozClick={handleNoAlozClick} />
      </main>
      <HowItsMadeModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </>
  )
}

export default App
