import Category from "@/Components/Category";
import Featured from "@/Components/Featured";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import MusicBox from "@/Components/MusicBox";
import Product from "@/Components/Product";
import Sales from "@/Components/Sales";
import SecFooter from "@/Components/SecFooter";
import SecProduct from "@/Components/SecProduct";
import TopHeader from "@/Components/TopHeader";

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
