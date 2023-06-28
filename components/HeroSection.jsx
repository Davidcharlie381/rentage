import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { FirstHeading } from "./Heading";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HeroSection = ({ image, home, text, para }) => {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchText}`);

    setSearchText("");
  };

  return (
    <section className="bg-lightBlue pt-14 md:pt-10">
      <div className="container md:flex flex-col md:flex-row justify-center items-center">
        <div className={`md:w-1/2 md:max-w-lg ${!home && "md:-mt-10"}`}>
          <FirstHeading text={text} />
          {home && (
            <form className="flex mb-3 w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                className="p-3 rounded-bl-md rounded-tl-md w-[90%] md:w-[90%] md:p-5"
                placeholder="Search for a property..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="bg-black hover:bg-orange transition-smooth text-white p-3 md:p-4 text-2xl rounded-br-md rounded-tr-md">
                <BiSearch />
              </button>
            </form>
          )}
          {!home && (
            <p className="text-[13px] md:text-[15px] font-medium -mt-5 mb-9">
              {para}
            </p>
          )}
          {home && (
            <p className="text-[0.81rem] font-medium">
              Discover anything from rentals, temporary housings or properties
              for sale.
            </p>
          )}
          {!home && (
            <Link href="">
              <h5 className="mt-4 text-orange font-bold text-[13px] leading-[20px] tracking-[0.25em]">
                EXPLORE
              </h5>
            </Link>
          )}
        </div>
        <div
          className={`mt-10 md:ml-20  w-full md:w-1/2 ${
            !home ? "h-52 overflow-hidden md:h-fit" : ""
          }`}
        >
          <Image
            src={image}
            // width={370}
            className="w-full h-[270px] md:w-[570px] md:h-[570px] "
            height={500}
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`-mt-[35px] ${
          home ? "-mt-[100px] md:-mt-[130px]" : "-mt-[100px] md:-mt-[220px]"
        }`}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
