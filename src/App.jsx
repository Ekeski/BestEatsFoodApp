import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Cart from "./components/Cart";

function App() {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // State to manage shopping cart items
  const [cartItems, setCartItems] = useState([]);

  // State to control cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to add item to cart
  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      // If item exists, increase its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        )
      );
    } else {
      // If item is new, add it to cart with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // Function to update item quantity in cart
  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity becomes 0 or less
      removeFromCart(index);
    } else {
      // Update quantity if greater than 0
      setCartItems(
        cartItems.map((item, i) =>
          i === index ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to remove all items from cart at once
  const removeAllFromCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-400">
      {/* Navbar with cart icon and search */}
      <Navbar 
        onSearch={setSearchTerm} 
        cartItemsCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero section */}
      <Hero />

      {/* Headline promotional cards - added addToCart function */}
      <HeadlineCards onAddToCart={addToCart} />

      {/* Food menu section - added addToCart function */}
      <Food searchTerm={searchTerm} onAddToCart={addToCart} />

      {/* Category browse section */}
      <Category />

      {/* Shopping cart sidebar - shows when isCartOpen is true */}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateCartQuantity}
          onRemoveAll={removeAllFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
