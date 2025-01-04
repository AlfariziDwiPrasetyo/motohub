import ProductCard from "@/components/reusable/ProductCard";
import ProductCardWrapper from "@/components/reusable/ProductCardWrapper";
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
          <div className="flex w-full justify-center mb-[34px] z-10">
            <form className="group/search-bar p-[14px_18px] bg-belibang-darker-grey ring-1 ring-[#414141] hover:ring-[#888888] max-w-full md:max-w-[560px] w-full rounded-full transition-all duration-300">
              <div className="relative text-left">
                <button className="absolute inset-y-0 left-0 flex items-center">
                  <img
                    src="/assets/images/icons/search-normal.svg"
                    alt="icon"
                  />
                </button>
                <input
                  type="text"
                  id="searchInput"
                  className="w-full pl-[36px] focus:outline-none placeholder:text-[#595959] pr-9 bg-belibang-darker-grey"
                  placeholder="Type anything to search..."
                />
                {/* <input
                  // type="reset"
                  id="resetButton"
                  className="close-button w-[38px] h-[38px] flex shrink-0 bg-[url('/assets/images/icons/close.svg')] hover:bg-[url('/assets/images/icons/close-white.svg')] transition-all duration-300 appearance-none transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 -right-5"
                  defaultValue=""
                /> */}
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 bg-gradient-to-b from-belibang-black/70 to-belibang-black z-0"></div>
      </header>

      <section
        id="NewProduct"
        className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8 px-5"
      >
        <h2 className="font-semibold text-[36px] md:text-[48px] mt-5 px-2">
          New Product
        </h2>
        <ProductCardWrapper />
      </section>
      {/* <section id="Testimonial" className="mb-[102px] flex flex-col gap-8">
        <div className="container max-w-[1130px] mx-auto flex justify-between items-center">
          <h2 className="font-semibold text-[32px]">
            Customers Are Happy <br />
            With Our Products
          </h2>
          <div className="flex gap-[14px] items-center">
            <button className="btn-prev w-10 h-10 shrink-0 rounded-full overflow-hidden rotate-180">
              <img src="/assets/images/icons/circle-arrow-r.svg" alt="icon" />
            </button>
            <button className="btn-next w-10 h-10 shrink-0 rounded-full overflow-hidden">
              <img src="/assets/images/icons/circle-arrow-r.svg" alt="icon" />
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-hidden no-scrollbar">
          <div className="testi-carousel" data-flickity="">
            <div className="flex w-[calc((100vw-1130px-20px)/2)] shrink-0" />
            <div className="testimonial-card bg-[#181818] rounded-[20px] flex mr-5 w-[420px] min-h-[256px] shrink-0 overflow-hidden">
              <div className="p-6 flex flex-col w-full gap-[42px] shrink-0 bg-[url('/assets/images/backgrounds/Testimonials-image.png')] bg-contain bg-no-repeat bg-top">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center ga-[6px]">
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                  </div>
                  <p className="leading-[26px]">
                    Using these templates has boosted my productivity
                    significantly. Highly recommended for all designers!
                  </p>
                </div>
                <div className="flex gap-[14px] items-center">
                  <div className="w-12 h-12 flex shrink-0 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo1.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <p className="font-semibold text-left leading-[170%] bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
                      Sarah Lopez
                    </p>
                    <p className="font-semibold text-left text-xs text-belibang-grey">
                      Brand Design Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card bg-[#181818] rounded-[20px] flex mr-5 w-[420px] min-h-[256px] shrink-0 overflow-hidden">
              <div className="p-6 flex flex-col w-full gap-[42px] shrink-0 bg-[url('/assets/images/backgrounds/Testimonials-image.png')] bg-contain bg-no-repeat bg-top">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center ga-[6px]">
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                  </div>
                  <p className="leading-[26px]">
                    Using these templates has boosted my productivity
                    significantly. Highly recommended for all designers!
                  </p>
                </div>
                <div className="flex gap-[14px] items-center">
                  <div className="w-12 h-12 flex shrink-0 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo1.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <p className="font-semibold text-left leading-[170%] bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
                      Sarah Lopez
                    </p>
                    <p className="font-semibold text-left text-xs text-belibang-grey">
                      Brand Design Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card bg-[#181818] rounded-[20px] flex mr-5 w-[420px] min-h-[256px] shrink-0 overflow-hidden">
              <div className="p-6 flex flex-col w-full gap-[42px] shrink-0 bg-[url('/assets/images/backgrounds/Testimonials-image.png')] bg-contain bg-no-repeat bg-top">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center ga-[6px]">
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                  </div>
                  <p className="leading-[26px]">
                    Using these templates has boosted my productivity
                    significantly. Highly recommended for all designers!
                  </p>
                </div>
                <div className="flex gap-[14px] items-center">
                  <div className="w-12 h-12 flex shrink-0 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo2.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <p className="font-semibold text-left leading-[170%] bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
                      Michael Chen
                    </p>
                    <p className="font-semibold text-left text-xs text-belibang-grey">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card bg-[#181818] rounded-[20px] flex mr-5 w-[420px] min-h-[256px] shrink-0 overflow-hidden">
              <div className="p-6 flex flex-col w-full gap-[42px] shrink-0 bg-[url('/assets/images/backgrounds/Testimonials-image.png')] bg-contain bg-no-repeat bg-top">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center ga-[6px]">
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                  </div>
                  <p className="leading-[26px]">
                    Using these templates has boosted my productivity
                    significantly. Highly recommended for all designers!
                  </p>
                </div>
                <div className="flex gap-[14px] items-center">
                  <div className="w-12 h-12 flex shrink-0 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo1.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <p className="font-semibold text-left leading-[170%] bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
                      Emily Robinson
                    </p>
                    <p className="font-semibold text-left text-xs text-belibang-grey">
                      Senior Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card bg-[#181818] rounded-[20px] flex mr-5 w-[420px] min-h-[256px] shrink-0 overflow-hidden">
              <div className="p-6 flex flex-col w-full gap-[42px] shrink-0 bg-[url('/assets/images/backgrounds/Testimonials-image.png')] bg-contain bg-no-repeat bg-top">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center ga-[6px]">
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                    <img src="/assets/images/icons/star.svg" alt="star" />
                  </div>
                  <p className="leading-[26px]">
                    Using these templates has boosted my productivity
                    significantly. Highly recommended for all designers!
                  </p>
                </div>
                <div className="flex gap-[14px] items-center">
                  <div className="w-12 h-12 flex shrink-0 rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo1.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <p className="font-semibold text-left leading-[170%] bg-clip-text text-transparent bg-gradient-to-r from-[#B05CB0] to-[#FCB16B]">
                      Sarah Lopez
                    </p>
                    <p className="font-semibold text-left text-xs text-belibang-grey">
                      Brand Design Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Tool" className="mb-[102px] flex flex-col gap-8">
        <div className="container max-w-[1130px] mx-auto flex justify-between items-center">
          <h2 className="font-semibold text-[32px]">Browse Tools</h2>
        </div>
        <div className="tools-logos w-full overflow-hidden flex flex-col gap-5">
          <div className="group/slider flex flex-nowrap w-max items-center">
            <div className="logo-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap">
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/blender.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Blender</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      3D Ul Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Excel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Excel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Data Analysis
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Kotlin.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Kotlin</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Android Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Laravel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Laravel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Vue.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Vue</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Front-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/figma-logo.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Figma</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Ul/UX Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/flutter.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Flutter</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Mobile Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/golang.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Golang</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="logo-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap ">
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/blender.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Blender</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      3D Ul Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Excel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Excel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Data Analysis
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Kotlin.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Kotlin</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Android Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Laravel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Laravel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Vue.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Vue</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Front-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/figma-logo.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Figma</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Ul/UX Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/flutter.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Flutter</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Mobile Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/golang.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Golang</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="group/slider flex flex-nowrap w-max items-center">
            <div className="logo-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap">
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/blender.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Blender</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      3D Ul Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Excel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Excel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Data Analysis
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Kotlin.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Kotlin</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Android Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Laravel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Laravel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Vue.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Vue</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Front-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/figma-logo.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Figma</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Ul/UX Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/flutter.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Flutter</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Mobile Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/golang.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Golang</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="logo-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap ">
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/blender.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Blender</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      3D Ul Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Excel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Excel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Data Analysis
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Kotlin.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Kotlin</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Android Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Laravel.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Laravel</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/Vue.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Vue</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Front-End Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/figma-logo.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Figma</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Ul/UX Design
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/flutter.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Flutter</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Mobile Development
                    </p>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
              >
                <div className="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                  <div className="w-16 h-16 overflow-hidden flex shrink-0">
                    <img
                      src="/assets/images/logos/golang.svg"
                      className="w-full h-full object-contain"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-lg">Golang</p>
                    <p className="font-semibold text-xs leading-[170%] text-belibang-grey">
                      Back-End Development
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
