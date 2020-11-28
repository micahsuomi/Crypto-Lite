import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { ExchangeTableCellProps } from '../../types'
import './style.scss'

const ExchangesTableCell = ({
  sortExchange,
  isNameReversing,
  isVolumeReversing,
  isGradePointsReversing,
  isAverageRateReversing,
}: ExchangeTableCellProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <tr className="cell">
      <td></td>
      <td className="cell__item" style={{ color: theme.text }}>
        <form className="cell__form">
          <label htmlFor="name">Name</label>
          <input
            type="checkbox"
            value="name"
            className="sort__input"
            onChange={sortExchange}
          />
        </form>

        {isNameReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>

      <td className="cell__item grow" style={{ color: theme.text }}>
        <form className="cell__form">
          <label htmlFor="name">Volume</label>
          <input
            type="checkbox"
            value="volume"
            className="sort__input"
            onChange={sortExchange}
          />
        </form>
        {isVolumeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" style={{ color: theme.text }}>
        <form className="cell__form">
          <label htmlFor="name">Country</label>
          <input
            type="checkbox"
            value="country"
            className="sort__input"
            onChange={sortExchange}
          />
        </form>
        {isVolumeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" style={{ color: theme.text }}>
        <form className="cell__form">
          <label htmlFor="name">Grade</label>
          <input
            type="checkbox"
            value="grade"
            className="sort__input"
            onChange={sortExchange}
          />
        </form>
        {isVolumeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" style={{ color: theme.text }}>
        <form className="cell__form">
          <label htmlFor="name">Grade Points</label>
          <input
            type="checkbox"
            value="gradepoints"
            className="sort__input"
            onChange={sortExchange}
          />
        </form>
        {isGradePointsReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" style={{ color: theme.text }}>
        <form className="cell__form">
          <label htmlFor="name">Average Rate</label>
          <input
            type="checkbox"
            value="averagerate"
            className="sort__input"
            onChange={sortExchange}
          />
        </form>
        {isAverageRateReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
    </tr>
  )
}

export default ExchangesTableCell
