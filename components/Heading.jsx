import React from "react";

const SectionHeading = ({ text, where, underline, para }) => {
  return (
    <>
      <SecondHeading text={text} where={where}/>
      {underline && (
        <div className={`bg-orange h-[3px] mb-6 md:mb-9 w-[100px] ${where !== "author" ? "mx-auto" : ""}`} />
      )}
      <p className="text-center text-sm md:text-base md:max-w-3xl mx-auto font-medium">
        {para}
      </p>
    </>
  );
};

const FirstHeading = ({ text, searchText }) => {
  return (
    <h1 className="font-extrabold text-[40px] md:text-[55px] md:leading-[72px] leading-[48px] tracking-[0.005em] mb-12">
      {text} {searchText}
    </h1>
  );
};

const SecondHeading = ({ text, where }) => {
  return (
    <h2 className={`text-[1.75rem] leading-9 md:leading-[52px] ${where !== "author" ? "md:max-w-3xl": ""} ${where !== "author" ? "mx-auto text-center" : ""} md:text-[2.75rem] mb-4 md:mb-6 font-extrabold`}>
      {text}
    </h2>
  );
};

export { FirstHeading, SecondHeading, SectionHeading };
