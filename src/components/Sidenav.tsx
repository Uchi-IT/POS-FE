"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavMenuItems } from "@/app/_constant/options";
import { MenuItem } from "@/app/_utils/global.types";

export function Sidenav() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (item: MenuItem) => {
    return pathname === item.href || 
           (item.submenus && item.subHref?.some(subHref => pathname.startsWith(subHref)));
  };

  return (
    <div
      className={`flex flex-col bg-custom_base-50 text-custom_neutral-500 transition-all duration-300 ${
        isOpen ? "w-96" : "w-20"
      }`}
    >
      <div className={`flex items-center ${isOpen ? "ml-8" : "justify-center"} mt-8`}>
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={55}
          height={49}
          className={isOpen ? "mr-2" : ""}
        />
        <h5
          className={`text-h5 font-bold text-custom_primary-900 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 w-0"
          }`}
        >
          UCHI PARFUME
        </h5>
      </div>
      <nav className="flex flex-col flex-1 p-4 text-custom_neutral-500 text-L16 font-semibold">
        {NavMenuItems.map((item) => (
          <div key={item.title} className="relative">
            <Link
              href={!item.submenus ? item.href : (item.subHref !== undefined ? item.subHref[0] : "#")}
              onClick={() => item.submenus && toggleSubmenu(item.title)}
              className={`flex items-center p-2 my-2 transition-colors duration-200 hover:bg-[#bacffc] hover:text-custom_primary-500 ${
                isActive(item) ? "bg-[#bacffc] text-custom_primary-500" : ""
              } ${isOpen ? "" : "justify-center"}`}
            >
              {isActive(item) && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-custom_primary-700"></div>
              )}
              {item.icon && <item.icon size={24} />}
              <div className={`w-full flex justify-between ${isOpen ? "" : "hidden"}`}>
                <span className="ml-4">
                  {item.title}
                </span>
                {item.submenus && (
                  <span className="ml-4">
                    {openSubmenus[item.title] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                )}
              </div>
            </Link>
            {item.submenus &&
              openSubmenus[item.title] &&
              isOpen &&
              item.submenus.map((submenu, index) => (
                <div
                  className={`transition-colors duration-200 hover:text-custom_primary-500 pl-11
                    ${item.subHref !== undefined && pathname === item.subHref[index] ? "text-custom_primary-500" : ""}`}
                  key={submenu}
                >
                  <Link
                    href={item.subHref !== undefined ? item.subHref[index] : "#"}
                    className="flex items-center p-2 my-2"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                    <span className="ml-4">
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
          <p className="p-4 text-lg flex items-center justify-center">
            <ChevronLeft size={24} className="mr-2" /> Geser
          </p>
        ) : (
          <p className="p-4 text-2xl font-bold flex justify-center">
            <ChevronRight size={24} />
          </p>
        )}
      </button>
    </div>
  );
}