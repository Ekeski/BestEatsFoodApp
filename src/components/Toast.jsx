import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Toast({ message, isVisible, onClose }) {
  // Auto-close toast after 2 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  // Don't render if toast is not visible
  if (!isVisible) return null;

  return (
    // Toast container - fixed at top center of screen
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      {/* Toast content with animation */}
      <div
        className={`bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-out transition-opacity duration-300`}
      >
        {/* Success icon */}
        <AiOutlineCheckCircle size={20} />
        {/* Toast message */}
        <p className="font-semibold">{message}</p>
      </div>
    </div>
  );
}
