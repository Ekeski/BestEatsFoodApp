import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function BestOne({ isOpen, onClose }) {
  // Sample best rated items data
  const bestItems = [
    {
      id: 1,
      name: "Double Cheeseburger",
      category: "Burger",
      rating: 4.8,
      reviews: 523,
      price: "₦4,000",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    },
    {
      id: 2,
      name: "Supreme Pizza",
      category: "Pizza",
      rating: 4.7,
      reviews: 412,
      price: "₦6,000",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Baked Chicken",
      category: "Chicken",
      rating: 4.9,
      reviews: 678,
      price: "₦5,500",
      image:
        "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Ceasar Salad",
      category: "Salad",
      rating: 4.6,
      reviews: 289,
      price: "₦3,000",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Best One Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Best One Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Best Overall
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Best Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {bestItems.map((item, index) => (
              <div
                key={item.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-700 hover:shadow-lg transition"
              >
                {/* Item Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />

                {/* Item Details */}
                <div className="p-3">
                  {/* Rank Badge */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.category}
                      </p>
                    </div>
                    <span className="bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-white px-2 py-1 rounded-full text-xs font-bold">
                      #{index + 1}
                    </span>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(item.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                      {item.rating} ({item.reviews})
                    </p>
                  </div>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-orange-600 text-sm">
                      {item.price}
                    </p>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-lg text-xs font-semibold transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t dark:border-gray-700 p-4 bg-orange-50 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300">
          <p>
            ⭐ These are our most loved items based on customer ratings and
            reviews!
          </p>
        </div>
      </div>
    </>
  );
}
