import * as React from 'react';
import { Paper } from '@material-ui/core';
import {
  Chart,
  BarSeries,
  Legend,
  Tooltip,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

import { useSelector } from 'react-redux'
import { AppState } from '../../types'

import './style.scss'

const TopFiveSymbolsChart = () => {
  const topFiveSymbols = useSelector((state : AppState) => state.cryptos.topFiveSymbols)
  const { exchange } = topFiveSymbols
  console.log(topFiveSymbols)
  
  return (
    <Paper className="chart-container"
    >
      <Chart
        data={topFiveSymbols.Data}
      >
        {
          topFiveSymbols.Data.map((s: any) => (
            <BarSeries name={s.fromSymbol} 
              valueField="volume"
              argumentField="volume" 
            />
          ))
        }
        <Legend />
        <EventTracker />
        <Tooltip />
        <Title text={`Top Five Symbols ${exchange}`} />
      </Chart> 
    </Paper>
  )
  
}

export default TopFiveSymbolsChart