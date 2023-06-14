import Image from "next/image";

import image1 from "../public/for_sale-1.png";
import image2 from "../public/temporary_housing.png";
import image3 from "../public/rentals.png";

const ServicesSection = () => {
  return (
    <section className="bg-white pt-14">
      <div className="container pb-14">
        <h2 className="text-[1.75rem] leading-9 md:leading-[52px] md:max-w-xl mx-auto md:text-[2.75rem] mb-4 md:mb-6 font-extrabold text-center ">
          Professional services, delivered with care
        </h2>
        <div className="bg-orange h-[3px] mb-6 md:mb-9 w-[100px] mx-auto" />
        <p className="text-center text-sm md:max-w-2xl mx-auto font-medium">
          Pellentesque quis malesuada justo, et dictum purus. Fusce quis
          interdum arcu. Pellentesque euismod laoreet iaculis. Pellentesque sit
          amet enim eget est dictum vehicula.
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 mt-10 md:mt-24">
          <div className="relative bg-gradient-to-b from-[#C9E8F2] to-[#fff] flex justify-center px-12 pt-36 md:pt-52 rounded-lg">
            <div className="absolute text-center inset-0">
              <h3 className="text-[1.5rem] md:text-[1.75rem] mt-9 mb-2 font-extrabold">
                For sale
              </h3>
              <div className="bg-black h-[1px] mx-auto w-16" />
              <h5 className="mt-4 text-orange font-medium">EXPLORE</h5>
            </div>

            <Image src={image1} />
          </div>
          <div className="relative bg-gradient-to-b from-[#8BAFB9] to-[#91A1A5] flex justify-center px-12 pt-36 md:pt-52 rounded-lg">
            <div className="absolute text-center inset-0">
              <h3 className="text-[1.5rem] md:text-[1.75rem] mt-9 mb-2 font-extrabold">
                For sale
              </h3>
              <div className="bg-black h-[1px] mx-auto w-16" />
              <h5 className="mt-4 text-orange font-medium">EXPLORE</h5>
            </div>
            <Image src={image2} />
          </div>
          <div className="relative bg-gradient-to-b from-[#FFB7C9] to-[#fff] flex justify-center px-12 pt-36 md:pt-52 rounded-lg">
            <div className="absolute text-center inset-0">
              <h3 className="text-[1.5rem] md:text-[1.75rem] mt-9 mb-2 font-extrabold">
                For sale
              </h3>
              <div className="bg-black h-[1px] mx-auto w-16" />
              <h5 className="mt-4 text-orange font-medium">EXPLORE</h5>
            </div>
            <Image src={image3} />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-76" viewBox="0 0 1440 320"><path fill="#E7F0F1" fill-opacity="1" d="M0,288L120,245.3C240,203,480,117,720,90.7C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </section>
  );
};

export default ServicesSection;
