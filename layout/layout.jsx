import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <meta />
      <Header />
      <main>{children}</main>
      <FooterSection />
    </>
  );
};

export default Layout;
