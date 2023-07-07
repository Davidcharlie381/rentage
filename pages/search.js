import SearchHero from "@/components/SearchHero";
import Layout from "@/layout/layout";
import GridContainer from "@/components/GridContainer";
import { useRouter } from "next/router";
import { BASE_URL } from "@/config";

export async function getServerSideProps(context) {
  const res = await fetch(`${BASE_URL}/search?q=${context.query.q}`);

  const searchList = await res.json();

  return {
    props: {
      searchList,
    },
  };
}

const Search = ({ searchList }) => {
  const router = useRouter();

  const query = router.query.q;

  return (
    <Layout title={`${query} | Search Results | RENTAGE`}>
      <SearchHero text="Search:" />
      <GridContainer properties={searchList} searchPage />
    </Layout>
  );
};

export default Search;
