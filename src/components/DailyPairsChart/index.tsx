import * as React from 'react'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Tooltip,
  Title,
} from '@devexpress/dx-react-chart-material-ui'
import { EventTracker } from '@devexpress/dx-react-chart'

import { DailyPairsChartProps } from '../../types'

import './style.scss'

const DailyPairsChart = ({
  dailyPairs,
  pairOne,
  pairTwo,
}: DailyPairsChartProps) => {
  // const dailyPairs = useSelector((state: AppState) => state.cryptos.dailyPairs)
  // console.log(dailyPairs)

  // const { fromSymbol, toSymbol } = dailyPairs
  return (
    <Chart data={dailyPairs}>
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries
        valueField={'open'}
        argumentField="time"
        color="var(--primary)"
      />
      <EventTracker />
      <Tooltip />
      <Title
        text={`Price History for ${pairOne && pairOne.toUpperCase()}/${
          pairTwo && pairTwo.toUpperCase()
        }`}
      />
      {/* <Animation /> */}
    </Chart>
  )
}

export default DailyPairsChart
