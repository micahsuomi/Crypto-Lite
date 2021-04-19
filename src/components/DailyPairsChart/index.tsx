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
// import moment from 'moment'
import './style.scss'
const lines = document.querySelector('.argument')
console.log(lines?.textContent)
const time = lines?.textContent && lines?.textContent
console.log(time)
// const timeStamp = time && new Date(parseInt(time) * 1000).toDateString()
// console.log(timeStamp)

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
// lines?.textContent && lines?.textContent === timeStamp
// const timeStamp = new Date(parseInt(lines?.textContent) * 1000)

const titleStyle = {
  fontSize: '18px',
}
const argumentStyle = {
  fontSize: '12px',
}

const titleComponent = (props: any) => (
  <Title.Text {...props} style={titleStyle} />
)
/*
const lineComponent = (props: any) => (
   <LineSeries.Path id="lines"className="lines" {...props} style={titleStyle} />
 )*/

const argumentComponent = (props: any) => (
  <ArgumentAxis.Root
    id="argument"
    className="argument"
    {...props}
    style={argumentStyle}
  />
)

const DailyPairsChart = ({
  dailyPairs,
  pairOne,
  pairTwo,
}: DailyPairsChartProps) => {
  // console.log(dailyPairs)
  // const { fromSymbol, toSymbol } = dailyPairs
  return (
    <Chart data={dailyPairs}>
      <ArgumentAxis rootComponent={argumentComponent} />
      <ValueAxis />
      <LineSeries
        valueField={'open'}
        argumentField={`time`}
        color="var(--primary)"
      />
      <EventTracker />
      <Tooltip />
      <Title
        text={`Price History for 
         ${pairOne && pairOne.toUpperCase()}/${pairTwo && pairTwo.toUpperCase()}
        `}
        textComponent={titleComponent}
      />
      {/* <Animation /> */}
    </Chart>
  )
}

export default DailyPairsChart
