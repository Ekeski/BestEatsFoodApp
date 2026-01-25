import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 dark:text-black rounded-full flex item-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch className="my-3 " size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search food"
          onChange={(e) => onSearch(e.target.value)} // Added onChange handler
        />
      </div>

      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:flex items-center bg-gray-200 dark:bg-gray-700  rounded-full p-2 mx-4"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {isMenuOpen ? (
        <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-white dark:bg-gray-700 z-10 duration-300  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AiOutlineClose
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-gray-800 dark:text-white z-10"
        />
        <h2 className="text-2xl p-4 text-gray-800 dark:text-white z-10">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav className="">
          <ul className="flex flex-col p-4 text-gray-800 dark:text-white z-10">
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="text-xl py-4 flex hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300">
              {" "}
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>

        {/* 🌙 Dark Mode Toggle for mobile view*/}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex md:hidden items-center gap-3 p-3 rounded-md
                  border-none dark:text-white mx-0 mt-4 "
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          <span className="">{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </div>
  );
}
