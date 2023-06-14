import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <meta />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
