/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../types'
import { searchCrypto } from '../redux/actions'

export default function useCryptos(search: any, sortCrypto: any) {
  const cryptos = useSelector((state: AppState) => state.cryptos.cryptos)
  const filteredCryptos = useSelector(
    (state: AppState) => state.cryptos.filteredCryptos
  )

  const dispatch = useDispatch()

  const [data, setData] = useState(Array)
  const [err, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    let errMessage = 'There was a problem loading the data. Refresh the page.'
    if (err) {
      setError(errMessage as any)
    }
    setData(cryptos)
    setIsLoading(true)
  }, [cryptos, err])

  useEffect(() => {
    setData(filteredCryptos)
  }, [filteredCryptos])

  useEffect(() => {
    sortCryptoData(data)
  }, [sortCrypto])

  const searchCryptoResults = useCallback(() => {
    const results = cryptos.filter((crypto: any) => {
      if (
        crypto.CoinInfo.FullName.includes(search) ||
        crypto.CoinInfo.FullName.toLowerCase().includes(search)
      ) {
        return crypto
      }
    })
    setData(results)

    dispatch(searchCrypto(results as any))
  }, [cryptos, search, dispatch])

  useEffect(() => {
    searchCryptoResults()
  }, [search, searchCryptoResults])

  const sortCryptoData = useCallback(
    (crypto: any) => {
      switch (sortCrypto) {
      case 'name':
        const sortByName = cryptos.sort((a: any, b: any) => {
          if (a.CoinInfo.FullName > b.CoinInfo.FullName) return 1
          if (a.CoinInfo.FullName < b.CoinInfo.FullName) return -1
          return 0
        })
        setData(flag ? sortByName : sortByName.reverse())
        break
      case 'price':
        const sortByPrice = cryptos.sort((a: any, b: any) => {
          if (a.DISPLAY.USD.PRICE > b.DISPLAY.USD.PRICE) return 1
          if (a.DISPLAY.USD.PRICE < b.DISPLAY.USD.PRICE) return -1
          return 0
        })
        setData(flag ? sortByPrice : sortByPrice.reverse())
        break
      case 'percentagechange':
        const sortByPercentageChange = cryptos.sort((a: any, b: any) => {
          if (a.RAW.USD.CHANGEPCTDAY > b.RAW.USD.CHANGEPCTDAY) return 1
          if (a.RAW.USD.CHANGEPCTDAY < b.RAW.USD.CHANGEPCTDAY) return -1
          return 0
        })
        setData(
          flag ? sortByPercentageChange : sortByPercentageChange.reverse()
        )
        break
      case 'marketcap':
        const sortByMarketCap = cryptos.sort((a: any, b: any) => {
          if (a.RAW.USD.MKTCAP > b.RAW.USD.MKTCAP) return 1
          if (a.RAW.USD.MKTCAP < b.RAW.USD.MKTCAP) return -1
          return 0
        })
        setData(flag ? sortByMarketCap : sortByMarketCap.reverse())
        break
      case 'supply':
        const sortBySupply = cryptos.sort((a: any, b: any) => {
          if (a.RAW.USD.SUPPLY > b.RAW.USD.SUPPLY) return 1
          if (a.RAW.USD.SUPPLY < b.RAW.USD.SUPPLY) return -1
          return 0
        })
        setData(flag ? sortBySupply : sortBySupply.reverse())
        break
      default:
      }
      setFlag(!flag)
    },
    [flag, sortCrypto]
  )

  return [err, data, isLoading, sortCrypto]
}
