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

import { DailyEchangeVolChartProps } from '../../types'

import './style.scss'

const DailyExchangeVolChart = ({ data, title }: DailyEchangeVolChartProps) => {
  return (
    <Paper className="chart-container">
      <Chart data={data.Data}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="volume" argumentField="time" />

        <EventTracker />
        <Tooltip />
        <Title text={`Daily Exchange Vol ${title}`} />
        <Animation />
      </Chart>
    </Paper>
  )
}

export default DailyExchangeVolChart
