import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchDailyExchangeVol } from '../../redux/actions/crypto'

import './style.scss'

const DailyPairsForm = (props: any) => {
  const dispatch = useDispatch()
  const [dailyExchangeQuery, setDailyExchangeQuery] = useState({
    exchange: '',
    symbol: '',
    limit: 10,
  })

  const { exchange, symbol, limit } = dailyExchangeQuery
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(fetchDailyExchangeVol(dailyExchangeQuery))
    setTimeout(() => {
      props.showDailyExchangeVolGraphOnSubmit()
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
        <input
          value={exchange}
          name="exchange"
          onChange={handleChange}
          placeholder="e.g. Binance"
        />
      </div>

      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Symbol</label>
        <input
          value={symbol}
          name="symbol"
          onChange={handleChange}
          placeholder="e.g. BTC"
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
        />
      </div>
      <button>Search</button>
    </form>
  )
}

export default DailyPairsForm
