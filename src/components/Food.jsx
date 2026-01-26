import { data } from "../data/data.js";
import { useState } from "react";
import { useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";
import Toast from "./Toast";

export default function Food({ searchTerm, onAddToCart }) {
  const [foods, setFoods] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePrice, setActivePrice] = useState("all");

  // State to manage toast notification
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Effect hook to handle search and filter by category (not price)
  useEffect(() => {
    let filteredResults = data;

    // Filter by category first
    if (activeCategory !== "all") {
      filteredResults = filteredResults.filter(
        (item) => item.category === activeCategory
      );
    }

    // Filter by search term (searches in name)
    if (searchTerm) {
      filteredResults = filteredResults.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFoods(filteredResults);
  }, [searchTerm, activeCategory]);

  // Filter by category
  const filterType = (category) => {
    setActiveCategory(category);
  };

  // Filter by Price $, $$, $$$, $$$$
  const filterPrice = (price) => {
    setFoods(
      data.filter((foods) => {
        return foods.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      {/* Toast notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300">Filter Type</p>
          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Pizzas
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full gap-2">
            <button
              onClick={() => filterPrice("$")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-2 border-orange-600 text-orange-600 rounded-full px-5 py-2 font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Food Items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((foods, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer"
          >
            <img
              src={foods.image}
              alt={foods.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            {/* Food info container with name, cart icon, and price */}
            <div className="flex items-center justify-between px-2 py-4">
              {/* Food name */}
              <p className="font-bold text-sm flex-1">{foods.name}</p>
              
              {/* Cart icon button - clickable to add to cart */}
              <button
                onClick={() => {
                  onAddToCart(foods);
                  // Show toast notification
                  setToastMessage("Added to cart");
                  setShowToast(true);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full mx-2 transition duration-300 flex items-center justify-center"
                title="Add to cart"
              >
                <BsFillCartFill size={16} />
              </button>
              
              {/* Price badge */}
              <span className="bg-orange-500 text-white p-1 rounded-full text-sm font-semibold">
                {foods.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
