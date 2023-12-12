import React from 'react';
import './Pagination.css';

const Pagination = ({ total_pages, current_page, onPageChange }) => {
 const pageNumbers = [];

 for (let i = 1; i <= total_pages; i++) {
    pageNumbers.push(i);
 }

 return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === current_page ? 'page-item active' : 'page-item'}>
            <button className="page-link" onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
 );
};

export default Pagination;