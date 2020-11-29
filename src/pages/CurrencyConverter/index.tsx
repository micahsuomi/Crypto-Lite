import React, { useState, useContext } from 'react'

import { ThemeContext } from '../../contexts'

import './style.scss'

const CurrencyConverter = ({ cryptos }: any) => {
  const [query, setQuery] = useState('')
  const [amount, setAmount] = useState(0)
  const [warning, setWarning] = useState('')
  const [resultSymbol, setResultSymbol] = useState('')
  const [result, setResult] = useState(0)
  const [isSwitched, setIsSwitched] = useState(true)
  const { theme } = useContext(ThemeContext)

  const handleSwitch = () => {
    setIsSwitched(!isSwitched)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (amount < 1 || query === '') {
      setWarning('Please fill both values')
      setResult(0)
    } else {
      for (const crypto of cryptos) {
        let symbol = crypto.CoinInfo.Name
        if (query === symbol) {
          let price = crypto.RAW.USD.PRICE
          console.log(amount, price)
          if (isSwitched) {
            let result = amount / price
            console.log(result)
            amount < 1 ? (result = 0) : setResult(result)
            setResultSymbol(symbol)
            setWarning('')
          } else {
            let result = Math.round(amount * price)
            amount < 1 ? (result = 0) : setResult(result)
            setWarning('')
          }
        }
      }
    }
  }

  const selectCurrency = (e: any) => {
    let { value } = e.target
    setQuery(value)
    console.log(query)
  }

  const handleChange = (e: any) => {
    let { value } = e.target
    setAmount(value)
    console.log(amount)
  }

  return (
    <div
      className="currency-converter"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <h1 className="currency-converter__header" style={{ color: theme.text }}>
        Currency Converter
      </h1>

      {isSwitched ? (
        <form className="currency-converter__form" onSubmit={handleSubmit} 
          style={{ backgroundImage: theme.currencyCalcColor }}>
          <label htmlFor="Amount in USD" style={{ color: theme.text }}>
              Amount in USD
          </label>
          <div className="inputs-arrows__container">
            <input
              type="text"
              name="amount"
              value={amount}
              placeholder="amount in $"
              onChange={handleChange}
              style={{ backgroundColor: theme.inputColor, color: theme.text }}
            />
            <button className="switch" onClick={handleSwitch}>
              <i className="fas fa-long-arrow-alt-up fa-3x arrow"></i>
              <i className="fas fa-long-arrow-alt-down fa-3x arrow"></i>
            </button>
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
              <option value={crypto.CoinInfo.Name}>
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
            {result > 0 && (
              <h2 className="result-symbol">
                {result} {resultSymbol}
              </h2>
            )}
          </div>
        </form>
      ) : (
        <form className="currency-converter__form" onSubmit={handleSubmit}>
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
              <option value={crypto.CoinInfo.Name}>
                {crypto.CoinInfo.FullName}
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
      )}
    </div>
  )
}

export default CurrencyConverter
