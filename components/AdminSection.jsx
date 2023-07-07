import Image from "next/image";
import React from "react";
import { SectionHeading } from "./Heading";
import GridContainer from "./GridContainer";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

import { MdMail } from "react-icons/md";


const AdminSection = ({ author, properties }) => {
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
                <span>
                  <BsFillTelephoneFill />
                </span>{" "}
                {author.phone}
              </h3>
              <p className="text-[13px] md:text-sm text-black/50 font-bold">
                Phone number
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-[22px] md:text-2xl font-extrabold flex gap-4 items-center">
                <span>
                  <MdMail />
                </span>{" "}
                {author.email}
              </h3>
              <p className="text-[13px] md:text-sm text-black/50 font-bold">
                Email
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-[22px] md:text-2xl font-extrabold flex gap-4 items-center">
                <span>
                  <FaLink />
                </span>{" "}
                {author.website}
              </h3>
              <p className="text-[13px] md:text-sm text-black/50 font-bold">
                Website
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 w-[335px] relative h-80 rounded-xl overflow-hidden">
          <Image src={author.avatar} fill={true} />
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
