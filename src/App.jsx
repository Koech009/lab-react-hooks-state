import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  //sample products
  const products = [
    { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
    { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: true },
    { id: 3, name: "Bread", price: "$1.50", category: "Bakery", inStock: true },
    { id: 4, name: "Chicken", price: "$5.00", category: "Meat", inStock: false },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Filter products, add to cart, and toggle dark mode.</p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category Filter Dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
      </select>

      {/* Product List */}
      <ProductList
        products={products}
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
