import React from 'react';

const Pagination = ({
  paginationInfo,
  onPageChange,
  onNextPage,
  onPreviousPage
}) => {
  const {
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    startItem,
    endItem,
    totalItems
  } = paginationInfo;

  // TODO: Implement page number generation
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing {startItem}-{endItem} of {totalItems} products
      </div>

      <div className="pagination-controls">
        {/* Previous button */}
        <button
          className="pagination-btn prev"
          onClick={onPreviousPage}
          disabled={!hasPreviousPage}
        >
          ← Previous
        </button>

        {/* First page and ellipsis */}
        {pageNumbers[0] > 1 && (
          <>
            <button
              className="pagination-btn"
              onClick={() => onPageChange(1)}
            >
              1
            </button>
            {pageNumbers[0] > 2 && (
              <span className="pagination-ellipsis">...</span>
            )}
          </>
        )}

        {/* Page numbers */}
        {pageNumbers.map(pageNum => (
          <button
            key={pageNum}
            className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}

        {/* Last page and ellipsis */}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
              <span className="pagination-ellipsis">...</span>
            )}
            <button
              className="pagination-btn"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next button */}
        <button
          className="pagination-btn next"
          onClick={onNextPage}
          disabled={!hasNextPage}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Pagination;