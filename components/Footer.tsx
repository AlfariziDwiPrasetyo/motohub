import { navMenu } from "@/lib/data";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#181818] py-8 sm:py-10 md:py-12 text-white px-5">
      <div className="container max-w-[1130px] mx-auto flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="flex flex-col justify-between gap-8 md:gap-6">
            <div className="flex shrink-0">
              <img
                src="/assets/images/logos/logo.svg"
                alt="logo"
                className="w-24 md:w-32"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-sm">Connect with us</p>
              <div className="flex items-center gap-4">
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="/assets/images/logos/dribbble.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="/assets/images/logos/facebook.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="/assets/images/logos/apple.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex shrink-0 rounded-full overflow-hidden border border-[#595959] items-center justify-center"
                >
                  <img
                    src="/assets/images/logos/figma.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-6">
              <p className="font-semibold text-sm">Browse</p>
              <div className="flex flex-col gap-4">
                {navMenu.map((menu, id) => (
                  <a
                    key={id}
                    href={menu.url}
                    className="text-gray-500 hover:text-white transition-colors font-semibold text-xs"
                  >
                    {menu.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-semibold text-sm">Customer service</p>
              <div className="flex flex-col gap-4">
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  FAQ
                </a>
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  Orders
                </a>
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  Payments
                </a>
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  Refunds
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-semibold text-sm">Contact us</p>
              <div className="flex flex-col gap-4">
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  About us
                </a>
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  Company
                </a>
                <a href="" className="text-belibang-grey font-semibold text-xs">
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-[#595959] text-center">
          © 2024, Belibang LLC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
