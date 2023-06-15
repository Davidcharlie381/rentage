import image1 from "../public/house_10-696x464.jpg";
import image2 from "../public/house_8-696x482.jpg";
import image3 from "../public/apartment_3-696x475.jpg";
import { AiOutlineArrowUp } from "react-icons/ai";
import { SectionHeading } from "./Heading";
import PlacesCard from "./PlacesCard";

const places = [
  {
    image: image1,
    house: "House 10",
    location: "San Jose, California, United States",
    price: "$5600",
    duration: "Per month",
    rating: "",
  },
  {
    image: image2,
    house: "Apartment 3",
    location: "Portland, Oregon, United States",
    price: "$250",
    duration: "Per week",
    rating: "",
  },
  {
    image: image3,
    house: "Apartment 5",
    location: "Seattle, Washington, United States",
    price: "$40400",
    duration: "Per year",
    rating: "",
  },
];

const PlacesSection = () => {
  return (
    <section className="bg-dullBlue -mt-2 md:mt-0">
      <div className="container">
        <div>
          <SectionHeading text="Popular places" underline />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {places.map((place) => (
            <PlacesCard
              image={place.image}
              house={place.house}
              location={place.location}
              price={place.price}
              duration={place.duration}
              rating={place.rating}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-[90%] md:max-w-7xl mx-auto bg-lightBlue mt-20 p-5 py-16 md:py-24">
        <form className="flex mb-3 mx-auto md:w-2/3">
          <input
            type="text"
            className="p-4 rounded-bl-md rounded-tl-md w-2/3 text-sm md:w-[80%] md:p-6"
            placeholder="Your email address"
          />
          <button className="bg-orange font-extrabold text-white text-sm w-1/3 md:w-[20%] px-2 py-3 md:p-4 rounded-br-md rounded-tr-md">
            SUBSCRIBE
          </button>
        </form>
        <div className="mx-auto grid place-content-center mt-7 md:mt-10 text-3xl md:text-6xl">
          <AiOutlineArrowUp />
        </div>
        <h2 className="text-[1.75rem] leading-9 md:leading-[52px] md:max-w-lg mx-auto md:text-[2.75rem] font-extrabold text-center mt-8 md:mt-10">
          Join our community, and get the best deals
        </h2>
      </div>
    </section>
  );
};

export default PlacesSection;
