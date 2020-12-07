import React, { useContext } from 'react'

import { TopFiveSymbolsTableProps } from '../../types'
import TopFiveSymbolsHeader from '../TopFiveSymbolsHeader'
import TopFiveSymbolsItem from '../TopFiveSymbolsItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const TopVolumeTable = ({
  topFiveSymbols
}: TopFiveSymbolsTableProps) => {
  const { theme } = useContext(ThemeContext)
  
  const topFiveSymbolsList = topFiveSymbols.Data?.map((symbol: any) => (
    <TopFiveSymbolsItem  
      fromSymbol={symbol.fromSymbol}
      toSymbol={symbol.toSymbol}
      volume={symbol.volume} />
  ))
  return (
    <table className="top-volume__table" style={{ color: theme.text}}>
      <thead>
        <TopFiveSymbolsHeader topFiveSymbols={topFiveSymbols} />
      </thead>
      <tbody className="top-volume__table-body">
        {topFiveSymbolsList} 
      </tbody> 
      
    </table>
  )
}

export default TopVolumeTable
