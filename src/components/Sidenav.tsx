"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { MenuItem } from '../app/_utils/global.types';
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// interface MenuItem {
//   title: string;
//   href: string;
//   submenus?: string[];
//   subHref?: string[];
// }

const menuItems: MenuItem[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Point Of Sale", href: "/login" },
  { title: "Gudang", href: "/dashboard" },
  {
    title: "Restok",
    href: "/dashboard",
    submenus: ["Submenu 1", "Submenu 2"],
    subHref: ["/dashboard", "/login"],
  },
  { title: "Cabang", href: "/login" },
  { title: "Karyawan", href: "/dashboard" },
  {
    title: "Riwayat",
    href: "/login",
    submenus: ["Submenu 1", "Submenu 2"],
    subHref: ["/login", "/dashboard"],
  },
];

export function Sidenav() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const pathname = usePathname()

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div
      className={`flex flex-col bg-custom_base-50 text-custom_neutral-500 transition-width duration-300 ${
        isOpen ? "w-96" : "w-32"
      }`}
    >
      <div className="flex items-center ml-8 mt-8">
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={55}
          height={49}
          className="mr-2"
        />
        <h5
          className={`text-h5 font-bold text-custom_primary-900 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          UCHI PARFUME
        </h5>
      </div>
      <nav className="flex flex-col flex-1 p-8 text-custom_neutral-500 text-L16 font-semibold">
        {menuItems.map((item) => (
          <div key={item.title}>
            <Link
              href={
                !item.submenus
                  ? item.href
                  : item.subHref !== undefined
                  ? item.subHref[0]
                  : "#"
              }
              onClick={() => item.submenus && toggleSubmenu(item.title)}
              className={`flex items-center p-2 my-2 transition-colors duration-200 hover:bg-[#bacffc] hover:text-custom_primary-500 ${pathname === item.href ? 'bg-[#bacffc] text-custom_primary-500' : item.submenus?.some(subMenu => item.subHref?.some(subHref => subHref.includes(subMenu))) ? 'bg-[#bacffc] text-custom_primary-500' : ''}`}
            >
              <p>test</p>
              <div className="w-full flex justify-between">
                <span
                  className={`ml-4 transition-opacity duration-300 ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  {item.title}
                </span>
                {item.submenus && isOpen && (
                  <span className="ml-4">
                    {openSubmenus[item.title] ? <p>up</p> : <p>down</p>}
                  </span>
                )}
              </div>
            </Link>
            {item.submenus &&
              openSubmenus[item.title] &&
              item.submenus.map((submenu, index) => (
                <div
                  className={`transition-colors duration-200 hover:text-custom_primary-500 ${
                    isOpen ? "pl-11" : ""
                  } ${item.subHref !== undefined && pathname === item.subHref[index] ? 'text-custom_primary-500' : ''}`}
                  key={submenu}
                >
                  <Link
                    href={
                      item.subHref !== undefined ? item.subHref[index] : "#"
                    }
                    className="flex items-center p-2 my-2"
                  >
                    <p>test</p>
                    <span
                      className={`ml-4 transition-opacity duration-300 ${
                        isOpen ? "" : "hidden"
                      }`}
                    >
                      {submenu}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </nav>
      <button
        onClick={toggleSidenav}
        className="focus:outline-none text-base text-custom_primary-500 border-t-2 border-custom_primary-500 m-2"
      >
        {isOpen ? (
          <p className="p-4 text-xl">
            <span className="mr-2 font-bold text-2xl">&lt;&lt;</span> Geser
          </p>
        ) : (
          <p className="p-4 text-2xl font-bold">&gt;&gt;</p>
        )}
      </button>
    </div>
  );
}
