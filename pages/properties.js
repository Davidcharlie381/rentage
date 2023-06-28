import PlacesCard from "@/components/PlacesCard";
import PropertiesHero from "@/components/PropertiesHero";
import Layout from "@/layout/layout";

import image1 from "../public/apartment_3-696x475.jpg";
import image2 from "../public/apartment_4-696x465.jpg";
import image3 from "../public/apartment_5-696x413.jpg";
import image4 from "../public/apartment_6-696x425.jpg";
import image5 from "../public/apartment_7-696x464.jpg";
import image6 from "../public/house_8-696x482.jpg";
import image7 from "../public/house_10-696x464.jpg";
import GridContainer from "@/components/GridContainer";

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

const Properties = () => {
  return (
    <Layout title="Properties | RENTAGE">
      <PropertiesHero text="Browse properties" />
      <GridContainer properties={properties} page="property" />
    </Layout>
  );
};

export default Properties;
