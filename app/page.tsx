import Benefit from "@/components/Benefit";
import ProductCard from "@/components/reusable/ProductCard";
import ProductCardWrapper from "@/components/reusable/ProductCardWrapper";
import SearchBar from "@/components/reusable/SearchBar";
import { mockupProduct, navMenu } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="w-full pt-[74px] pb-[34px] bg-[url('/assets/images/backgrounds/hero-image.png')] bg-cover bg-no-repeat bg-center relative z-0">
        <div className="w-full h-full absolute top-0 bg-black/50 z-0" />
        <div className="container max-w-[1130px] mx-auto flex flex-col items-center justify-center gap-[34px] z-10 px-4 md:px-6 lg:px-0">
          <div className="text-white flex flex-col gap-2 text-center w-fit mt-20 z-10">
            <h1 className="font-semibold text-[36px] md:text-[48px] lg:text-[60px] leading-[130%] bg-gradient-to-b from-white  to-[#313131] text-transparent bg-clip-text">
              Temukan Motor
              <br />
              Impianmu Disini!
            </h1>
            <p className="text-base md:text-lg text-gray-500">
              Change the way you ride to experience better journeys.
            </p>
          </div>
          //Search Bar
          <SearchBar />
        </div>
        <div className="w-full h-full absolute top-0 bg-gradient-to-b from-belibang-black/70 to-belibang-black z-0"></div>
      </header>

      <section
        id="benefit"
        className="container mt-14 mx-auto mb-[102px] items-center justify-center flex flex-col gap-9 px-5"
      >
        <h2 className="text-center font-semibold text-[36px] md:text[48px] mt-5 px-2">
          Kenapa pilih kami ?
        </h2>
        <Benefit />
      </section>

      <section
        id="NewProduct"
        className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8 px-5"
      >
        <h2 className="font-semibold text-[36px] md:text-[48px] mt-5 px-2">
          New Product
        </h2>
        <ProductCardWrapper />
      </section>
    </>
  );
}
