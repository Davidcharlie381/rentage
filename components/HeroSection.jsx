import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import heroImage from "../public/home_hero.png";

const HeroSection = () => {
  return (
    <section className="bg-lightBlue pt-14 md:pt-10">
      <div className="container md:flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2">
          <h1 className="font-extrabold text-[40px] md:text-[55px] md:leading-[72px] md:max-w-lg leading-[48px] tracking-[0.005em] mb-12">
            We're here to help you find your new home
          </h1>
          <form className="flex mb-3">
            <input
              type="text"
              className="p-3 rounded-bl-md rounded-tl-md w-[90%] md:w-[80%] md:p-5"
              placeholder="Search for a property..."
            />
            <button className="bg-black text-white p-3 md:p-4 text-2xl rounded-br-md rounded-tr-md">
              <BiSearch />
            </button>
          </form>
          <p className="text-[0.81rem] font-medium">
            Discover anything from rentals, temporary housings or properties for
            sale.
          </p>
        </div>
        <div className="mt-10 ml-20  w-2/3">
          <Image
            src={heroImage}
            // width={370}
            className=" md:w-[570px] md:h-[570px] "
            height={500}
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-[65px] md:-mt-[130px]"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
