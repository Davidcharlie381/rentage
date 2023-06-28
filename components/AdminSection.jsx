import Image from "next/image";
import React from "react";
import { SectionHeading } from "./Heading";
import admin from "../public/theresa_simpson-1.jpg";
import GridContainer from "./GridContainer";

import image1 from "../public/apartment_3-696x475.jpg";
import image2 from "../public/apartment_4-696x465.jpg";
import image3 from "../public/apartment_5-696x413.jpg";
import image4 from "../public/apartment_6-696x425.jpg";
import image5 from "../public/apartment_7-696x464.jpg";
import image6 from "../public/house_8-696x482.jpg";
import image7 from "../public/house_10-696x464.jpg";


import {BsFillTelephoneFill} from "react-icons/bs";
import {FaLink} from "react-icons/fa";

import {MdMail} from "react-icons/md";


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

const AdminSection = () => {
  return (
    <section className="mt-8 md:-mt-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 md:mb-28">
        <div className="col-span-2">
          <p className="text-[#5b5b5b] leading-[30px] text-sm md:text-base font-medium mb-10 md:mb-14">
            Praesent non leo ipsum. Sed tristique quam tellus, et vehicula
            tellus vestibulum ut. Ut erat magna, aliquet sed posuere ac,
            fringilla eget urna. Fusce lectus nisl, sollicitudin ut dictum.
          </p>
          <SectionHeading text="Contact information" underline where="author" />
          <div className="border-2 rounded-2xl grid md:grid-cols-2 p-5 md:p-8 gap-6">
            <div className="space-y-1">
              <h3 className="text-[22px] md:text-2xl font-extrabold flex gap-4 items-center">
                <span><BsFillTelephoneFill /></span> 202-555-0158
              </h3>
              <p className="text-[13px] md:text-sm text-black/50 font-bold">
              Phone number
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-[22px] md:text-2xl font-extrabold flex gap-4 items-center">
              <span><MdMail /></span> test@test.com
              </h3>
              <p className="text-[13px] md:text-sm text-black/50 font-bold">
                Email
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-[22px] md:text-2xl font-extrabold flex gap-4 items-center">
              <span><FaLink /></span> https://example.com
              </h3>
              <p className="text-[13px] md:text-sm text-black/50 font-bold">
                Website
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 w-[335px] relative h-80 rounded-xl overflow-hidden">
          <Image src={admin} fill={true} />
        </div>
      </div>
      <div className="container">
        <SectionHeading
          text="Properties listed by this owner"
          underline
          where="author"
        />
      </div>
      <GridContainer properties={properties} searchPage />
    </section>
  );
};

export default AdminSection;
