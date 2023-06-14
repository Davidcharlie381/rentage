import image1 from "../public/house_10-696x464.jpg";
import image2 from "../public/house_8-696x482.jpg";
import image3 from "../public/apartment_3-696x475.jpg";

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
    </section>
  );
};

export default PlacesSection;
