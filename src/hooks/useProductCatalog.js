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
    let filtered = [...products];

    // TODO: Implement search filtering
    if (searchTerm.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // TODO: Implement category filtering
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // TODO: Implement brand filtering
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // TODO: Implement price range filtering
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // TODO: Implement stock filtering
    if (!showOutOfStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, selectedBrand, priceRange, showOutOfStock]);

  /**
   * Sort filtered products
   * TODO: Implement sorting by different criteria
   */
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    // TODO: Implement sorting logic
    sorted.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'reviews':
          aValue = a.reviews;
          bValue = b.reviews;
          break;
        default:
          return 0;
      }
      
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    
    return sorted;
  }, [filteredProducts, sortBy, sortOrder]);

  /**
   * Paginate sorted products
   * TODO: Implement pagination logic
   */
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, itemsPerPage]);

  /**
   * Calculate pagination info
   * TODO: Implement pagination calculations
   */
  const paginationInfo = useMemo(() => {
    const totalItems = sortedProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return {
      totalItems,
      totalPages,
      currentPage,
      startItem,
      endItem,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1
    };
  }, [sortedProducts.length, currentPage, itemsPerPage]);

  /**
   * Search products
   * TODO: Implement search functionality
   */
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when searching
  }, []);

  /**
   * Filter by category
   * TODO: Implement category filtering
   */
  const handleCategoryFilter = useCallback((category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  /**
   * Filter by brand
   * TODO: Implement brand filtering
   */
  const handleBrandFilter = useCallback((brand) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  }, []);

  /**
   * Filter by price range
   * TODO: Implement price range filtering
   */
  const handlePriceRangeFilter = useCallback((min, max) => {
    setPriceRange({ min, max });
    setCurrentPage(1);
  }, []);

  /**
   * Sort products
   * TODO: Implement sorting functionality
   */
  const handleSort = useCallback((field, order) => {
    setSortBy(field);
    setSortOrder(order);
    setCurrentPage(1);
  }, []);

  /**
   * Toggle out of stock visibility
   * TODO: Implement stock filter toggle
   */
  const handleStockFilter = useCallback((show) => {
    setShowOutOfStock(show);
    setCurrentPage(1);
  }, []);

  /**
   * Navigate pagination
   * TODO: Implement pagination navigation
   */
  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= paginationInfo.totalPages) {
      setCurrentPage(page);
    }
  }, [paginationInfo.totalPages]);

  const goToNextPage = useCallback(() => {
    if (paginationInfo.hasNextPage) {
      setCurrentPage(prev => prev + 1);
    }
  }, [paginationInfo.hasNextPage]);

  const goToPreviousPage = useCallback(() => {
    if (paginationInfo.hasPreviousPage) {
      setCurrentPage(prev => prev - 1);
    }
  }, [paginationInfo.hasPreviousPage]);

  /**
   * Clear all filters
   * TODO: Implement filter reset
   */
  const clearFilters = useCallback(() => {
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
    const activeFilters = [];
    
    if (searchTerm) activeFilters.push(`Search: "${searchTerm}"`);
    if (selectedCategory) activeFilters.push(`Category: ${selectedCategory}`);
    if (selectedBrand) activeFilters.push(`Brand: ${selectedBrand}`);
    if (priceRange.min > 0 || priceRange.max < 1000) {
      activeFilters.push(`Price: $${priceRange.min} - $${priceRange.max}`);
    }
    if (!showOutOfStock) activeFilters.push('In Stock Only');
    
    return {
      activeFilters,
      hasActiveFilters: activeFilters.length > 0,
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