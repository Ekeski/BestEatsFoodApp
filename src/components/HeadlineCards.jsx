import { useState } from "react";
import Toast from "./Toast";

export default function HeadlineCards({ onAddToCart }) {
  // State to manage toast notification visibility
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Sample promotional items that can be added to cart
  const promoItems = [
    {
      id: 101,
      name: 'BOGO Deal',
      category: 'promotion',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$$',
    },
    {
      id: 102,
      name: 'New Restaurant Special',
      category: 'promotion',
      image:
        'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
      price: '$$$',
    },
    {
      id: 103,
      name: 'Dessert Special',
      category: 'promotion',
      image:
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
      price: '$',
    },
  ];

  // Handle order button click - add item to cart and show toast
  const handleAddToCart = (item) => {
    onAddToCart(item);
    // Set toast message and show it
    setToastMessage("Added to cart");
    setShowToast(true);
  };

  return (
    <>
      {/* Toast notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* Promotional cards container */}
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Promotional Headline Cards */}
      {promoItems.map((item, index) => (
        <div
          key={index}
          className="rounded-xl relative hover:scale-105 duration-300"
        >
          {/* Dark Overlay on Image */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-4">
            <div>
              {index === 0 && (
                <>
                  <p className="font-bold text-2xl">Sun's Out, BOGO's Out</p>
                  <p>Through 8/26</p>
                </>
              )}
              {index === 1 && (
                <>
                  <p className="font-bold text-2xl">New Restaurants</p>
                  <p>Added Daily</p>
                </>
              )}
              {index === 2 && (
                <>
                  <p className="font-bold text-2xl">We Delivery Desserts</p>
                  <p>Tasty Treats</p>
                </>
              )}
            </div>
            {/* Order Now Button - adds item to cart */}
            <button
              onClick={() => handleAddToCart(item)}
              className="self-end border-white bg-white text-black rounded-lg px-6 py-2 font-semibold hover:bg-slate-200 transition"
            >
              Order Now
            </button>
          </div>

          {/* Promotional Image */}
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={item.image}
            alt={item.name}
          />
        </div>
      ))}
      </div>
    </>
  );
}
