import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import Meta from "./meta";

const Layout = ({ title, description, children }) => {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  const handleClose = () => {
    setOpen(!open);
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
