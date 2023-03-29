import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import data from "../../data";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar data={data} />
      <Component {...pageProps} />
    </>
  );
}
