import PlanCard from "@/components/PlanCard";
import PropertiesHero from "@/components/PropertiesHero";
import Layout from "@/layout/layout";
import React, { useState } from "react";

const plans = [
  {
    name: "Free",
    price: 0,
    period: false,
    description: "Cras a condimentum lacus. Donec posuere placerat elementum.",
    benefits: [
      "Reveal contact info on properties",
      "Praesent tempor quis erat",
      "Vivamus iaculis euismod nibh",
    ],
  },
  {
    name: "Advanced",
    price: 20,
    period: true,
    description:
      "Suspendisse ut eros in nulla dignissim tincidunt. Cras a arcu scelerisque.",
    benefits: [
      "Reveal contact info on properties",
      "Unlimited property listings",
      "Praesent tempor quis erat",
      "Vivamus iaculis euismod nibh",
      "Pellentesque habitant morbi",
      "Ut quis erat egestas",
      "Mauris gravida sit amet erat",
    ],
  },
  {
    name: "Starter",
    price: 10,
    period: true,
    description: "Cras a condimentum lacus. Donec posuere placerat elementum.",
    benefits: [
      "Reveal contact info on properties",
      "Unlimited property listings",
      "Praesent tempor quis erat",
      "Vivamus iaculis euismod nibh",
      "Pellentesque habitant morbi",
    ],
  },
];

const SelectPlan = () => {
  const [activeTab, setActiveTab] = useState("annually");

  // const setActive = () => {

  // }

  return (
    <Layout>
      <PropertiesHero text="Select a plan" />
      <section className="md:pt-32 md:pb-28 py-16">
        <div className="container">
          <div className="relative flex md:mx-auto justify-center w-fit gap-10 p-4 font-bold text-[.95rem] px-7 rounded-[30px] bg-orange">
            <span
              className={`absolute inset-0 h-4/5 top-[5.5px] ${
                activeTab === "annually" ? "left-2" : "left-[126px]"
              } transition-smooth z-[2] rounded-[30px] w-1/2 bg-white`}
            ></span>
            <div
              onClick={() => {
                setActiveTab("annually");
              }}
              className={`z-10 cursor-pointer ${
                activeTab === "annually" ? "text-black" : "text-white"
              }`}
            >
              ANNUALLY
            </div>
            <div
              onClick={() => {
                setActiveTab("monthly");
              }}
              className={`z-10 cursor-pointer ${
                activeTab === "monthly" ? "text-black" : "text-white"
              }`}
            >
              MONTHLY
            </div>
          </div>
          <div className="mt-0 md:mt-20 grid md:grid-cols-3 gap-10">
            {plans.map((plan) => (
              <PlanCard plan={plan} period={activeTab} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SelectPlan;
