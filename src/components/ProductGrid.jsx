import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onViewDetails, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="product-grid">
        {/* TODO: Implement loading skeleton */}
        
        {Array(8).fill().map((_, index) => (
          <div key={index} className="product-card skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
              <div className="skeleton-line"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="no-products">
        <div className="no-products-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try adjusting your search criteria or filters</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;