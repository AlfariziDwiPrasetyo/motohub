import React from "react";
import MobileSidebar from "./Sidebar";
import { PiTireFill } from "react-icons/pi";
import LoginButton from "./reusable/LoginButton";
import NavMenu from "./NavMenu";
import { adminNavMenu } from "@/lib/data";

async function AdminNavbar() {
  return (
    <nav className="w-full fixed top-0 bg-[#00000010] backdrop-blur-lg z-10 text-white">
      <div className="container max-w-[1130px] mx-auto flex items-center justify-between h-[74px]">
        <div className="flex items-center pl-5">
          <PiTireFill size={24} />
          <a
            href="/"
            className="flex w-[154px] px-2 shrink-0 items-center font-bold"
          >
            Motohub
          </a>
          <ul className="flex gap-6 items-center">
            {adminNavMenu.map((menu, id) => (
              <li
                key={id}
                className="hidden md:flex text-gray-400 hover:text-white transition-all duration-300 font-semibold"
              >
                <a href={menu.url}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <LoginButton />
        </div>
        <div className="md:hidden flex items-center px-3 gap-6">
          <LoginButton />
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
