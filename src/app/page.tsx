import Footer from "@/components/Footer";
import Hearder from "@/components/Hearder";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hearder/>
      <Products/>
      <Footer/>
    </div>
  );
}
