import SearchHero from "@/components/SearchHero";
import Layout from "@/layout/layout";
import GridContainer from "@/components/GridContainer";

import image1 from "../public/apartment_3-696x475.jpg";
import image2 from "../public/apartment_4-696x465.jpg";
import image3 from "../public/apartment_5-696x413.jpg";
import image4 from "../public/apartment_6-696x425.jpg";
import image5 from "../public/apartment_7-696x464.jpg";
import image6 from "../public/house_8-696x482.jpg";
import image7 from "../public/house_10-696x464.jpg";
import { useRouter } from "next/router";

const properties = [
  {
    image: image1,
    house: "House 10",
    location: "San Jose, California, United States",
    price: "$5600",
    duration: "Per month",
    rating: "",
    link: "/properties/house-10",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
  {
    image: image2,
    house: "Apartment 3",
    location: "Portland, Oregon, United States",
    price: "$250",
    duration: "Per week",
    rating: "",
    link: "/properties/apartment-3",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
  {
    image: image3,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "",
    link: "/properties/apartment-5",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
  {
    image: image4,
    house: "House 10",
    location: "San Jose, California, United States",
    price: "$5600",
    duration: "Per month",
    rating: "",
    link: "/properties/house-10",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
  {
    image: image5,
    house: "Apartment 3",
    location: "Portland, Oregon, United States",
    price: "$250",
    duration: "Per week",
    rating: "",
    link: "/properties/apartment-3",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
  {
    image: image6,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "",
    link: "/properties/apartment-5",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
  {
    image: image7,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "/properties/apartment-5",
    link: "",
    noOfBeds: 4,
    noOfBaths: 2,
    livingArea: "125 m2",
  },
];

const Search = () => {
  const router = useRouter();

  const query = router.query.q;

  return (
    <Layout title={`${query} | Search Results | RENTAGE`}>
      <SearchHero text="Search:" />
      <GridContainer properties={properties} searchPage />
    </Layout>
  );
};

export default Search;
