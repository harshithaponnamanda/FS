import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import foodItems from "../data/foodItems";

const categories = ["All", "Snacks", "Meals", "Drinks"];

function Menu({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // useEffect: runs once when the page loads to set the browser tab title
  useEffect(() => {
    document.title = "Menu - Smart Canteen";
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h1>Menu</h1>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "filter active" : "filter"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredItems.map((item) => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
