// import components
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import ProductsFilter from "../components/ProductsFilter";

export default function HomePage() {
  console.log("berhasil");
  return (
    <>
      <Header />
      <div className="home-container flex flex-col gap-4 border border-red-600">
        <HeroSection />
        <div className="product-section flex flex-col px-4 gap-4 xl:w-7xl xl:mx-auto">
          <h1 className="text-2xl font-medium md:text-3xl">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          <ProductsFilter />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <Product title="Big 4 Auditor Financial Analyst" price="Rp 300K" />
            <Product title="Web Developer" price="Rp 600K" />
            <Product title="Data Analyst" price="Rp 700K" />
            <Product title="Human Resource" price="Rp 400K" />
            <Product title="Data Science" price="Rp 600K" />
            <Product title="Engineering" price="Rp 500K" />
            <Product title="Mobile Developer" price="Rp 600K" />
            <Product title="Digital Marketing" price="Rp 500K" />
            <Product title="SEO Specialist" price="Rp 300K" />
          </div>
        </div>
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}
