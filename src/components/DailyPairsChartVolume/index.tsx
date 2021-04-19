import * as React from 'react'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  //BarSeries,
  AreaSeries,
  Tooltip,
  Title,
} from '@devexpress/dx-react-chart-material-ui'
import { EventTracker } from '@devexpress/dx-react-chart'

import { DailyPairsChartVolumeProps } from '../../types'

const titleStyle = {
  fontSize: '18px',
}
const titleComponent = (props: any) => (
  <Title.Text {...props} style={titleStyle} />
)
const DailyPairsChartVolume = ({ dailyPairs }: DailyPairsChartVolumeProps) => {
  // const dailyPairs = useSelector((state: AppState) => state.cryptos.dailyPairs)
  // console.log(dailyPairs)

  // const { fromSymbol, toSymbol } = dailyPairs
  return (
    <Chart data={dailyPairs} height={261}>
      <ArgumentAxis />
      <ValueAxis />
      <AreaSeries
        valueField={'volumeto'}
        argumentField="time"
        color="var(--yellow)"
      />
      <EventTracker />
      <Tooltip />
      <Title text="Volume" textComponent={titleComponent} />
      {/* <Animation /> */}
    </Chart>
  )
}

export default DailyPairsChartVolume
