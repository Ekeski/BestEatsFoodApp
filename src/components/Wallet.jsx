import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";

export default function Wallet({ isOpen, onClose }) {
  // Sample wallet data
  const walletBalance = "₦15,500";
  const transactions = [
    { id: 1, date: "Jan 25, 2026", description: "Order ORD-001", amount: "-₦7,000", type: "debit" },
    { id: 2, date: "Jan 24, 2026", description: "Wallet Top-up", amount: "+₦10,000", type: "credit" },
    { id: 3, date: "Jan 22, 2026", description: "Order ORD-002", amount: "-₦9,500", type: "debit" },
    { id: 4, date: "Jan 20, 2026", description: "Referral Bonus", amount: "+₦5,000", type: "credit" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Wallet Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* Wallet Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Wallet
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Wallet Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Balance Card */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white shadow-lg">
            <div className="flex items-center mb-4">
              <MdAccountBalanceWallet size={28} className="mr-3" />
              <p className="text-sm opacity-90">Wallet Balance</p>
            </div>
            <p className="text-3xl font-bold">{walletBalance}</p>
            <p className="text-sm mt-2 opacity-75">Available for purchases</p>
          </div>

          {/* Top-up Button */}
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition">
            Top-up Wallet
          </button>

          {/* Transaction History */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              Transaction History
            </h3>
            <div className="space-y-2">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {transaction.description}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {transaction.date}
                    </p>
                  </div>
                  <p
                    className={`font-bold text-sm ${
                      transaction.type === "credit"
                        ? "text-green-600"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
