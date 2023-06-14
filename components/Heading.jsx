import React from "react";

const SectionHeading = ({ text, underline, para }) => {
  return (
    <>
      <SecondHeading text={text}/>
      {underline && (
        <div className="bg-orange h-[3px] mb-6 md:mb-9 w-[100px] mx-auto" />
      )}
      <p className="text-center text-sm md:max-w-2xl mx-auto font-medium">
        {para}
      </p>
    </>
  );
};

const FirstHeading = ({ text }) => {
  return (
    <h1 className="font-extrabold text-[40px] md:text-[55px] md:leading-[72px] md:max-w-lg leading-[48px] tracking-[0.005em] mb-12">
      {text}
    </h1>
  );
};

const SecondHeading = ({text}) => {
  return (
    <h2 className="text-[1.75rem] leading-9 md:leading-[52px] md:max-w-xl mx-auto md:text-[2.75rem] mb-4 md:mb-6 font-extrabold text-center ">
      {text}
    </h2>
  );
};

export { FirstHeading, SecondHeading, SectionHeading };
