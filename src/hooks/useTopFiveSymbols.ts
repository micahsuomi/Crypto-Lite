import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


import { AppState } from '../types'

export default function useTopFiveSymbols() {
  const [data, setData] = useState(Array)
  const topFiveSymbols = useSelector((state: AppState) => state.cryptos.topFiveSymbols)

  const [err] = useState(null)
  
  useEffect(() => {
    setData(topFiveSymbols)
  }, [topFiveSymbols])

  return [err, data]
}
