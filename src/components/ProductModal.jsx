import React, { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

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

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Added ${quantity} of ${product.name} to cart`);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="product-modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-left">
            <div className="product-image-section">
              <div className="main-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="modal-product-image"
                />
                {!product.inStock && (
                  <div className="modal-out-of-stock-overlay">
                    <span>Out of Stock</span>
                  </div>
                )}
              </div>
              
              {/* TODO: Add thumbnail gallery for multiple images */}
              <div className="image-thumbnails">
                <img
                  src={product.image}
                  alt={product.name}
                  className="thumbnail active"
                />
              </div>
            </div>
          </div>

          <div className="modal-right">
            <div className="product-details">
              <div className="product-header">
                <h2 className="modal-product-name">{product.name}</h2>
                <div className="product-meta">
                  <span className="product-brand">{product.brand}</span>
                  <span className="product-category">{product.category}</span>
                </div>
              </div>

              <div className="product-rating">
                <div className="stars">
                  {renderStars(product.rating)}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="product-price-section">
                <div className="current-price">{formatPrice(product.price)}</div>
                {/* TODO: Add original price and discount if applicable */}
              </div>

              <div className="product-description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>Features</h3>
                <div className="tags-list">
                  {product.tags.map(tag => (
                    <span key={tag} className="feature-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* TODO: Add product specifications section */}
              <div className="product-specs">
                <h3>Specifications</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Brand:</span>
                    <span className="spec-value">{product.brand}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Category:</span>
                    <span className="spec-value">{product.category}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Rating:</span>
                    <span className="spec-value">{product.rating}/5</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Reviews:</span>
                    <span className="spec-value">{product.reviews}</span>
                  </div>
                </div>
              </div>

              <div className="product-actions">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    disabled={!product.inStock}
                  />
                </div>

                <div className="action-buttons">
                  <button
                    className={`add-to-cart-btn large ${!product.inStock ? 'disabled' : ''}`}
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? `Add ${quantity} to Cart` : 'Out of Stock'}
                  </button>
                  
                  {/* TODO: Add wishlist functionality */}
                  <button className="wishlist-btn">
                    ♡ Add to Wishlist
                  </button>
                </div>
              </div>

              <div className="shipping-info">
                <div className="shipping-item">
                  <span className="shipping-icon">🚚</span>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="shipping-item">
                  <span className="shipping-icon">↩️</span>
                  <span>30-day return policy</span>
                </div>
                <div className="shipping-item">
                  <span className="shipping-icon">🛡️</span>
                  <span>1-year warranty included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;