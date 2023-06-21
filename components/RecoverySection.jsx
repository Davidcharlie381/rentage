import React from "react";

const RecoverySection = () => {
  return (
    <section className="py-20">
      <div className="container place-content-center">
        <form
          action=""
          className="p-10 flex flex-col justify-center max-w-lg mx-auto"
        >
          <h3 className="text-[20px] font-medium leading-6 tracking-wider mb-10">
            Password Recovery
          </h3>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-[13px] font-semibold leading-[13px] text-[#5b5b5b] tracking-wide mb-2"
            >
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="w-full border-2 rounded-md p-2 px-3"
            />
          </div>

          <button
            type="submit"
            className="bg-orange text-white p-[10px] mt-10 font-semibold px-5 rounded-lg hover:bg-black"
          >
            Recover password
          </button>
        </form>
      </div>
    </section>
  );
};

export default RecoverySection;
