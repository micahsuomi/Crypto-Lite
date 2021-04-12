import React, { useContext } from 'react'

import { CurrencyConverterFormCryptoProps } from '../../types'
import { ThemeContext } from '../../contexts'
import Image from '../Image'

import './style.scss'

const CurrencyConverterFormCrypto = ({
  cryptos,
  handleSubmit,
  amount,
  handleChange,
  selectCurrency,
  handleSwitch,
  warning,
  result,
  resultSymbol,
  image,
  isSaveButtonShowing,
  saveCurrencyConversion,
}: CurrencyConverterFormCryptoProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <form className="currency-converter-form" onSubmit={handleSubmit}>
      <div className="currency-converter-form__header">
        <label htmlFor="Amount in USD" style={{ color: theme.text }}>
          Amount in USD
        </label>
        <button className="switch" onClick={handleSwitch}>
          <i className="fas fa-long-arrow-alt-up fa-2x arrow"></i>
          <i className="fas fa-long-arrow-alt-down fa-2x arrow"></i>
        </button>
      </div>

      <div className="inputs-arrows__container">
        <input
          type="number"
          name="amount"
          value={amount}
          placeholder="amount in $"
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
        {cryptos &&
          cryptos.map((crypto: any) => (
            <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}{' '}
              {crypto.RAW !== undefined && crypto.RAW.USD.PRICE}
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
        <>
          <button
            onClick={saveCurrencyConversion}
            className="currency-converter-form__btn-save"
          >
            Save Currency
          </button>
        </>
      )}
      <div className="warning">{warning}</div>
      <div className="result-container">
        {result > 0 && (
          <>
            <Image image={image} name={resultSymbol} small />
            <h2 className="result-symbol">
              {result} {resultSymbol}
            </h2>
          </>
        )}
      </div>
    </form>
  )
}

export default CurrencyConverterFormCrypto
