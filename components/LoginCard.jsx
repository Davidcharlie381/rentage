import Link from "next/link";
import React from "react";

const LoginCard = ({setHovered}) => {
  return (
    <div
      className="absolute h-[120px] w-[220px] top-10 -left-52 inset-0 bg-white rounded-md"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <p className="p-4 text-sm font-medium">Get into your account</p>
      <div className="border-b-[0.2px] mb-4" />
      <Link
        href="/login"
        className="m-4 p-2 px-4 bg-orange hover:bg-black rounded-md text-sm font-bold text-white"
      >
        LOGIN
      </Link>
    </div>
  );
};

export default LoginCard;
