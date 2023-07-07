import HeroSection from "@/components/HeroSection";
import React, { useEffect } from "react";
import Layout from "@/layout/layout";

import hero1 from "../../public/for_sale-1.png";
import hero2 from "../../public/temporary_housing.png";
import hero3 from "../../public/rentals.png";

import GridContainer from "@/components/GridContainer";
import { useRouter } from "next/router";

import { properties } from "@/data";

const pages = [
  {
    name: "For sale",
    id: "for-sale",
    properties: properties.filter(
      (property) => property.transaction === "for-sale"
    ),
    heroImage: hero1,
  },
  {
    name: "Hotel based",
    id: "hotel-based",
    properties: properties.filter(
      (property) => property.transaction === "hotel-based"
    ),
    heroImage: hero2,
  },
  {
    name: "Rentals",
    id: "rentals",
    properties: properties.filter(
      (property) => property.transaction === "rentals"
    ),
    heroImage: hero3,
  },
];

const ForSale = () => {
  const router = useRouter();
  const { id } = router.query;
  const currentPage = pages.find((page) => page.id === id);

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
