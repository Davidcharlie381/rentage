import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <meta />
      <Header />
      <NavBar />
      <main>{children}</main>
      <FooterSection />
    </>
  );
};

export default Layout;
