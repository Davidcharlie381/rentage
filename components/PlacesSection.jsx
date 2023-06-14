import image1 from "../public/house_10-696x464.jpg";
import image2 from "../public/house_8-696x482.jpg";
import image3 from "../public/apartment_3-696x475.jpg";
import Image from "next/image";
import { BiLocationPlus, BiStar } from "react-icons/bi";

const PlacesSection = () => {
  return (
    <section className="bg-dullBlue -mt-2 md:mt-0">
      <div className="container">
        <div>
          <h2 className="text-[1.75rem] leading-9 md:leading-[52px] md:max-w-xl mx-auto md:text-[2.75rem] mb-4 md:mb-6 font-extrabold text-center ">
            Popular places
          </h2>
          <div className="bg-orange h-[3px] mb-6 md:mb-9 w-[100px] mx-auto" />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="relative h-60 w-full">
              <Image src={image1} className="absolute" layout="fill" />
            </div>

            <div className="px-5 pt-7">
              <h3 className="text-[1.75rem] leading-9 font-extrabold mb-2">
                House 10
              </h3>
              <div className="flex gap-2">
                <BiLocationPlus />
                <p className="text-[0.81rem] md:text-sm text-black/50 mb-4">
                  San Jose, California, United States
                </p>
              </div>
            </div>
            <div className="border-b w-full" />
            <div className="flex items-center px-5 p-2 justify-between">
              <div className="flex items-center gap-2">
                <h5 className="font-extrabold text-[1.2rem]">$5600</h5>
                <span className="text-[0.81rem] md:text-sm text-black/50">
                  Per month
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
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="relative h-60 w-full">
              <Image src={image2} className="absolute" layout="fill" />
            </div>
            <div className="px-5 pt-7">
              <h3 className="text-[1.75rem] leading-9 font-extrabold mb-2">
                House 10
              </h3>
              <div className=" flex gap-2">
                <BiLocationPlus />
                <p className="text-[0.81rem] md:text-sm text-black/50 mb-4">
                  San Jose, California, United States
                </p>
              </div>
            </div>
            <div className="border-b w-full" />
            <div className="flex items-center px-5 p-2 justify-between">
              <div className="flex items-center gap-2">
                <h5 className="font-extrabold text-[1.2rem]">$5600</h5>
                <span className="text-[0.81rem] md:text-sm text-black/50">
                  Per month
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
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="relative h-60 w-full">
              <Image src={image3} className="absolute" layout="fill" />
            </div>
            <div className="px-5 pt-7">
              <h3 className="text-[1.75rem] leading-9 font-extrabold mb-2">
                House 10
              </h3>
              <div className=" flex gap-2">
                <BiLocationPlus />
                <p className="text-[0.81rem] md:text-sm text-black/50 mb-4">
                  San Jose, California, United States
                </p>
              </div>
            </div>
            <div className="border-b w-full" />
            <div className="flex items-center px-5 p-2 justify-between">
              <div className="flex items-center gap-2">
                <h5 className="font-extrabold text-[1.2rem]">$5600</h5>
                <span className="text-[0.81rem] md:text-sm text-black/50">
                  Per month
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
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;
