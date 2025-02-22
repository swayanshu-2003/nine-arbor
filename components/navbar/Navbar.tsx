"use client";

import React, { useState } from "react";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-3 w-full sm:w-full sticky top-0 left-0 z-[70]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-32 sm:w-40">
          <a href="/">
            <img src={Logo?.src} alt="Logo" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 font-Montserrat text-sm sm:text-base">
          <a href="/">
            <li className="font-normal hover:font-bold cursor-pointer transition-all duration-200 px-2">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="font-normal hover:font-bold cursor-pointer transition-all duration-200 px-2">
              About
            </li>
          </a>
          <a href="#features">
            <li className="font-normal hover:font-bold cursor-pointer transition-all duration-200 px-2">
              Features
            </li>
          </a>
          <a href="#projects">
            <li className="font-normal hover:font-bold cursor-pointer transition-all duration-200 px-2">
              Projects
            </li>
          </a>
          <a href="#team">
            <li className="font-normal hover:font-bold cursor-pointer transition-all duration-200 px-2">
              Team
            </li>
          </a>
        </ul>

        {/* Desktop Button */}
        <a
          href="https://wa.me/7007828937"
          className="hidden sm:block border rounded-sm border-white py-2 px-4 hover:bg-white hover:text-black transition font-Lato text-xs sm:text-sm"
        >
          Talk to Us
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="space-y-4 py-4 px-6 font-Montserrat text-sm">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">Products</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Career</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          </ul>
          <div className="px-6 pb-4">
            <a
              href="https://wa.me/7007828937"
              className="w-full border border-white py-2 px-4 hover:bg-white hover:text-black transition font-Lato text-sm"
            >
              Talk to Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
