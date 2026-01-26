import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PaymentModal from "./PaymentModal";

export default function Cart({ cartItems, onRemoveItem, onUpdateQuantity, onRemoveAll, onClose }) {
  // State to manage payment modal visibility
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Calculate total price of all items in cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric price (e.g., "$" = 1000, "$$" = 2000, etc.)
      const priceMap = { "$": 1000, "$$": 2000, "$$$": 3000, "$$$$": 4000 };
      const itemPrice = priceMap[item.price] || 1000;
      return total + itemPrice * (item.quantity || 1);
    }, 0);
  };

  // Handle payment method confirmation
  const handlePaymentConfirm = (paymentMethod) => {
    console.log("Payment Method Selected:", paymentMethod);
    console.log("Items in Cart:", cartItems);
    console.log("Total Amount:", calculateTotal());
    // Here you would send this data to your backend
  };

  // Handle removing all items from cart
  const handleRemoveAll = () => {
    // Confirm before removing all items
    if (window.confirm("Are you sure you want to remove all items from cart?")) {
      // Call the onRemoveAll function to clear entire cart at once
      onRemoveAll();
    }
  };

  const totalAmount = calculateTotal();

  return (
    <>
      {/* Cart Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => {
                // Map price string to numeric value
                const priceMap = { "$": 1000, "$$": 2000, "$$$": 3000, "$$$$": 4000 };
                const itemPrice = priceMap[item.price] || 1000;
                const itemTotal = itemPrice * (item.quantity || 1);

                return (
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
                        <p className="text-orange-600 font-bold mt-1">
                          ₦{itemPrice.toLocaleString()}/item
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
                        <button
                          onClick={() =>
                            onUpdateQuantity(index, (item.quantity || 1) - 1)
                          }
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          <AiOutlineMinus size={16} />
                        </button>
                        <p className="px-3 text-gray-900 dark:text-white font-semibold">
                          {item.quantity || 1}
                        </p>
                        <button
                          onClick={() =>
                            onUpdateQuantity(index, (item.quantity || 1) + 1)
                          }
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          <AiOutlinePlus size={16} />
                        </button>
                      </div>

                      {/* Item Total and Remove Button */}
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ₦{itemTotal.toLocaleString()}
                        </p>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-red-600 hover:text-red-800 dark:hover:text-red-400 text-sm font-semibold mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cart Summary and Payment Button */}
        {cartItems.length > 0 && (
          <div className="border-t dark:border-gray-700 p-4 space-y-4">
            {/* Divider line */}
            <div className="border-b dark:border-gray-700"></div>

            {/* Total Amount Display */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                Total:
              </p>
              <p className="text-2xl font-bold text-orange-600">
                ₦{totalAmount.toLocaleString()}
              </p>
            </div>

            {/* Make Payment Button */}
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition"
            >
              Make Payment
            </button>

            {/* Remove All Button */}
            <button
              onClick={handleRemoveAll}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition"
            >
              Remove All
            </button>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalAmount={totalAmount}
        onPaymentConfirm={handlePaymentConfirm}
      />
    </>
  );
}
