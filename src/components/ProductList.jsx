import React from "react";
import ProductCard from "./ProductCard";


export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: true },
  { id: 3, name: "Bread", price: "$1.50", category: "Bakery", inStock: true },
  { id: 4, name: "Chicken", price: "$5.00", category: "Meat", inStock: false },
];

const ProductList = ({ products, selectedCategory, addToCart }) => {
  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
