import "@/styles/globals.css";

import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mont.style.fontFamily};

        }
      `}</style>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
