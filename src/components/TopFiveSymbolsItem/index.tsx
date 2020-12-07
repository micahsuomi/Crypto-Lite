import React from 'react'

import { TopFiveSymbolsItemProps } from '../../types'

import './style.scss'

const TopFiveSymbolsItem = ({
  fromSymbol,
  toSymbol,
  volume,
}: TopFiveSymbolsItemProps) => {
  return (
    <tr className="top-volume-row">
      <td>{fromSymbol}</td>
      <td>{toSymbol}</td>
      <td>{volume}</td>
    </tr>
  )
}

export default TopFiveSymbolsItem
