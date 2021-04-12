import React from 'react'
import { Paper } from '@material-ui/core'
import {
  Chart,
  BarSeries,
  Legend,
  Tooltip,
  Title,
} from '@devexpress/dx-react-chart-material-ui'
import { EventTracker, Animation } from '@devexpress/dx-react-chart'

import { useSelector } from 'react-redux'
import { AppState } from '../../types'

import './style.scss'

const TopFiveSymbolsChart = () => {
  const topFiveSymbols = useSelector(
    (state: AppState) => state.cryptos.topFiveSymbols
  )
  const { exchange } = topFiveSymbols
  return (
    <Paper className="chart-container">
      <Chart data={topFiveSymbols.Data}>
        {/* {
          topFiveSymbols.Data.map((s: any) => ( */}
        <BarSeries
          name="fromSymbol"
          valueField="volume"
          argumentField="fromSymbol"
        />
        {/* ))
        } */}
        <Legend />
        <EventTracker />
        <Tooltip />
        <Title text={`Top Five Symbols ${exchange}`} />
        <Animation />
      </Chart>
    </Paper>
  )
}

export default TopFiveSymbolsChart
