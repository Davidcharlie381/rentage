import React from "react";

import { BsCheck } from "react-icons/bs";

const PlanCard = ({ plan, period }) => {
  return (
    <div
      className={`${
        plan.name === "Advanced" ? "p-10 rounded-2xl bg-dullBlue" : "pt-12"
      }`}
    >
      <h3 className="font-extrabold text-[#5b5b5b] text-lg md:text-xl">
        {plan.name}
      </h3>
      <div className="bg-black h-[1px] mt-1 w-10" />
      <div className="flex gap-2">
        <h2 className="font-extrabold text-4xl mt-4">
          ${plan.period && period === "annually" ? plan.price * 10 : plan.price}
        </h2>
        {plan.name !== "Free" && (
          <div className=" self-end">
            {plan.period && period === "monthly" ? (
              <span className="text-base text-black/50 font-bold">
                / Month
              </span>
            ) : (
              <span className="text-base text-black/50 font-bold">
                / Year
              </span>
            )}
          </div>
        )}
      </div>
      <p className="text-[#5b5b5b] text-sm font-medium max-w-[350px] mt-5">
        {plan.description}
      </p>
      <ul className="mt-8 md:mt-10 flex flex-col gap-2 md:h-[250px]">
        {plan.benefits.map((benefit) => (
          <li className="flex gap-3 items-center">
            <span className="text-white text-md bg-orange/50 w-4 h-4 rounded-full grid place-content-center">
              <BsCheck />
            </span>
            <span className="font-semibold text-[13px] md:text-base">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`${
          plan.name === "Advanced"
            ? "bg-orange hover:bg-black"
            : "bg-black hover:bg-orange"
        }  text-[15px] font-bold text-white rounded-lg p-3 mt-10 w-full`}
      >
        CHOOSE PLAN
      </button>
    </div>
  );
};

export default PlanCard;
