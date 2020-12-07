import React from 'react'

import { DailyPairsItemProps } from '../../types'

import './style.scss'

const DailyPairsItem = ({
  close,
  high,
  low,
  open,
  time,
  volumeFrom,
  volumeTo
}: DailyPairsItemProps) => {
  return (
    <tr className="daily-pairs-row">
      <td>{close}</td>
      <td>{high}</td>
      <td>{low}</td>
      <td>{open}</td>
      <td>{time}</td>
      <td>{volumeFrom}</td>
      <td>{volumeTo}</td>

    </tr>
  )
}

export default DailyPairsItem
