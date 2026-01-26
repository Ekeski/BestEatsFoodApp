import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function Favorites({ favorites, isOpen, onClose, setFavorites }) {
  // Handle removing item from favorites
  const handleRemoveFromFavorite = (itemId) => {
    setFavorites(favorites.filter((fav) => fav.id !== itemId));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Favorites Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Favorites Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Favorites
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Favorites Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          {favorites.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No favorites yet
            </p>
          ) : (
            <div className="space-y-4">
              {favorites.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-700"
                >
                  {/* Item Image and Name */}
                  <div className="flex gap-3 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.category}
                      </p>
                      {/* Price mapping */}
                      <div>
                        <p className="text-orange-600 font-bold mt-1">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove from favorites button */}
                  <button
                    onClick={() => handleRemoveFromFavorite(item.id)}
                    className="text-red-600 hover:text-red-800 dark:hover:text-red-400 text-sm font-semibold flex items-center gap-1"
                  >
                    <AiFillHeart size={14} /> Remove from Favorite
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
