import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Orders({ isOpen, onClose }) {
  // Sample order history data
  const orders = [
    {
      id: "ORD-001",
      date: "Jan 24, 2026",
      items: "Double Cheeseburger x2, Ceasar Salad x1",
      total: "₦7,000",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      date: "Jan 22, 2026",
      items: "Supreme Pizza x1, Wings x2",
      total: "₦9,500",
      status: "Delivered",
    },
    {
      id: "ORD-003",
      date: "Jan 20, 2026",
      items: "Loaded Burger x1, Fruit Salad x1",
      total: "₦5,000",
      status: "Cancelled",
    },
    {
      id: "ORD-004",
      date: "Jan 18, 2026",
      items: "Feta & Spinach Pizza x1",
      total: "₦4,000",
      status: "Delivered",
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Orders Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Orders Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Orders
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Orders List */}
        <div className="flex-1 overflow-y-auto p-4">
          {orders.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No orders yet
            </p>
          ) : (
            <div className="space-y-3">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Order #{order.id}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {order.date}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {order.items}
                  </p>
                  <p className="text-lg font-bold text-orange-600">
                    {order.total}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
