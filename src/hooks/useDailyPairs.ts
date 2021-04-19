/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDailyPairs } from '../redux/actions/crypto'
import { AppState } from '../types'

export default function useDailyPairs(
  symbol: string,
  query: string,
  loadChartOnPageLoad: boolean
) {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const dailyPairs = useSelector((state: AppState) => state.cryptos.dailyPairs)
  const [pair, setPair] = useState({
    pairOne: symbol,
    pairTwo: 'usd',
    limit: 6,
  }) as any
  const [err] = useState(null)

  console.log(query)
  useEffect(() => {
    setData(dailyPairs)
  }, [dailyPairs, data])

  useEffect(() => {
    switchChart(query)
  }, [query])

  const switchChart = useCallback(
    (query: any) => {
      console.log(query)
      if (query === 'day') {
        setPair({
          ...pair,
          limit: 1,
        })
      }
      if (query === 'week') {
        setPair({
          ...pair,
          limit: 6,
        })
      }
      if (query === 'month') {
        setPair({
          ...pair,
          limit: 30,
        })
      }
      if (query === 'threemonths') {
        setPair({
          ...pair,
          limit: 90,
        })
      }
      if (query === 'sixmonths') {
        setPair({
          ...pair,
          limit: 180,
        })
      }
      if (query === 'year') {
        setPair({
          ...pair,
          limit: 360,
        })
      }
      if (query === 'all') {
        setPair({
          ...pair,
          limit: 2000,
        })
      }
    },
    [pair]
  )
  const loadChart = useCallback(() => {
    dispatch(fetchDailyPairs(pair))
  }, [dispatch, pair])

  useEffect(() => {
    if (loadChartOnPageLoad) {
      loadChart()
    }
  }, [loadChart, loadChartOnPageLoad])

  return [err, data, pair]
}
