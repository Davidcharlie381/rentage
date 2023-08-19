import React from "react";
import { CgClose } from "react-icons/cg";
import NavLink from "./NavLink";

const NavBar = ({handleClose, open}) => {


  return (
    <section className={`md:hidden ${open ? "left-0" : "-left-[100vh]"} fixed z-[999] transiton-all duration-500 bg-lightBlue opacity-[0.97] w-screen h-screen inset-0`}>
      <div className="container flex flex-col gap-10 pt-5">
        <div className="text-3xl flex flex-row-reverse" onClick={handleClose}>
          <CgClose />
        </div>
        <div className="text-center text-[21px] font-bold hover:text-orange">
          Sign in
        </div>
        <div className="font-bold">
          <ul className="flex gap-6 flex-col pl-2">
            <NavLink path="/" name="Home" nav handleClose={handleClose}/>
            <NavLink path="/properties" name="Browse properties" nav handleClose={handleClose}/>
            <NavLink path="/add-property" name="Add your own listing" nav handleClose={handleClose}/>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
