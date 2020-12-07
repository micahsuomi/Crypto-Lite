import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function useDailyExchangeVol() {
  const [data, setData] = useState(Array)
  const dailyExchangeVol = useSelector((state: AppState) => state.cryptos.dailyExchangeVol)

  const [err] = useState(null)

  useEffect(() => {
    setData(dailyExchangeVol)
  }, [dailyExchangeVol])

  return [err, data]
}
