import HeroSection from "@/components/HeroSection";
import PlacesSection from "@/components/PlacesSection";
import ServicesSection from "@/components/ServicesSection";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PlacesSection />
    </Layout>
  );
}
