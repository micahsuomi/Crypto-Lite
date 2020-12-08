import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchNewsFeeds } from '../redux/actions/crypto'

import { AppState } from '../types'

export default function useNewsFeeds() {
  const dispatch = useDispatch()
  const [data, setData] = useState(Array)
  const newsFeeds = useSelector((state: AppState) => state.cryptos.newsFeeds)
  const [err] = useState(null)

  useEffect(() => {
    dispatch(fetchNewsFeeds())
  }, [dispatch])

  useEffect(() => {
    setData(newsFeeds)
  }, [newsFeeds])

  return [err, data]
}
