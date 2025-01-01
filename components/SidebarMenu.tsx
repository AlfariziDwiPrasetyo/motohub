"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/auth";
import { navMenu } from "@/lib/data";
import { getCurrentUser } from "./auth/get-current-user";

interface NavMenu {
  name: string;
  url: string;
}

function SidebarMenu() {
  const [filteredMenu, setFilteredMenu] = useState<NavMenu[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const session = await getCurrentUser();
        const menu = session?.user
          ? navMenu
          : navMenu.filter((menu) => menu.name !== "Admin");
        setFilteredMenu(menu);
      } catch (error) {
        console.error("Failed to fetch session:", error);
        setFilteredMenu(navMenu.filter((menu) => menu.name !== "Admin"));
      }
    })();
  }, []);

  return (
    <nav className="mt-4 space-y-2 px-4">
      {filteredMenu.map((menu, id) => (
        <a
          key={id}
          href={menu.url}
          className="block rounded p-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          {menu.name}
        </a>
      ))}
    </nav>
  );
}

export default SidebarMenu;
