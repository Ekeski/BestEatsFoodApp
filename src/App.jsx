import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Navbar onSearch={setSearchTerm} />
      <Hero />
      <HeadlineCards />
      <Food searchTerm={searchTerm} />
      <Category />
    </div>
  );
}

export default App;
