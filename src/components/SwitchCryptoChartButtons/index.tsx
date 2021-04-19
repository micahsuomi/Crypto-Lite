import React from 'react'

import { SwitchCryptoChartButtonsProps } from '../../types'

import './style.scss'

const SwitchCryptoChartButtons = ({
  switchChart,
}: SwitchCryptoChartButtonsProps) => {
  return (
    <div className="btn-chart-container">
      <button value="week" onClick={switchChart}>
        1 Week
      </button>
      <button value="month" onClick={switchChart}>
        1 Month
      </button>
      <button value="threemonths" onClick={switchChart}>
        3 Months
      </button>
      <button value="sixmonths" onClick={switchChart}>
        6 Months
      </button>
      <button value="year" onClick={switchChart}>
        1 Year
      </button>
      <button value="all" onClick={switchChart}>
        ALL
      </button>
    </div>
  )
}

export default SwitchCryptoChartButtons
