import React from 'react'

import { TopFiveSymbolsHeaderProps } from '../../types'

import './style.scss'

const TopFiveSymbolsHeader = ({
  topFiveSymbols
}: TopFiveSymbolsHeaderProps) => {
  return (
    <tr className="top-volume-header">
      <td>From Symbol</td>
      <td>To Symbol</td>
      <td>Volume</td>
    </tr>
  )
}

export default TopFiveSymbolsHeader
