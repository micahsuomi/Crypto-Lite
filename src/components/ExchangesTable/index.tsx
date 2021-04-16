import React, { useContext } from 'react'

import { ExchangesTableProps } from '../../types'
import ExchangesTableHeader from '../ExchangeTableHeader'
import ExchangeItem from '../../components/ExchangeItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const ExchangesTable = ({
  exchanges,
  sortExchange,
  isNameReversing,
  isVolumeReversing,
  isCountryReversing,
  isGradeReversing,
  isGradePointsReversing,
  isAverageRateReversing,
}: ExchangesTableProps) => {
  const { theme } = useContext(ThemeContext)
  let exchangesList = exchanges?.map((exchange: any) => (
    <ExchangeItem
      key={exchange.Id}
      id={exchange.Id}
      logo={exchange.LogoUrl}
      name={exchange.Name}
      volume={exchange.DISPLAYTOTALVOLUME24H.BTC}
      country={exchange.Country}
      grade={exchange.Grade}
      gradePoints={exchange.GradePoints}
      rating={exchange.Rating.Avg}
    />
  ))
  return (
    <table
      className="exchanges"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <thead style={{ backgroundColor: theme.tableHead }}>
        <ExchangesTableHeader
          sortExchange={sortExchange}
          isNameReversing={isNameReversing}
          isCountryReversing={isCountryReversing}
          isGradeReversing={isGradeReversing}
          isVolumeReversing={isVolumeReversing}
          isGradePointsReversing={isGradePointsReversing}
          isAverageRateReversing={isAverageRateReversing}
        />
      </thead>
      <tbody className="exchanges__wrapper">{exchangesList}</tbody>
    </table>
  )
}

export default ExchangesTable
