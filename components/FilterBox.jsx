const FilterBox = ({page}) => {
  return (
    <div className="hidden md:block">
      <h3 className="text-[1.56rem] leading-9 font-extrabold mb-6">Filters</h3>
      {page === "property" && (
        <div className="border-2 rounded-2xl p-4 mb-4">
          <h5 className="text-[15px] font-bold mb-2">Transaction types</h5>
          <div className="flex flex-wrap gap-3">
            <span className="bg-dullBlue hover:bg-orange hover:text-white transition-all duration-300 text-[13px] font-medium p-[6px] px-4 rounded-md">
              For sale
            </span>
            <span className="bg-dullBlue hover:bg-orange hover:text-white transition-all duration-300 text-[13px] font-medium p-[6px] px-4 rounded-md">
              Hotel based
            </span>
            <span className="bg-dullBlue hover:bg-orange hover:text-white transition-all duration-300 text-[13px] font-medium p-[6px] px-4 rounded-md">
              Rentals
            </span>
          </div>
        </div>
      )}
      <div className="border-2 rounded-2xl p-4 mb-4">
        <h5 className="text-[15px] font-bold mb-2">Property types</h5>
        <div className="flex flex-wrap gap-3">
          <span className="bg-dullBlue hover:bg-orange hover:text-white transition-all duration-300 text-[13px] font-medium p-[6px] px-4 rounded-md">
            Apartments
          </span>
          <span className="bg-dullBlue hover:bg-orange hover:text-white transition-all duration-300 text-[13px] font-medium p-[6px] px-4 rounded-md">
            Houses
          </span>
        </div>
      </div>
      <div className=" border-2 rounded-2xl p-4 ">
        <h5 className="text-[15px] font-bold mb-2">Locations</h5>
        <select className="w-full bg-white border-2 rounded-md p-1 text-[13px] font-medium">
          <option>--Select location--</option>
          <option>Location</option>
          <option>Location</option>
          <option>Location</option>
          <option>Location</option>
          <option>Location</option>
          <option>Location</option>
          <option>Location</option>
          <option>Location</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBox;
