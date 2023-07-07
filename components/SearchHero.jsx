import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FirstHeading } from "./Heading";

const SearchHero = ({ text }) => {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const query = router.query.q;

  // useEffect(() => {
  //   console.log(router.query);
  // }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchText}`);
    setSearchText("");
  };

  return (
    <section className="bg-lightBlue pt-14 md:pt-10">
      <div className="container pb-1 md:py-10">
        <FirstHeading text={text} searchText={query} />
        <form className="flex mb-3 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-3 rounded-bl-md rounded-tl-md w-[90%] md:w-1/2 md:p-5"
            placeholder="Search for a property..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="bg-black text-white p-3 md:p-4 text-2xl rounded-br-md rounded-tr-md">
            <BiSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchHero;
