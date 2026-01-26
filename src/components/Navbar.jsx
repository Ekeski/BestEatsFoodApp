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

export default function Navbar({ onSearch, cartItemsCount = 0, onCartClick }) {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to html element when darkMode changes
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  // Load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side - Menu icon and logo */}
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
        {/* Delivery/Pickup toggle - hidden on mobile */}
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
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Right side - Cart button, Dark mode toggle, and actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Cart Button - shows item count when there are items in cart */}
        <button
          onClick={onCartClick}
          className="bg-black dark:bg-orange-600 text-white hidden md:flex items-center py-2 px-3 rounded-full relative hover:bg-gray-800 dark:hover:bg-orange-700 transition"
        >
          <BsFillCartFill size={20} className="mr-2" /> Cart
          {/* Cart count badge */}
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-2 mx-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu - Overlay */}
      {isMenuOpen ? (
        <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}

      {/* Side drawer menu - appears when isMenuOpen is true */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-white dark:bg-gray-700 z-10 duration-300  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <AiOutlineClose
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-gray-800 dark:text-white z-10"
        />

        {/* Logo in drawer */}
        <h2 className="text-2xl p-4 text-gray-800 dark:text-white z-10">
          Best <span className="font-bold">Eats</span>
        </h2>

        {/* Navigation menu */}
        <nav className="">
          <ul className="flex flex-col p-4 text-gray-800 dark:text-white z-10">
            {/* Cart Item - Mobile view only (hidden on md and above) */}
            <li 
              onClick={() => {
                onCartClick();
                setIsMenuOpen(false);
              }}
              className="text-xl py-4 flex items-center hover:scale-105 hover:bg-slate-100 hover:rounded-2xl dark:hover:bg-transparent duration-300 cursor-pointer md:hidden relative"
            >
              <BsFillCartFill size={25} className="mr-4" /> Cart
              {/* Cart count badge for mobile - positioned to the right */}
              {cartItemsCount > 0 && (
                <span className="ml-auto bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </li>
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

        {/* Dark Mode Toggle for mobile view */}
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
