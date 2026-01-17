import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, selectedCategory, addToCart }) => {
  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
