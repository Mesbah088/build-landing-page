import Header from '@/components/header'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Features from '@/components/features'
import Demos from '@/components/demos'
import Pricing from '@/components/pricing'
import Brands from '@/components/brands'
import CTABanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Demos />
        <Pricing />
        <Brands />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
