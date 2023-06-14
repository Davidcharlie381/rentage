import HeroSection from '@/components/HeroSection'
import Layout from '@/layout/layout'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <Layout>
        <HeroSection />
      </Layout>
      
    
  )
}
