import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import Meta from "./meta";

const Layout = ({ title, description, children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    if (open) {
      setOpen(false);
      document.body.classList.add("overflow-hidden");
    } else {
      setOpen(true);

      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <Meta title={title} description={description} />
      <Header handleClose={handleClose} />
      <NavBar handleClose={handleClose} open={open} />
      <main>{children}</main>
      <FooterSection />
    </>
  );
};

export default Layout;
