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
        <button value="name" onClick={sortCrypto} style={{ color: theme.text }}>
          Name
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
          style={{ color: theme.text }}
        >
          Price
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
          style={{ color: theme.text }}
        >
          24h%
        </button>
        {isPercentageChangeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td
        className="crypto-cell__item grow hide-mobile"
        style={{ color: theme.text }}
      >
        <button
          value="marketcap"
          onClick={sortCrypto}
          style={{ color: theme.text }}
        >
          Market Cap
        </button>
        {isMarketCapReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td
        className="crypto-cell__item grow hide-mobile"
        style={{ color: theme.text }}
      >
        <button
          value="supply"
          onClick={sortCrypto}
          style={{ color: theme.text }}
        >
          Circulating Supply
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
