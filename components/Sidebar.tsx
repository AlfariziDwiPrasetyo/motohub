"use client";

import { navMenu } from "@/lib/data";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { PiTireFill } from "react-icons/pi";
import SidebarMenu from "./SidebarMenu";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-white flex items-center justify-center"
      >
        <GiHamburgerMenu size={18} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-[#181818] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 ">
          <div className="flex gap-2 items-center">
            <PiTireFill size={20} />
            <h2 className="text-xl font-semibold">Motohub</h2>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white"
          >
            <IoClose size={24} />
          </button>
        </div>

        <SidebarMenu />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-[#181818]"
        ></div>
      )}
    </div>
  );
}
