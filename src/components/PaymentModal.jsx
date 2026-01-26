import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCreditCard, FaUniversity, FaBitcoin } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";

export default function PaymentModal({ isOpen, onClose, totalAmount, onPaymentConfirm }) {
  // State to track selected payment method
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Handle close modal
  const handleClose = () => {
    setSelectedPayment(null);
    setPaymentConfirmed(false);
    onClose();
  };

  // Handle payment confirmation
  const handleConfirmPayment = () => {
    if (selectedPayment) {
      setPaymentConfirmed(true);
      onPaymentConfirm(selectedPayment);
      // Auto close after 2 seconds to show success message
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClose}></div>

      {/* Modal Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Select Payment Method
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Success Message */}
        {paymentConfirmed && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 m-4">
            <p className="font-bold">Payment Confirmed!</p>
            <p>Your payment method has been saved. Processing your order...</p>
          </div>
        )}

        {/* Total Amount Display */}
        <div className="bg-orange-50 dark:bg-gray-700 p-4 mx-6 mt-4 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">Total Amount:</p>
          <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            ₦{totalAmount.toLocaleString()}
          </p>
        </div>

        {/* Payment Methods Container */}
        <div className="p-6 space-y-4">
          {/* Debit Card Payment */}
          <div
            onClick={() => setSelectedPayment("debit-card")}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPayment === "debit-card"
                ? "border-orange-600 bg-orange-50 dark:bg-gray-700"
                : "border-gray-300 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
            }`}
          >
            <div className="flex items-center">
              <FaCreditCard size={24} className="text-orange-600 mr-3" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Debit Card
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Visa, Mastercard, etc.
                </p>
              </div>
              {selectedPayment === "debit-card" && (
                <div className="ml-auto">
                  <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cryptocurrency Payment */}
          <div
            onClick={() => setSelectedPayment("crypto")}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPayment === "crypto"
                ? "border-orange-600 bg-orange-50 dark:bg-gray-700"
                : "border-gray-300 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
            }`}
          >
            <div className="flex items-center">
              <FaBitcoin size={24} className="text-orange-600 mr-3" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Cryptocurrency
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bitcoin, USDT, Ethereum, Solana
                </p>
              </div>
              {selectedPayment === "crypto" && (
                <div className="ml-auto">
                  <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bank Transfer Payment */}
          <div
            onClick={() => setSelectedPayment("bank-transfer")}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPayment === "bank-transfer"
                ? "border-orange-600 bg-orange-50 dark:bg-gray-700"
                : "border-gray-300 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
            }`}
          >
            <div className="flex items-start">
              <FaUniversity size={24} className="text-orange-600 mr-3 mt-1" />
              <div className="flex-1">
                <p className="font-bold text-gray-900 dark:text-white">
                  Bank Transfer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Direct bank deposit (Kuda Bank)
                </p>
                {/* Kuda Bank Logo */}
                <div className="mb-2">
                  {/* <img
                    src="https://cdn.branch.io/branch-assets/1615073389974-og_image.png"
                    alt="Kuda Bank"
                    className="h-8 mb-2"
                  /> */}
                </div>
                {/* Bank Details */}
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-1 border border-gray-200 dark:border-gray-600">
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Bank:
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      Kuda Bank
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Account Name:
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      Oruaroghene Favour
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Account Number:
                    </span>{" "}
                    <span className="text-gray-700 dark:text-gray-300 font-mono">
                      2053189774
                    </span>
                  </p>
                </div>
              </div>
              {selectedPayment === "bank-transfer" && (
                <div className="ml-auto">
                  <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-4 p-6 border-t dark:border-gray-700">
          <button
            onClick={handleClose}
            className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmPayment}
            disabled={!selectedPayment || paymentConfirmed}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              selectedPayment && !paymentConfirmed
                ? "bg-orange-600 text-white hover:bg-orange-700"
                : "bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed"
            }`}
          >
            {paymentConfirmed ? "Processing..." : "Confirm Payment"}
          </button>
        </div>
      </div>
    </>
  );
}
