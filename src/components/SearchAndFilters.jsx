import React from 'react';
import { getCategories, getBrands } from '../data/products';

const SearchAndFilters = ({
  searchTerm,
  selectedCategory,
  selectedBrand,
  priceRange,
  sortBy,
  sortOrder,
  showOutOfStock,
  onSearch,
  onCategoryFilter,
  onBrandFilter,
  onPriceRangeFilter,
  onSort,
  onStockFilter,
  onClearFilters,
  filterSummary
}) => {
  const categories = getCategories();
  const brands = getBrands();

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    onCategoryFilter(e.target.value);
  };

  const handleBrandChange = (e) => {
    onBrandFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newRange = { ...priceRange, [name]: parseInt(value) };
    onPriceRangeFilter(newRange.min, newRange.max);
  };

  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split('-');
    onSort(field, order);
  };

  const handleStockChange = (e) => {
    onStockFilter(e.target.checked);
  };

  return (
    <div className="search-and-filters">
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="filters-section">
        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="brand">Brand</label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort">Sort By</label>
            <select
              id="sort"
              value={`${sortBy}-${sortOrder}`}
              onChange={handleSortChange}
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="rating-desc">Rating (High to Low)</option>
              <option value="reviews-desc">Most Reviews</option>
            </select>
          </div>
        </div>

        <div className="filter-row">
          <div className="price-range-group">
            <label>Price Range</label>
            <div className="price-inputs">
              <input
                type="number"
                name="min"
                placeholder="Min"
                value={priceRange.min}
                onChange={handlePriceChange}
                min="0"
                max="1000"
              />
              <span>to</span>
              <input
                type="number"
                name="max"
                placeholder="Max"
                value={priceRange.max}
                onChange={handlePriceChange}
                min="0"
                max="1000"
              />
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showOutOfStock}
                onChange={handleStockChange}
              />
              Show out of stock items
            </label>
          </div>

          <div className="filter-actions">
            <button
              className="clear-filters-btn"
              onClick={onClearFilters}
              disabled={!filterSummary.hasActiveFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* TODO: Display filter summary */}
      {filterSummary.hasActiveFilters && (
        <div className="filter-summary">
          <div className="active-filters">
            {filterSummary.activeFilters.map((filter, index) => (
              <span key={index} className="filter-tag">
                {filter}
              </span>
            ))}
          </div>
          <div className="results-count">
            {filterSummary.resultCount} results found
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;