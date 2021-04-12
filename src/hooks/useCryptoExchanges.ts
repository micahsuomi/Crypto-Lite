/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  fetchExchangesInfo,
  searchCryptoExchanges,
} from '../redux/actions/exchange'

import { AppState } from '../types'

export default function useCryptoExchanges(
  search: string,
  sort: any,
  flag: boolean
) {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const exchanges = useSelector((state: AppState) => state.cryptos.exchanges)
  const [isLoading, setIsLoading] = useState(false)
  const [err] = useState(null)
  // const [flag, setFlag] = useState(false)

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
    (exchange: any) => {
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
          if (a.TOTALVOLUME24H.BTC > b.TOTALVOLUME24H.BTC) return -1
          if (a.TOTALVOLUME24H.BTC < b.TOTALVOLUME24H.BTC) return 1
          return 0
        })
        setData(flag ? sortByVolume : sortByVolume.reverse())
        break
      case 'country':
        const sortByCountry = exchanges.sort((a: any, b: any) => {
          if (a.Country > b.Country) return 1
          if (a.Country < b.Country) return -1
          return 0
        })
        setData(flag ? sortByCountry : sortByCountry.reverse())
        break
      case 'grade':
        const sortByGrade = exchanges.sort((a: any, b: any) => {
          if (a.Grade > b.Grade) return 1
          if (a.Grade < b.Grade) return -1
          return 0
        })
        setData(flag ? sortByGrade : sortByGrade.reverse())
        break
      case 'gradepoints':
        const sortByGradePoints = exchanges.sort((a: any, b: any) => {
          if (a.GradePoints > b.GradePoints) return 1
          if (a.GradePoints < b.GradePoints) return -1
          return 0
        })
        setData(flag ? sortByGradePoints : sortByGradePoints.reverse())
        break
      case 'averagerating':
        const sortByAverageRate = exchanges.sort((a: any, b: any) => {
          if (a.Rating.Avg > b.Rating.Avg) return -1
          if (a.Rating.Avg < b.Rating.Avg) return 1
        })
        setData(flag ? sortByAverageRate : sortByAverageRate.reverse())
        break
      default:
      }
    },
    [flag, sort]
  )
  return [err, data, isLoading, sort]
}
