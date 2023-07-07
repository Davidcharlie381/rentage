import PropertiesHero from "@/components/PropertiesHero";
import Layout from "@/layout/layout";
import GridContainer from "@/components/GridContainer";

import { BASE_URL } from "@/config";

const Properties = ({ properties }) => {
  return (
    <Layout title="Properties | RENTAGE">
      <PropertiesHero text="Browse properties" />
      <GridContainer properties={properties} page="property" />
    </Layout>
  );
};

export async function getServerSideProps() {
  
  const res = await fetch(`${BASE_URL}/properties`)
  const properties = await res.json()
  return {
    props: {
      properties,
    },
  };
}

export default Properties;
