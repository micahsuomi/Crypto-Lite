import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchDailyPairs } from '../../redux/actions/crypto'

import './style.scss'

const DailyPairsForm = (props: any) => {
  const dispatch = useDispatch()
  const [pair, setPair] = useState({
    pairOne: '',
    pairTwo: '',
    limit: 10,
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(fetchDailyPairs(pair))
    setTimeout(() => {
      props.showDailyGraphOnSubmit()
    }, 2000)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setPair({ ...pair, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit} className="daily-pairs-form">
      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">From Symbol</label>
        <input
          className="pair"
          value={pair.pairOne}
          name="pairOne"
          onChange={handleChange}
          placeholder="e.g. BTC"
        />
      </div>
      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">To Symbol</label>
        <input
          className="pair"
          value={pair.pairTwo}
          name="pairTwo"
          onChange={handleChange}
          placeholder="e.g USD"
        />
      </div>
      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Limit</label>
        <input
          className="pair"
          value={pair.limit}
          name="limit"
          onChange={handleChange}
          placeholder="min 1 max 1000"
        />
      </div>
      <button className="grow">Search</button>
    </form>
  )
}

export default DailyPairsForm
