import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCryptoNews } from '../redux/actions/crypto'

import { AppState } from '../types'

export default function useCryptoNews() {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const cryptoNews = useSelector((state: AppState) => state.cryptos.cryptoNews)

  const [err] = useState(null)

  useEffect(() => {
    dispatch(fetchCryptoNews())
  }, [dispatch])

  useEffect(() => {
    setData(cryptoNews)
  }, [cryptoNews])

  return [err, data]
}
