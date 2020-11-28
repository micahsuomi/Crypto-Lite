import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchExchangesInfo, searchCryptoExchanges } from '../redux/actions/exchange'

import { AppState } from '../types'

export default function useCryptoExchanges(search: string, sort: any) {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const exchanges = useSelector((state: AppState) => state.cryptos.exchanges)
  const [isLoading, setIsLoading] = useState(false)
  const [err] = useState(null)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    dispatch(fetchExchangesInfo())
  }, [dispatch])

  useEffect(() => {
    setData(exchanges)
    setIsLoading(true)
  }, [exchanges])

  
  const searchExchangeResults = useCallback(() => {
    const results = exchanges.filter((exchange: any) => {
      if (
        exchange.Name.includes(search) ||
        exchange.Name.toLowerCase().includes(search)
      ) {
        return exchange
      }
    })
    setData(results)

    dispatch(searchCryptoExchanges(results))
  }, [exchanges, search, dispatch])

  useEffect(() => {
    searchExchangeResults()
  }, [search, searchExchangeResults])

  useEffect(() => {
    sortExchangesData(data)
  }, [sort])

  const sortExchangesData = useCallback(
    (crypto: any) => {
      switch (sort) {
      case 'name':
        const sortByName = exchanges.sort((a: any, b: any) => {
          if (a.Name > b.Name) return 1
          if (a.Name < b.Name) return -1
          return 0
        })
        setData(flag ? sortByName : sortByName.reverse())
        break
      case 'volume':
        const sortByVolume = exchanges.sort((a: any, b: any) => {
          if (a.TOTALVOLUME24H > b.TOTALVOLUME24H) return 1
          if (a.TOTALVOLUME24H < b.TOTALVOLUME24H) return -1
          return 0
        })
        setData(flag ? sortByVolume : sortByVolume.reverse())
        break
      case 'gradepoints':
        const sortByGradePoints = exchanges.sort((a: any, b: any) => {
          if (a.GradePoints > b.GradePoints)
            return 1
          if (a.GradePoints < b.GradePoints)
            return -1
          return 0
        })
        setData(
          flag ? sortByGradePoints : sortByGradePoints.reverse()
        )
        break
      case 'averagerate':
        const sortByAverageRate = exchanges.sort((a: any, b: any) => {
          if (a.DISPLAY.USD.MKTCAP > b.DISPLAY.USD.MKTCAP) return 1
          if (a.DISPLAY.USD.MKTCAP < b.DISPLAY.USD.MKTCAP) return -1
          return 0
        })
        setData(flag ? sortByAverageRate : sortByAverageRate.reverse())
        break
      default:
      }
      setFlag(!flag)
    },
    [flag, sort]
  )

  return [err, data]
}
