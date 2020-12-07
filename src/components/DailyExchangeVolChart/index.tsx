import * as React from 'react';
import { Paper } from '@material-ui/core';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Tooltip,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

import { useSelector } from 'react-redux'

import { AppState } from '../../types'

import './style.scss'

const DailyExchangeVolChart = () => {
  const dailyExchangeVol = useSelector((state : AppState) => state.cryptos.dailyExchangeVol)
  console.log(dailyExchangeVol)
  return (
    <Paper className="chart-container"
    >
      <Chart
        data={dailyExchangeVol}
      >
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="volume" argumentField="time" />  

        <EventTracker />
        <Tooltip />
        <Title text="Daily Exchange Vol"/>
      </Chart>
    </Paper>
  )
  
}

export default DailyExchangeVolChart