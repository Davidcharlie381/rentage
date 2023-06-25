import React from "react";

const AddPropertyGrid = () => {
  return (
    <>
      <form action="">
        <section className="container space-y-4 gap-14 mt-14 md:mt-28 md:grid md:grid-cols-3 mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Basic info</h1>
            <div className="bg-black h-[.2px] md:h-[.5px] w-16 mt-2" />
          </div>

          <div className="col-span-2">
            <div className="space-y-5 md:space-y-7">
              <div>
                <div className="space-y-1">
                  <label
                    htmlFor="title"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Property types <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Transaction types <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Price <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Price per <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-1 flex-1">
                  <label
                    htmlFor="feat"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Featured image <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    id="feat"
                    className="w-full border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-1 flex-1">
                  <label
                    htmlFor="feat"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    type="file"
                    id="feat"
                    className="w-full border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container space-y-4 gap-14 mt-10 md:mt-16 md:grid md:grid-cols-3 mb-4 md:mb-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Detailed info
            </h1>
            <div className="bg-black h-[.2px] md:h-[.5px] w-16 mt-2" />
          </div>

          <div className="col-span-2">
            <div className="space-y-5 md:space-y-7">
              <div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Living area surface
                    </label>
                    <input
                      type="number"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Number of bedrooms
                    </label>
                    <input
                      type="number"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Number of bathrooms
                    </label>
                    <input
                      type="number"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <label
                      htmlFor="title"
                      className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                    >
                      Number of parking spots
                    </label>
                    <input
                      type="number"
                      id="email"
                      className="w-full border-2 rounded-md p-2 px-3"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1 flex-1">
                <div className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]">
                  Balcony
                </div>
                <div className="flex gap-5 md:gap-24">
                  <div className="space-x-2">
                    <input type="radio" id="no" name="balcony" />{" "}
                    <label htmlFor="no">No</label>
                  </div>
                  <div className="space-x-2">
                    <input type="radio" id="yes" name="balcony" />{" "}
                    <label htmlFor="yes">Yes</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container space-y-4 gap-14 mt-10 md:mt-16 md:grid md:grid-cols-3 mb-32 md:mb-48">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Gallery</h1>
            <div className="bg-black h-[.2px] md:h-[.5px] w-16 mt-2" />
          </div>

          <div className="col-span-2">
            <div className=" grid grid-cols-2 gap-y-10 gap-x-6">
              <div className="">
                <div className="space-y-1">
                  <label
                    htmlFor="title"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Gallery image
                  </label>
                  <input
                    type="file"
                    id="email"
                    className="w-full h-36 border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
              <div className="">
                <div className="space-y-1">
                  <label
                    htmlFor="title"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Gallery image
                  </label>
                  <input
                    type="file"
                    id="email"
                    className="w-full h-36 border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
              <div className="">
                <div className="space-y-1">
                  <label
                    htmlFor="title"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Gallery image
                  </label>
                  <input
                    type="file"
                    id="email"
                    className="w-full h-36 border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
              <div className="">
                <div className="space-y-1">
                  <label
                    htmlFor="title"
                    className="block text-[12px] md:text-[13px] font-semibold text-[#5b5b5b]"
                  >
                    Gallery image
                  </label>
                  <input
                    type="file"
                    id="email"
                    className="w-full h-36 border-2 rounded-md p-2 px-3"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange text-white py-4 mt-10 font-semibold px-7 rounded-md hover:bg-black"
            >
              SUBMIT
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default AddPropertyGrid;
