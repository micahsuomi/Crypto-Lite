import React, { useContext } from 'react'

import { CurrencyConverterFormUsdProps } from '../../types'
import { ThemeContext } from '../../contexts'

import './style.scss'

const CurrencyConverterFormUsd = ({
  cryptos,
  handleSubmit,
  amount,
  handleChange,
  selectCurrency,
  handleSwitch,
  warning,
  result
}: CurrencyConverterFormUsdProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <form
      className="currency-converter-form"
      onSubmit={handleSubmit}
      style={{ backgroundImage: theme.currencyCalcColor }}
    >
      <div>
        <label htmlFor="amount" style={{ color: theme.text }}>
              Amount in Crypto
        </label>
        <div className="inputs-arrows__container">
          <input
            type="text"
            name="amount"
            value={amount}
            placeholder="amount in crypto"
            onChange={handleChange}
            style={{ backgroundColor: theme.inputColor, color: theme.text }}
          />
          <button className="switch" onClick={handleSwitch}>
            <i className="fas fa-long-arrow-alt-down fa-3x arrow"></i>
            <i className="fas fa-long-arrow-alt-up fa-3x arrow"></i>
          </button>
        </div>
      </div>

      <label htmlFor="currency" style={{ color: theme.text }}>
            Currency
      </label>
      <select
        className="select-currency"
        onBlur={selectCurrency}
        style={{ backgroundColor: theme.inputColor, color: theme.text }}
      >
        <option>---Choose Currency</option>
        {cryptos.map((crypto: any) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName} {crypto.DISPLAY.USD.PRICE}
          </option>
        ))}
      </select>
      <div className="btn-arrow__container">
        <button
          className="calculate-btn"
          style={{ backgroundColor: theme.bigBtnColor }}
        >
              Calculate
        </button>
      </div>
      <div className="warning">{warning}</div>
      <div className="result-container">
        <h2>{result > 0 && result + ' USD'}</h2>
      </div>
    </form>
  )
}

export default CurrencyConverterFormUsd
