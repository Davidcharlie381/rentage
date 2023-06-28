import React from "react";
import { FirstHeading } from "./Heading";

import { MdLocationOn } from "react-icons/md";

import { BiStar, BiShapeSquare } from "react-icons/bi";
import {
  FaFacebookF,
  FaPinterest,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const PropertiesHero = ({ text, author, house }) => {
  return (
    <section className="bg-lightBlue pt-14 md:pt-10">
      <div className="container pb-10 md:py-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-7">
          <div className="flex-1 max-w-3xl">
            <FirstHeading text={text} />
            {(author || house) && (
              <div className="flex flex-col md:flex-row justify-between -mt-7">
                {house && (
                  <div className="flex gap-3 items-center mb-3">
                    <span className="text-[22px] text-[#5b5b5b]">
                      <MdLocationOn />
                    </span>
                    <p className="text-sm md:text-[15px] font-medium">
                      Navaro Way 425, San Jose, California, United States
                    </p>
                  </div>
                )}
                {author && (
                  <div className="flex gap-3 items-center mb-3 text-[#5b5b5b] font-medium text-sm md:text-[15px]">
                    Agency:<span className="text-black hover:text-orange">California</span>
                  </div>
                )}

                {!author && (
                  <div className="flex gap-3">
                    <div className="flex gap-1 text-orange">
                      <BiStar />
                      <BiStar />
                      <BiStar />
                      <BiStar />
                      <BiStar />
                    </div>
                    <div className="text-[12px] md:text-[13px] text-black/50 font-bold">
                      4.5 out of 5
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex gap-2 text-white">
            <div className="bg-black p-3">
              <FaFacebookF />
            </div>
            <div className="bg-black p-3">
              <FaTwitter />
            </div>
            <div className="bg-black p-3">
              <FaWhatsapp />
            </div>
            <div className="bg-black p-3">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      {(author || house) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`hidden md:block md:-mt-[40px]`}
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      )}
    </section>
  );
};

export default PropertiesHero;
