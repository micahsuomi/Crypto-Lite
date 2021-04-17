import * as React from 'react'
import { Paper } from '@material-ui/core'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui'
import { EventTracker } from '@devexpress/dx-react-chart'

import { DailyPairsChartVolumeProps } from '../../types'

import './style.scss'

const DailyPairsChartVolume = ({ dailyPairs }: DailyPairsChartVolumeProps) => {
  // const dailyPairs = useSelector((state: AppState) => state.cryptos.dailyPairs)
  // console.log(dailyPairs)

  // const { fromSymbol, toSymbol } = dailyPairs
  return (
    <Paper className="chart-container">
      <Chart data={dailyPairs}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries
          valueField={'open'}
          argumentField="time"
          color="var(--primary)"
        />
        <EventTracker />
        <Tooltip />
        {/* <Animation /> */}
      </Chart>
    </Paper>
  )
}

export default DailyPairsChartVolume
