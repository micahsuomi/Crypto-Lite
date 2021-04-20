import React from 'react'
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
//import moment from 'moment'
import './style.scss'

const titleStyle = {
  fontSize: '18px',
}
const argumentStyle = {
  fontSize: '12px',
}
//testing this to change time format
/*const linesCollection = document.querySelectorAll('.argument')
console.log(linesCollection[0].children)

if(linesCollection !== undefined) {
  for (const c in linesCollection[0].children) {
    console.log(linesCollection[0].children[c].textContent)
  }
} */

const titleComponent = (props: any) => (
  <Title.Text {...props} style={titleStyle} />
)

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
  return (
    <Chart data={dailyPairs} height={350}>
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
