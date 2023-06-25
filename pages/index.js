import HeroSection from "@/components/HeroSection";
import PlacesSection from "@/components/PlacesSection";
import ServicesSection from "@/components/ServicesSection";
import Layout from "@/layout/layout";


import heroImage from "../public/home_hero.png";

export default function Home() {
  return (
    <Layout title="RENTAGE | We're here to help you find your new home">
      <HeroSection text="We're here to help you find your new home" image={heroImage} home />
      <ServicesSection />
      <PlacesSection />
    </Layout>
  );
}
