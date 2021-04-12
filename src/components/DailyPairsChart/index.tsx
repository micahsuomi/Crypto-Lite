import * as React from 'react'
import { Paper } from '@material-ui/core'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Tooltip,
  Title,
} from '@devexpress/dx-react-chart-material-ui'
import { EventTracker, Animation } from '@devexpress/dx-react-chart'

import { DailyPairsChartProps } from '../../types'

import './style.scss'

const DailyPairsChart = ({ dailyPairs }: DailyPairsChartProps) => {
  const { fromSymbol, toSymbol } = dailyPairs
  return (
    <Paper className="chart-container">
      <Chart data={dailyPairs.Data}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="open" argumentField="time" />
        <EventTracker />
        <Tooltip />
        <Title
          text={`Daily Pairs Price History for ${fromSymbol}/${toSymbol}`}
        />
        <Animation />
      </Chart>
    </Paper>
  )
}

export default DailyPairsChart
