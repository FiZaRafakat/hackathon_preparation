import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MusicBox from "@/components/MusicBox";
import Product from "@/components/Product";
import Sales from "@/components/Sales";
import SecFooter from "@/components/SecFooter";
import SecProduct from "@/components/SecProduct";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <Hero/>
      <Sales />
      <Category />
      <Product />
      <MusicBox />
      <SecProduct/>
      <Featured />
      <SecFooter />
      <Footer/>
    </main>
  );
}
