import FooterSection from '@/components/FooterSection'
import HeroSection from '@/components/HeroSection'
import PlacesSection from '@/components/PlacesSection'
import ServicesSection from '@/components/ServicesSection'
import Layout from '@/layout/layout'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <Layout>
        <HeroSection />
        <ServicesSection />
        <PlacesSection />
        <FooterSection />
      </Layout>
      
    
  )
}
