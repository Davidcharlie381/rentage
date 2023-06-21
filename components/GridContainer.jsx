import FilterBox from './FilterBox'
import PlacesCard from './PlacesCard'

const GridContainer = ({properties}) => {
  return (
    <section className="container gap-14 mt-14 md:mt-28 md:grid md:grid-cols-4 mb-32 md:mb-48">
        <FilterBox />
        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 col-span-3">
          {properties.map((property) => (
            <PlacesCard
              image={property.image}
              house={property.house}
              location={property.location}
              price={property.price}
              duration={property.duration}
              listing
            />
          ))}
        </div>
      </section>
  )
}

export default GridContainer