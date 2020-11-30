import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchTopVolume } from '../redux/actions/crypto'

import { AppState } from '../types'

export default function useCryptoNews() {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const topVolume = useSelector((state: AppState) => state.cryptos.topVolume)

  const [err] = useState(null)

  useEffect(() => {
    dispatch(fetchTopVolume())
  }, [dispatch])

  useEffect(() => {
    setData(topVolume)
  }, [topVolume])

  return [err, data]
}
