import React from 'react'

import { ExchangeTableHeaderProps } from '../../types'
import ExchangeTableCell from '../ExchangeTableCell/index'

import './style.scss'

const ExchangeTableHeader = ({
  sortExchange,
  isNameReversing,
  isVolumeReversing,
  isCountryReversing,
  isGradeReversing,
  isGradePointsReversing,
  isAverageRateReversing,
}: ExchangeTableHeaderProps) => {
  return (
    <ExchangeTableCell
      sortExchange={sortExchange}
      isNameReversing={isNameReversing}
      isVolumeReversing={isVolumeReversing}
      isCountryReversing={isCountryReversing}
      isGradeReversing={isGradeReversing}
      isGradePointsReversing={isGradePointsReversing}
      isAverageRateReversing={isAverageRateReversing}
    />
  )
}

export default ExchangeTableHeader
