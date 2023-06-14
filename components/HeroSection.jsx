import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import heroImage from "../public/home_hero.png";

const HeroSection = () => {
  return (
    <section className="bg-lightBlue pt-14 md:pt-20">
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
        <div className="mt-10 ml-20 md:-mr-40 w-2/3">
          <Image
            src={heroImage}
            // width={370}
            className=" md:w-[570px] md:h-[570px] "
            height={500}
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="-mt-[68px] md:-mt-[250px]" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L80,256C160,256,320,256,480,256C640,256,800,256,960,229.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </section>
  );
};

export default HeroSection;
