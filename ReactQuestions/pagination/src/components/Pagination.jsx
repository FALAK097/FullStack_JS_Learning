import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={i === currentPage ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-button">
        Previous
      </button>
      {renderPagination()}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="pagination-button">
        Next
      </button>
    </div>
  );
};

export default Pagination;
