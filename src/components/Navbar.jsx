// app/components/Navbar.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Features", "Explore", "App", "Contact Us"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#FFF1EE] border-b-2 border-[#FFB3AA]">
      <nav className="MyContainer flex items-center justify-between h-[10vh] md:h-[12vh] relative">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={45}
            className="rounded-[14px] border border-[#fdcac8] md:w-11 md:h-12"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[18px] font-semibold text-gray-900">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-[#FF6B5E] transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span
              className={`h-0.5 w-6 bg-gray-900 transition ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-900 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-900 transition ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-[10vh] left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-lg flex flex-col divide-y">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-center text-black font-semibold text-[18px] hover:bg-[#FFE6E1]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
