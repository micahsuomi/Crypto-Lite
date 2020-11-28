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
        <form className="crypto-cell__form">
          <label htmlFor="name">Name</label>
          <input
            type="checkbox"
            value="name"
            className="sort__input"
            onChange={sortCrypto}
          />
        </form>

        {isNameReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>

      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <form className="crypto-cell__form">
          <label htmlFor="name">Price</label>
          <input
            type="checkbox"
            value="price"
            className="sort__input"
            onChange={sortCrypto}
          />
        </form>
        {isPriceReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <form className="crypto-cell__form">
          <label htmlFor="name">Change 24H</label>
          <input
            type="checkbox"
            value="percentagechange"
            className="sort__input"
            onChange={sortCrypto}
          />
        </form>
        {isPercentageChangeReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <form className="crypto-cell__form">
          <label htmlFor="name">Market Cap</label>
          <input
            type="checkbox"
            value="marketcap"
            className="sort__input"
            onChange={sortCrypto}
          />
        </form>
        {isMarketCapReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </td>
      <td className="crypto-cell__item grow" style={{ color: theme.text }}>
        <form className="crypto-cell__form">
          <label htmlFor="name">Supply</label>
          <input
            type="checkbox"
            value="supply"
            className="sort__input"
            onChange={sortCrypto}
          />
        </form>
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
