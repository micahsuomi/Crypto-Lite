import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState, DailyEchangeVolFormProps } from '../../types'
import { fetchDailyExchangeVol } from '../../redux/actions/crypto'

import './style.scss'

const DailyPairsForm = ({
  showDailyExchangeVolGraphOnSubmit,
}: DailyEchangeVolFormProps) => {
  const dispatch = useDispatch()
  const exchanges = useSelector((state: AppState) => state.cryptos.exchanges)
  const [dailyExchangeQuery, setDailyExchangeQuery] = useState({
    exchange: '',
    symbol: '',
    limit: 10,
  })
  const { symbol, limit } = dailyExchangeQuery

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(dailyExchangeQuery)
    dispatch(fetchDailyExchangeVol(dailyExchangeQuery))
    setTimeout(() => {
      showDailyExchangeVolGraphOnSubmit(dailyExchangeQuery)
    }, 2000)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setDailyExchangeQuery({ ...dailyExchangeQuery, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit} className="daily-exchange-vol-form">
      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Exchange</label>
        {/* <input
          value={exchange}
          name="exchange"
          onChange={handleChange}
          placeholder="e.g. Binance"
        /> */}
        <select
          className="select-currency"
          onBlur={handleChange}
          required
          name="exchange"
          // onBlur={selectCurrency}
          // style={{ backgroundColor: theme.inputColor, color: theme.text }}
        >
          <option>---Select Exchange</option>
          {exchanges.map((exchange: any) => (
            <option key={exchange.Id} value={exchange.Name}>
              {exchange.Name}
            </option>
          ))}
        </select>
      </div>

      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Symbol</label>
        <input
          value={symbol}
          name="symbol"
          onChange={handleChange}
          placeholder="e.g. BTC"
          required
        />
      </div>

      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Limit</label>
        <input
          type="number"
          value={limit}
          name="limit"
          onChange={handleChange}
          placeholder="min 10, max 2000"
          required
        />
      </div>
      <button>Search</button>
    </form>
  )
}

export default DailyPairsForm
