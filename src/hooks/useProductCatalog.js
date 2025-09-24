import { useState, useMemo, useCallback } from 'react';
import { sampleProducts } from '../data/products';

/**
 * Custom hook for product catalog functionality
 * TODO: Implement search, filtering, sorting, and pagination
 */
export const useProductCatalog = () => {
  const [products] = useState(sampleProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [showOutOfStock, setShowOutOfStock] = useState(true);

  /**
   * Filter products based on search term, category, brand, price, and stock
   * TODO: Implement comprehensive filtering logic
   */
  const filteredProducts = useMemo(() => {
    // TODO: Implement search filtering
    // TODO: Implement category filtering  
    // TODO: Implement brand filtering
    // TODO: Implement price range filtering
    // TODO: Implement stock filtering
    
    // For now, just return all products
    return products;
  }, [products, searchTerm, selectedCategory, selectedBrand, priceRange, showOutOfStock]);

  /**
   * Sort filtered products
   * TODO: Implement sorting by different criteria
   */
  const sortedProducts = useMemo(() => {
    // TODO: Implement sorting logic
    // Sort by: name, price, rating, reviews
    
    // For now, just return filtered products
    return filteredProducts;
  }, [filteredProducts, sortBy, sortOrder]);

  /**
   * Paginate sorted products
   * TODO: Implement pagination logic
   */
  const paginatedProducts = useMemo(() => {
    // TODO: Calculate start and end indices
    // TODO: Slice products for current page
    
    // For now, return first 8 products
    return sortedProducts.slice(0, 8);
  }, [sortedProducts, currentPage, itemsPerPage]);

  /**
   * Calculate pagination info
   * TODO: Implement pagination calculations
   */
  const paginationInfo = useMemo(() => {
    // TODO: Calculate totalPages, startItem, endItem
    // TODO: Calculate hasNextPage, hasPreviousPage
    
    return {
      totalItems: sortedProducts.length,
      totalPages: 1,
      currentPage: 1,
      startItem: 1,
      endItem: Math.min(8, sortedProducts.length),
      hasNextPage: false,
      hasPreviousPage: false
    };
  }, [sortedProducts.length, currentPage, itemsPerPage]);

  /**
   * Search products
   * TODO: Implement search functionality
   */
  const handleSearch = useCallback((term) => {
    // TODO: Set search term and reset to first page
    setSearchTerm(term);
  }, []);

  /**
   * Filter by category
   * TODO: Implement category filtering
   */
  const handleCategoryFilter = useCallback((category) => {
    // TODO: Set category and reset to first page
    setSelectedCategory(category);
  }, []);

  /**
   * Filter by brand
   * TODO: Implement brand filtering
   */
  const handleBrandFilter = useCallback((brand) => {
    // TODO: Set brand and reset to first page
    setSelectedBrand(brand);
  }, []);

  /**
   * Filter by price range
   * TODO: Implement price range filtering
   */
  const handlePriceRangeFilter = useCallback((min, max) => {
    // TODO: Set price range and reset to first page
    setPriceRange({ min, max });
  }, []);

  /**
   * Sort products
   * TODO: Implement sorting functionality
   */
  const handleSort = useCallback((field, order) => {
    // TODO: Set sort criteria and reset to first page
    setSortBy(field);
    setSortOrder(order);
  }, []);

  /**
   * Toggle out of stock visibility
   * TODO: Implement stock filter toggle
   */
  const handleStockFilter = useCallback((show) => {
    // TODO: Set stock visibility and reset to first page
    setShowOutOfStock(show);
  }, []);

  /**
   * Navigate pagination
   * TODO: Implement pagination navigation
   */
  const goToPage = useCallback((page) => {
    // TODO: Validate page number and set current page
    setCurrentPage(page);
  }, []);

  const goToNextPage = useCallback(() => {
    // TODO: Move to next page if available
    setCurrentPage(prev => prev + 1);
  }, []);

  const goToPreviousPage = useCallback(() => {
    // TODO: Move to previous page if available
    setCurrentPage(prev => prev - 1);
  }, []);

  /**
   * Clear all filters
   * TODO: Implement filter reset
   */
  const clearFilters = useCallback(() => {
    // TODO: Reset all filters and search to defaults
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedBrand('');
    setPriceRange({ min: 0, max: 1000 });
    setSortBy('name');
    setSortOrder('asc');
    setCurrentPage(1);
    setShowOutOfStock(true);
  }, []);

  /**
   * Get filter summary
   * TODO: Implement filter summary
   */
  const filterSummary = useMemo(() => {
    // TODO: Create summary of active filters
    // TODO: Count results after filtering
    
    return {
      activeFilters: [],
      hasActiveFilters: false,
      resultCount: sortedProducts.length
    };
  }, [searchTerm, selectedCategory, selectedBrand, priceRange, showOutOfStock, sortedProducts.length]);

  return {
    // Data
    products: paginatedProducts,
    allProducts: products,
    
    // Filter state
    searchTerm,
    selectedCategory,
    selectedBrand,
    priceRange,
    sortBy,
    sortOrder,
    showOutOfStock,
    
    // Pagination
    paginationInfo,
    
    // Filter summary
    filterSummary,
    
    // Actions
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
  };
};