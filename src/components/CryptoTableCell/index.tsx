import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { CryptoTableCellProps } from '../../types'
import './style.scss'

const CryptoTableCell = ({
  sortCrypto,
  isNameReversing,
  isPriceReversing,
  isPercentageChangeReversing,
  isMarketCapReversing,
  isSupplyReversing,
}: CryptoTableCellProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <tr className="crypto-cell">
      <td></td>
      <td className="crypto-cell__item" style={{ color: theme.text }}>
        Symbol
      </td>
      <td className="crypto-cell__item" style={{ color: theme.text }}>
        <button
          value="name"
          onClick={sortCrypto}
        >Name
        </button>
        {isNameReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <button
          value="price"
          onClick={sortCrypto}
        >Price
        </button>
        {isPriceReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <button
          value="percentagechange"
          onClick={sortCrypto}
        >Change 24H
        </button>
        {isPercentageChangeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <button
          value="marketcap"
          onClick={sortCrypto}
        >Market Cap
        </button>
        {isMarketCapReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <button
          value="supply"
          onClick={sortCrypto}
        >Supply
        </button>
        {isSupplyReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
    </tr>
  )
}

export default CryptoTableCell
