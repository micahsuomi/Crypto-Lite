import React, { useContext } from 'react'

import { DailyPairsTableProps } from '../../types'
import DailyPairsItem from '../DailyPairsItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const DailyPairsTable = ({ dailyPairs }: DailyPairsTableProps) => {
  const { theme } = useContext(ThemeContext)
  
  const dailyPairsList = dailyPairs.Data?.map((p: any) => (
    <DailyPairsItem  
      close={p.close}
      high={p.high}
      low={p.low}
      open={p.open}
      time={p.time}
      volumeFrom={p.volumefrom} 
      volumeTo={p.volumeto} />
  ))

  return (
    <table className="daily-pairs-table" style={{ color: theme.text}}>
      <thead>
      </thead>
      <tbody className="top-volume__table-body">
        {dailyPairsList} 
      </tbody> 
      
    </table>
  )
}

export default DailyPairsTable
