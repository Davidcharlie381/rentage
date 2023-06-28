import FilterBox from "./FilterBox";
import PlacesCard from "./PlacesCard";

const GridContainer = ({ properties, searchPage, page }) => {
  return (
    <section className="container gap-14 mt-14 md:mt-28 md:grid md:grid-cols-4 mb-32 md:mb-48">
      {!searchPage && <FilterBox page={page} />}
      <div
        className={`grid gap-10 md:gap-14 grid-cols-1 ${
          searchPage ? "md:grid-cols-3 col-span-4" : "md:grid-cols-2 col-span-3"
        } `}
      >
        {properties.map((property) => (
          <PlacesCard
            image={property.image}
            house={property.house}
            location={property.location}
            price={property.price}
            duration={property.duration}
            link={property.link}
            listing
            noOfBaths={property.noOfBaths}
            noOfBeds={property.noOfBeds}
            livingArea={property.livingArea}
          />
        ))}
      </div>
    </section>
  );
};

export default GridContainer;
