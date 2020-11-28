/* eslint-disable array-callback-return */
import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  fetchCryptoWallets,
  searchCryptoWallets,
} from '../redux/actions/crypto'

import { AppState } from '../types'

export default function useCryptoWallets(search: any) {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const cryptoWallets = useSelector(
    (state: AppState) => state.cryptos.cryptoWallets
  )

  const [err] = useState(null)

  useEffect(() => {
    dispatch(fetchCryptoWallets())
  }, [dispatch])

  useEffect(() => {
    setData(cryptoWallets)
  }, [cryptoWallets])

  const searchWalletResults = useCallback(() => {
    const results = cryptoWallets.filter((wallet: any) => {
      if (
        wallet.Name.includes(search) ||
        wallet.Name.toLowerCase().includes(search)
      ) {
        return wallet
      }
    })
    // setData(results)
    setData(results)

    dispatch(searchCryptoWallets(results as any))
  }, [cryptoWallets, search, dispatch])

  useEffect(() => {
    searchWalletResults()
  }, [search, searchWalletResults])

  return [err, data]
}
