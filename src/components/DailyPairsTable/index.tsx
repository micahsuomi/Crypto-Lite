import React, { useContext } from 'react'

import { DailyPairsTableProps } from '../../types'
import DailyPairsItem from '../DailyPairsItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const DailyPairsTable = ({ dailyPairs }: DailyPairsTableProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <table className="daily-pairs-table" style={{ color: theme.text }}>
      <thead>
        <td>Close</td>
        <td>High</td>
        <td>Low</td>
        <td>Open</td>
        <td>Time</td>
        <td>Volume From</td>
        <td>Volume To</td>
      </thead>
      <tbody className="top-volume__table-body">
        {dailyPairs.Data.map((pair: any) => {
          const { close, high, low, open, time, volumefrom, volumeto } = pair
          const unixTime = time
          const timeStamp = new Date(unixTime * 1000)
          return (
            <DailyPairsItem
              close={close}
              high={high}
              low={low}
              open={open}
              time={timeStamp.toDateString()}
              volumeFrom={volumefrom}
              volumeTo={volumeto}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default DailyPairsTable
