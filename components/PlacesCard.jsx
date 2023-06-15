import React from "react";
import Image from "next/image";
import { BiStar, BiShapeSquare } from "react-icons/bi";
import { FaBed, FaBath, FaLocationDot } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const PlacesCard = ({
  image,
  house,
  location,
  price,
  duration,
  rating,
  listing,
}) => {
  return (
    <div className="bg-white overflow-hidden rounded-xl">
      <div className="relative h-60 w-full rounded-t-xl overflow-hidden">
        <Image src={image} className="absolute" layout="fill" />
      </div>

      <div className={`${listing && "border-x-2"} px-6 pt-7 pb-5`}>
        <h3 className="text-[1.75rem] leading-9 font-extrabold mb-2">
          {house}
        </h3>
        <div className="flex gap-2 text-black/50">
          <span className="text-[22px]">
            <MdLocationOn />
          </span>

          <p className="text-[0.81rem] md:text-sm font-medium text-black/50 mb-4">
            {location}
          </p>
        </div>
      </div>
      <div className={`border-b-2 w-full`} />
      {listing && (
        <>
          <div className="border-x-2 flex justify-between items-center px-6 py-4">
            <div className="flex flex-col gap-1">
              <span className="text-2xl">
                <FaBed />
              </span>

              <p className="text-[13px] font-medium text-black/50">Bedrooms</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl">
                <FaBath />
              </span>

              <p className="text-[13px] font-medium text-black/50">Bathrooms</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl">
                <BiShapeSquare />
              </span>

              <p className="text-[13px] font-medium text-black/50">
                Living area
              </p>
            </div>
          </div>
          <div className={`border-b-2 w-full`} />
        </>
      )}
      <div
        className={`${
          listing && "border-x-2 border-b-2"
        } rounded-b-xl flex items-center px-6 p-3 justify-between`}
      >
        <div className="flex items-center gap-2">
          <h5 className="font-bold text-[1.0625rem]">{price}</h5>
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
