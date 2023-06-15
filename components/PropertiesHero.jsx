import React from "react";
import { FirstHeading } from "./Heading";

const PropertiesHero = ({text}) => {
  return (
    <section className="bg-lightBlue pt-14 md:pt-10">
      <div className="container pb-1 md:py-10">
        <FirstHeading text={text}/>
      </div>
    </section>
  );
};

export default PropertiesHero;
