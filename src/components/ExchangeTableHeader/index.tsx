import React from 'react'

import { ExchangeTableHeaderProps } from '../../types'
import ExchangeTableCell from '../ExchangeTableCell/index'

import './style.scss'

const ExchangeTableHeader = ({
  sortExchange,
  isNameReversing,
  isVolumeReversing,
  isGradePointsReversing,
  isAverageRateReversing,
}: ExchangeTableHeaderProps) => {
  return (
    <ExchangeTableCell
      sortExchange={sortExchange}
      isNameReversing={isNameReversing}
      isVolumeReversing={isVolumeReversing}
      isGradePointsReversing={isGradePointsReversing}
      isAverageRateReversing={isAverageRateReversing}
    />
  )
}

export default ExchangeTableHeader
