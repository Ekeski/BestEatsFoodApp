import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function FAQ({ isOpen, onClose }) {
  // State to manage which FAQ item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // FAQ data - common questions for food delivery apps
  const faqData = [
    {
      question: "How do I place an order?",
      answer:
        "Browse through our menu, add items to your cart by clicking the cart icon, adjust quantities as needed, and then click 'Make Payment' to proceed with checkout. Select your preferred payment method and confirm your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Debit Cards (Visa, Mastercard), Cryptocurrency (Bitcoin, USDT, Ethereum, Solana), and Bank Transfers (Kuda Bank). All payments are secure and encrypted.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery time typically ranges from 30-60 minutes depending on your location and current order volume. You can track your order in real-time from the moment it's confirmed.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "You can cancel orders before the restaurant starts preparing them. Once preparation begins, cancellation may not be possible. Contact our support team for assistance.",
    },
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes! Check our 'Promotions' section in the menu for current deals and offers. We regularly feature BOGO deals, discounts on new restaurants, and special dessert promotions.",
    },
    {
      question: "How do I add items to my favorites?",
      answer:
        "Click the heart icon on any food item to add it to your favorites. You can view all your favorite items by clicking 'Favorite' in the side menu drawer.",
    },
    {
      question: "Is there a minimum order value?",
      answer:
        "Minimum order value varies by restaurant. This will be displayed during checkout. Some restaurants may have a minimum order to qualify for delivery.",
    },
    {
      question: "What if my order arrives late or with issues?",
      answer:
        "If you experience any issues with your order, please contact our support team immediately. We offer refunds or replacements for orders that don't meet our quality standards.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Order modifications are only possible before the restaurant starts preparing your order. Contact support immediately if you need to make changes.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is confirmed, you can track its status in real-time. You'll receive updates when the restaurant confirms, starts preparing, and dispatches your order.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we use industry-standard encryption to protect your personal and payment information. Your data is never shared with third parties without your consent.",
    },
    {
      question: "Do you offer vegetarian or dietary options?",
      answer:
        "Many restaurants on our platform offer vegetarian, vegan, and other dietary-specific options. Use the filter options and check individual restaurant menus for these choices.",
    },
  ];

  // Toggle FAQ item expansion
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* FAQ Overlay */}
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>

      {/* FAQ Sidebar */}
      <div className="fixed top-0 right-0 w-full max-w-md h-screen bg-white dark:bg-gray-800 shadow-lg z-40 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            FAQ & Help
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* FAQ Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700"
              >
                {/* Question Header - Clickable */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-left text-sm">
                    {faq.question}
                  </p>
                  <div className="ml-2 flex-shrink-0">
                    {expandedIndex === index ? (
                      <AiOutlineMinus
                        size={18}
                        className="text-orange-600"
                      />
                    ) : (
                      <AiOutlinePlus size={18} className="text-orange-600" />
                    )}
                  </div>
                </button>

                {/* Answer - Expanded */}
                {expandedIndex === index && (
                  <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Contact */}
        <div className="border-t dark:border-gray-700 p-4 bg-orange-50 dark:bg-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Still need help?
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Contact our support team at support@besteats.com or call us at
            +234-XXX-XXXX
          </p>
        </div>
      </div>
    </>
  );
}
