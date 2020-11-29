import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { ExchangeTableCellProps } from '../../types'
import './style.scss'

const ExchangesTableCell = ({
  sortExchange,
  isNameReversing,
  isVolumeReversing,
  isCountryReversing,
  isGradeReversing,
  isGradePointsReversing,
  isAverageRateReversing,
}: ExchangeTableCellProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <tr className="cell">
      <td></td>
      <td className="cell__item" style={{ color: theme.text }}>
        <button
          value="name"
          onClick={sortExchange}
        >Name
        </button>
        {isNameReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>

      <td className="cell__item grow" style={{ color: theme.text }}>
        <button
          value="volume"
          onClick={sortExchange}
        >Volume
        </button>
        {isVolumeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" style={{ color: theme.text }}>
        <button
          value="country"
          onClick={sortExchange}
        >Country
        </button>
        {isCountryReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" style={{ color: theme.text }}>
        <button
          value="grade"
          onClick={sortExchange}
        >Grade
        </button>
        {isGradeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" 
        style={{ color: theme.text }}>
        <button
          value="gradepoints"
          onClick={sortExchange}
        >Grade Points
        </button>
        {isGradePointsReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="cell__item grow" 
        style={{ color: theme.text }}>
        <button
          value="averagerating"
          onClick={sortExchange}
        >Rating
        </button>
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
