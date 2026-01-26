import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Promotions({ isOpen, onClose }) {
  // Sample promotions data
  const promotions = [
    {
      id: 1,
      title: "Sun's Out, BOGO's Out",
      description: "Buy one get one free on selected burgers",
      discount: "50% OFF",
      validUntil: "8/26/2026",
      badge: "ACTIVE",
    },
    {
      id: 2,
      title: "New Restaurant Special",
      description: "20% discount on orders from newly added restaurants",
      discount: "20% OFF",
      validUntil: "2/15/2026",
      badge: "ACTIVE",
    },
    {
      id: 3,
      title: "Dessert Delivery Special",
      description: "Free delivery on dessert orders above ₦5,000",
      discount: "FREE DELIVERY",
      validUntil: "2/10/2026",
      badge: "ACTIVE",
    },
    {
      id: 4,
      title: "Tuesday Deal",
      description: "25% off on all pizza orders every Tuesday",
      discount: "25% OFF",
      validUntil: "Recurring",
      badge: "ACTIVE",
    },
    {
      id: 5,
      title: "Loyalty Bonus",
      description: "Earn points on every order and redeem for discounts",
      discount: "UP TO 15%",
      validUntil: "Ongoing",
      badge: "ACTIVE",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Promotions Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Promotions Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Promotions
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Promotions List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="border border-orange-200 dark:border-orange-600 rounded-lg p-4 bg-orange-50 dark:bg-gray-700 relative overflow-hidden"
              >
                {/* Diagonal stripe background */}
                <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  {promo.badge}
                </div>

                <p className="font-bold text-gray-900 dark:text-white text-sm mb-2 pr-16">
                  {promo.title}
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-3">
                  {promo.description}
                </p>

                {/* Discount Badge */}
                <div className="flex justify-between items-center">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {promo.discount}
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Until {promo.validUntil}
                  </p>
                </div>

                {/* Apply Button */}
                <button className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition text-sm">
                  Apply Promo
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400">
          <p>
            💡 Tip: New promotions are added daily! Check back often for the
            latest deals.
          </p>
        </div>
      </div>
    </>
  );
}
