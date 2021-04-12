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
  result,
  isSaveButtonShowing,
  saveCurrencyConversion,
}: CurrencyConverterFormUsdProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <form className="currency-converter-form" onSubmit={handleSubmit}>
      <div className="currency-converter-form__header">
        <label htmlFor="amount" style={{ color: theme.text }}>
          Amount in Crypto
        </label>
        <button className="switch" onClick={handleSwitch}>
          <i className="fas fa-long-arrow-alt-down fa-2x arrow"></i>
          <i className="fas fa-long-arrow-alt-up fa-2x arrow"></i>
        </button>
      </div>

      <div className="inputs-arrows__container">
        <input
          type="number"
          name="amount"
          value={amount}
          placeholder="amount in crypto"
          onChange={handleChange}
          style={{ backgroundColor: theme.inputColor, color: theme.text }}
        />
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
            {crypto.CoinInfo.FullName}
            {crypto.DISPLAY.USD.PRICE}
          </option>
        ))}
      </select>
      <button
        className="calculate-btn grow"
        style={{ backgroundColor: theme.bigBtnColor }}
      >
        Calculate
      </button>
      {isSaveButtonShowing && (
        <button
          onClick={saveCurrencyConversion}
          className="currency-converter-form__btn-save"
        >
          Save Currency
        </button>
      )}
      <div className="warning">{warning}</div>
      <div className="result-container">
        <h2>{result > 0 && result + ' USD'}</h2>
      </div>
    </form>
  )
}

export default CurrencyConverterFormUsd
