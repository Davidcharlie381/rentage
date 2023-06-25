import AddPropertyGrid from "@/components/AddPropertyGrid";
import PropertiesHero from "@/components/PropertiesHero";
import Layout from "@/layout/layout";

const AddProperty = () => {
  return (
    <Layout title="Add property | RENTAGE">
      <PropertiesHero text="Add property" />
      <AddPropertyGrid />
    </Layout>
  );
};

export default AddProperty;
