import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-400">
      <Navbar onSearch={setSearchTerm} />
      <Hero />
      <HeadlineCards />
      <Food searchTerm={searchTerm} />
      <Category />
    </div>
  );
}

export default App;
