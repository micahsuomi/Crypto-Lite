import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTopFiveSymbols } from '../../redux/actions/crypto'

import './style.scss'

const TopFiveSymbolsForm = (props: any) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(fetchTopFiveSymbols(query))
    setTimeout(() => {
      props.showTopFiveSymbolsGraphOnSubmit()
    }, 2000)
  }

  const handleChange = (e: any) => {
    const { value } = e.target
    setQuery(value)
  }

  return (
    <form onSubmit={handleSubmit} className="daily-exchange-vol-form">
      <div className="daily-pairs-form__input-topics">
        <label htmlFor="from symbol">Exchange</label>
        <input
          value={query}
          name="query"
          onChange={handleChange}
          placeholder="e.g. Binance"
        />
      </div>
      <button>Search</button>
    </form>
  )
}

export default TopFiveSymbolsForm
