import React, { useContext } from 'react'

import { PaginationProps } from '../../types'
import { ThemeContext } from '../../contexts'

import './style.scss'

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}: PaginationProps) => {
  const { theme } = useContext(ThemeContext)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div
      className="pagination"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <div className="pagination__header">
        <h4 style={{ color: theme.text }}>Page {currentPage}</h4>
      </div>
      <ul className="pagination__wrapper">
        {pageNumbers.map((num) => (
          <li key={num} className="pagination__item">
            <button
              onClick={() => paginate(num)}
              className="pagination__btn grow"
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
