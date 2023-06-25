import HeroSection from "@/components/HeroSection";
import React, { useEffect } from "react";
import heroImage from "../../public/for_sale-1.png";
import Layout from "@/layout/layout";

import image1 from "../../public/apartment_3-696x475.jpg";
import image2 from "../../public/apartment_4-696x465.jpg";
import image3 from "../../public/apartment_5-696x413.jpg";
import image4 from "../../public/apartment_6-696x425.jpg";
import image5 from "../../public/apartment_7-696x464.jpg";
import image6 from "../../public/house_8-696x482.jpg";
import image7 from "../../public/house_10-696x464.jpg";

import hero1 from "../../public/for_sale-1.png";
import hero2 from "../../public/temporary_housing.png";
import hero3 from "../../public/rentals.png";

import GridContainer from "@/components/GridContainer";
import { useRouter } from "next/router";

const properties = [
  {
    image: image1,
    house: "House 10",
    location: "San Jose, California, United States",
    price: "$5600",
    duration: "Per month",
    rating: "",
  },
  {
    image: image2,
    house: "Apartment 3",
    location: "Portland, Oregon, United States",
    price: "$250",
    duration: "Per week",
    rating: "",
  },
  {
    image: image3,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "",
  },
  {
    image: image4,
    house: "House 10",
    location: "San Jose, California, United States",
    price: "$5600",
    duration: "Per month",
    rating: "",
  },
  {
    image: image5,
    house: "Apartment 3",
    location: "Portland, Oregon, United States",
    price: "$250",
    duration: "Per week",
    rating: "",
  },
  {
    image: image6,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "",
  },
  {
    image: image7,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "",
  },
];

const pages = [
  { name: "For sale", id: "for-sale", properties, heroImage: hero1 },
  {
    name: "Hotel based",
    id: "hotel-based",
    properties,
    heroImage: hero2,
  },
  { name: "Rentals", id: "rentals", properties, heroImage: hero3 },
];

const ForSale = () => {
  const router = useRouter();

  const { id } = router.query;

  const currentPage = pages.find((page) => page.id === id);

  // useEffect(() => {
  //   console.log(currentPage);
  // }, []);

  return (
    <Layout title={`${currentPage.name} | Transaction type | RENTAGE`}>
      <HeroSection
        text={currentPage.name}
        para="Aliquam consectetur nibh vitae tellus gravida mattis. Nullam aliquet felis nisl, nec iaculis erat bibendum a. Etiam quis euismod augue. Nulla ornare libero sapien. Nullam aliquam massa eu nulla consequat."
        image={currentPage.heroImage}
      />
      <GridContainer properties={currentPage.properties} />
    </Layout>
  );
};

export default ForSale;
