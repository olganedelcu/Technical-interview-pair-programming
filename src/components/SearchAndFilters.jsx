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

  // TODO: Implement search input handler
  const handleSearchChange = (e) => {
    // TODO: Call onSearch with input value
    onSearch(e.target.value);
  };

  // TODO: Implement category filter handler
  const handleCategoryChange = (e) => {
    // TODO: Call onCategoryFilter with selected value
    onCategoryFilter(e.target.value);
  };

  // TODO: Implement brand filter handler
  const handleBrandChange = (e) => {
    // TODO: Call onBrandFilter with selected value
    onBrandFilter(e.target.value);
  };

  // TODO: Implement price range handler
  const handlePriceChange = (e) => {
    // TODO: Update price range based on min/max inputs
    // TODO: Call onPriceRangeFilter with new range
    const { name, value } = e.target;
    const newRange = { ...priceRange, [name]: parseInt(value) };
    onPriceRangeFilter(newRange.min, newRange.max);
  };

  // TODO: Implement sort handler
  const handleSortChange = (e) => {
    // TODO: Parse sort field and order from select value
    // TODO: Call onSort with field and order
    const [field, order] = e.target.value.split('-');
    onSort(field, order);
  };

  // TODO: Implement stock visibility handler
  const handleStockChange = (e) => {
    // TODO: Call onStockFilter with checkbox state
    onStockFilter(e.target.checked);
  };

  return (
    <div className="search-and-filters">
      {/* TODO: Search Section */}
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

      {/* TODO: Filters Section */}
      <div className="filters-section">
        <div className="filter-row">
          {/* TODO: Category Filter */}
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

          {/* TODO: Brand Filter */}
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

          {/* TODO: Sort Options */}
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
          {/* TODO: Price Range Filter */}
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

          {/* TODO: Stock Visibility Filter */}
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

          {/* TODO: Clear Filters Button */}
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

      {/* TODO: Display filter summary and results count */}
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