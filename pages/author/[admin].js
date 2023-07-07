import AdminSection from "@/components/AdminSection";
import PropertiesHero from "@/components/PropertiesHero";
import Layout from "@/layout/layout";

import { BASE_URL } from "@/config";

export async function getServerSideProps(context) {
  const { admin } = context.params;

  const res = await fetch(`${BASE_URL}/author/${admin}`);
  const currentAdmin = await res.json();
  return {
    props: {
      currentAdmin,
    },
  };
}

const Admin = ({ currentAdmin }) => {
  const properties = currentAdmin.properties;

  return (
    <Layout title={currentAdmin.name + " | RENTAGE"}>
      <PropertiesHero author text={currentAdmin.name} />
      <AdminSection author={currentAdmin} properties={properties} />
    </Layout>
  );
};

export default Admin;
