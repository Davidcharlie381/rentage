import React from "react";
import Image from "next/image";
import { BiLocationPlus, BiStar } from "react-icons/bi";

const PlacesCard = ({ image, house, location, price, duration, rating }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative h-60 w-full">
        <Image src={image} className="absolute" layout="fill" />
      </div>

      <div className="px-5 pt-7">
        <h3 className="text-[1.75rem] leading-9 font-extrabold mb-2">
          {house}
        </h3>
        <div className="flex gap-2">
          <BiLocationPlus />
          <p className="text-[0.81rem] md:text-sm font-medium text-black/50 mb-4">
            {location}
          </p>
        </div>
      </div>
      <div className="border-b w-full" />
      <div className="flex items-center px-5 p-2 justify-between">
        <div className="flex items-center gap-2">
          <h5 className="font-extrabold text-[1.2rem]">{price}</h5>
          <span className="text-[0.81rem] font-medium md:text-sm text-black/50">
            {duration}
          </span>
        </div>
        <div className="flex gap-1">
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
