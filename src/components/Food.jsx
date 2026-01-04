import { data } from "../data/data.js";
import { useState } from "react";
import { useEffect } from "react";
export default function Food({ searchTerm }) {
  const [foods, setFoods] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePrice, setActivePrice] = useState("all");


  // 2. This "Effect" runs every time searchTerm, category, or price changes

  // useEffect(() => {
  //   let filteredResults = data;

    // Filter by Category

    // if (activeCategory !== 'all') {
    //   filteredResults = filteredResults.filter((item) => item.category === activeCategory);
    // }

    // Filter by Price

    // if (activePrice !== 'all') {
    //   filteredResults = filteredResults.filter((item) => item.price === activePrice);
    // }

    // Filter by Search Term (The part you were missing!)

    // if (searchTerm) {
    //   filteredResults = filteredResults.filter((item) =>
    //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    // }

  //   setFoods(filteredResults);
  // }, [searchTerm, activeCategory, activePrice]); 

  // Filter functions now just update the "active" state

  // const filterType = (category) => setActiveCategory(category);
  // const filterPrice = (price) => setActivePrice(price);


  //   Filter Type burgars, pizzas, salads, chicken

  const filterType = (category) => {
    setFoods(
      data.filter((foods) => {
        return foods.category === category;
      })
    );
  };

  //   Filter by Price $, $$, $$$, $$$$

  const filterPrice = (price) => {
    setFoods(
      data.filter((foods) => {
        return foods.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Pizzas
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
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
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={foods.image}
              alt={foods.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{foods.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {foods.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
