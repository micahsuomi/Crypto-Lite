import React from 'react'

import { DailyPairsHeaderProps } from '../../types'

import './style.scss'

const DailyPairsHeader = ({ dailyPairs }: DailyPairsHeaderProps) => {
  const { fromSymbol, toSymbol, TimeFrom, TimeTo } = dailyPairs
  return (
    <thead>
      <td>Daily Pairs price for {fromSymbol}/{toSymbol} </td>
      <tr className="daily-pairs-header">
        <td>Time From: {TimeFrom}</td>
        <td>Time To: {TimeTo}</td>
      </tr>
      <tr className="daily-pairs-header">
        <td>Close</td>
        <td>High</td>
        <td>Low</td>
        <td>Open</td>
        <td>Time</td>
        <td>Volume From</td>
        <td>Volume To</td>
      </tr>
    </thead>
  )
}

export default DailyPairsHeader
