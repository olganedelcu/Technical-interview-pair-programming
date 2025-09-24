import React, { useState } from 'react';
import { useProductCatalog } from '../hooks/useProductCatalog';
import SearchAndFilters from './SearchAndFilters';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import ProductModal from './ProductModal';

/**
 * Main ProductCatalog component
 * TODO: Integrate all product catalog functionality
 */
const ProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    products,
    searchTerm,
    selectedCategory,
    selectedBrand,
    priceRange,
    sortBy,
    sortOrder,
    showOutOfStock,
    paginationInfo,
    filterSummary,
    handleSearch,
    handleCategoryFilter,
    handleBrandFilter,
    handlePriceRangeFilter,
    handleSort,
    handleStockFilter,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    clearFilters
  } = useProductCatalog();

  /**
   * Handle product detail view
   * TODO: Implement product modal functionality
   */
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="product-catalog">
      {/* TODO: Search and Filters Component */}
      <SearchAndFilters
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        priceRange={priceRange}
        sortBy={sortBy}
        sortOrder={sortOrder}
        showOutOfStock={showOutOfStock}
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onBrandFilter={handleBrandFilter}
        onPriceRangeFilter={handlePriceRangeFilter}
        onSort={handleSort}
        onStockFilter={handleStockFilter}
        onClearFilters={clearFilters}
        filterSummary={filterSummary}
      />

      {/* TODO: Product Grid Component */}
      <ProductGrid
        products={products}
        onViewDetails={handleViewDetails}
      />

      {/* TODO: Pagination Component */}
      <Pagination
        paginationInfo={paginationInfo}
        onPageChange={goToPage}
        onNextPage={goToNextPage}
        onPreviousPage={goToPreviousPage}
      />

      {/* TODO: Product Modal Component */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProductCatalog;