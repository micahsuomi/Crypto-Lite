import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchBtcPrice } from '../redux/actions/crypto'

import { AppState } from '../types'

export default function useBtcPrice() {
  const dispatch = useDispatch()
  const btcPrice = useSelector((state: AppState) => state.cryptos.btcPrice)
  const [data, setData] = useState({
    USD: '',
    EUR: '',
    JPY: '',
  })
  const [err] = useState(null)

  useEffect(() => {
    dispatch(fetchBtcPrice())
  }, [dispatch])

  useEffect(() => {
    setData(btcPrice)
  }, [btcPrice])

  return [err, data]
}
