import { auth } from "@/auth";
import { navMenu } from "@/lib/data";
import React from "react";

async function NavMenu() {
  const session = await auth();
  const filteredMenu = session?.user
    ? navMenu
    : navMenu.filter((menu) => menu.name !== "Admin");

  return (
    <ul className="flex gap-6 items-center">
      {filteredMenu.map((menu, id) => (
        <li
          key={id}
          className="hidden md:flex text-gray-400 hover:text-white transition-all duration-300 font-semibold"
        >
          <a href={menu.url}>{menu.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
