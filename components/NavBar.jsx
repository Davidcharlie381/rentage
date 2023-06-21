import React from "react";
import { CgClose } from "react-icons/cg";
import NavLink from "./NavLink";

const NavBar = ({handleClose, open}) => {
  return (
    <section className={`${open ? "-left-[100vh]" : "left-0"} md:hidden fixed z-[999] bg-lightBlue opacity-[0.97] w-screen h-screen inset-0`}>
      <div className="container flex flex-col gap-10 pt-5">
        <div className="text-3xl flex flex-row-reverse" onClick={handleClose}>
          <CgClose />
        </div>
        <div className="text-center text-[21px] font-bold hover:text-orange">
          Sign in
        </div>
        <div className="font-bold">
          <ul className="flex gap-6 flex-col pl-2">
            <NavLink path="/" name="Home" nav />
            <NavLink path="/properties" name="Browse properties" nav />
            <NavLink path="add-property" name="Add your own listing" nav />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
