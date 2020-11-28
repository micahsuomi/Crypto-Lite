import React from 'react'

import { CryptoTableHeaderProps } from '../../types'
import CryptoTableCell from '../CryptoTableCell/index'

import './style.scss'

const CryptoTableHeader = ({
  sortCrypto,
  isNameReversing,
  isPriceReversing,
  isPercentageChangeReversing,
  isMarketCapReversing,
  isSupplyReversing,
}: CryptoTableHeaderProps) => {
  return (
    <CryptoTableCell
      sortCrypto={sortCrypto}
      isNameReversing={isNameReversing}
      isPriceReversing={isPriceReversing}
      isPercentageChangeReversing={isPercentageChangeReversing}
      isMarketCapReversing={isMarketCapReversing}
      isSupplyReversing={isSupplyReversing}
    />
  )
}

export default CryptoTableHeader
