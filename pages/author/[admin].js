import AdminSection from "@/components/AdminSection";
import PropertiesHero from "@/components/PropertiesHero";
import Layout from "@/layout/layout";

const House = () => {


    return (
        <Layout title="Theresa Simpson">
            <PropertiesHero author text="Theresa Simpson" />
            <AdminSection />
        </Layout>
    )
}

export default House;