import React, { useState } from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image-container">
        {imageError ? (
          <div className="image-placeholder">
            <span>📦</span>
            <p>Image not available</p>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={handleImageError}
            loading="lazy"
          />
        )}
        
        {!product.inStock && (
          <div className="out-of-stock-overlay">
            <span>Out of Stock</span>
          </div>
        )}
        
        <div className="product-overlay">
          <button
            className="view-details-btn"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">{formatPrice(product.price)}</div>
        </div>

        <div className="product-meta">
          <span className="product-brand">{product.brand}</span>
          <span className="product-category">{product.category}</span>
        </div>

        <p className="product-description">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...`
            : product.description
          }
        </p>

        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="product-tags">
          {product.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* TODO: Add to cart functionality */}
        <div className="product-actions">
          <button
            className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;