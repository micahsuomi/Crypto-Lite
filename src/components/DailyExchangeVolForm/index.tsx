import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchDailyExchangeVol } from '../../redux/actions/crypto'

import './style.scss'

const DailyPairsForm = () => {
  const dispatch = useDispatch()
  const [dailyExchangeQuery, setDailyExchangeQuery] = useState({
    exchange: '',
    symbol: '',
    limit: '',
    aggregate: ''
  })

  
  const { exchange, symbol, limit, aggregate } = dailyExchangeQuery
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(dailyExchangeQuery)
    dispatch(fetchDailyExchangeVol(dailyExchangeQuery))
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setDailyExchangeQuery({...dailyExchangeQuery, [name]: value}) 
  }

  return (
    <form onSubmit={handleSubmit}
      className="daily-exchange-vol-form">
      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Exchange</label>
        <input 
          value={exchange}
          name="exchange"
          onChange={handleChange}
          placeholder='e.g. Binance'/>
      </div>

      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Symbol</label>
        <input
          value={symbol}
          name="symbol"
          onChange={handleChange}
          placeholder='e.g. BTC'/>
      </div>

      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Limit</label>
        <input 
          value={limit}
          name="limit"
          onChange={handleChange}
          placeholder='min 10, max 2000'/>
      </div>

      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Aggregate</label>
        <input 
          value={aggregate}
          name="aggregate"
          onChange={handleChange}
          placeholder='min 10, max 2000'/>
      </div>

      <button>Search</button>
    </form> 
  )
}

export default DailyPairsForm
