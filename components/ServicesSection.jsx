import Image from "next/image";

import image1 from "../public/for_sale-1.png";
import image2 from "../public/temporary_housing.png";
import image3 from "../public/rentals.png";
import { SectionHeading } from "./Heading";
import ServicesCard from "./ServicesCard";

const services = [
  {title: "For sale", image: image1, link: "transaction/for-sale", lineGrad: "from-[#C9E8F2] to-[#fff]"},
  {title: "Hotel based", image: image2, link: "transaction/hotel-based", lineGrad: "from-[#8BAFB9] to-[#91A1A5]"},
  {title: "Rentals", image: image3, link: "transaction/rentals", lineGrad: "from-[#FFB7C9] to-[#fff]"}
]

const ServicesSection = () => {
  return (
    <section className="bg-white pt-1">
      <div className="container pb-14">
        <SectionHeading
          text="Professional services, delivered with care"
          underline
          para="Pellentesque quis malesuada justo, et dictum purus. Fusce quis
          interdum arcu. Pellentesque euismod laoreet iaculis. Pellentesque sit
          amet enim eget est dictum vehicula."
        />
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 mt-10 md:mt-24">
          {services.map((service) => <ServicesCard title={service.title} image={service.image} link={service.link} lineGrad={service.lineGrad} key={service.link}/>)}
          
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-76"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#E7F0F1"
          fillOpacity="1"
          d="M0,288L120,245.3C240,203,480,117,720,90.7C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default ServicesSection;
