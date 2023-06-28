import Image from "next/image";
import Link from "next/link";

const ServicesCard = ({ title, image, link, lineGrad }) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${lineGrad} flex justify-center px-12 pt-36 md:pt-52 rounded-lg`}
    >
      <div className="absolute text-center inset-0">
        <h3 className="text-[1.5rem] md:text-[1.75rem] mt-9 mb-2 font-extrabold">
          {title}
        </h3>
        <div className="bg-black h-[1px] mx-auto w-16" />
        <Link href={link}>
          <h5 className="mt-4 text-orange hover:text-black transition-smooth font-bold text-[13px] leading-[20px] tracking-[0.25em]">EXPLORE</h5>
        </Link>
      </div>

      <Image src={image} />
    </div>
  );
};

export default ServicesCard;
