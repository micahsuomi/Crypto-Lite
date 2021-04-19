import { Dispatch } from 'redux'
import moment from 'moment'

import {
  GET_BTCPRICE,
  GET_CRYPTOS,
  ADD_CRYPTO,
  DELETE_CRYPTO,
  SEARCH_CRYPTO,
  GET_DAILYPAIRS,
  GET_TOPFIVESYMBOLS,
  GET_DAILYEXCHANGEVOL,
  GET_CRYPTOWALLETS,
  SEARCH_CRYPTOWALLET,
  GET_CRYPTONEWS,
  GET_NEWSFEEDS,
  SAVE_CONVERSION,
  DELETE_CURRENCY,
  NewCrypto,
  Crypto,
  SavedConversionItem,
  CryptoWallets,
  CryptoNews,
  NewsFeeds,
  CryptoActions,
} from '../../types'

export function getBtcPrice(data: any): CryptoActions {
  return {
    type: GET_BTCPRICE,
    payload: {
      btcPrice: data,
    },
  }
}

export function getCryptos(data: Crypto[]): CryptoActions {
  return {
    type: GET_CRYPTOS,
    payload: {
      cryptos: data,
    },
  }
}

export function addNewCrypto(crypto: NewCrypto): CryptoActions {
  return {
    type: ADD_CRYPTO,
    payload: {
      crypto,
    },
  }
}

export function deleteCrypto(crypto: NewCrypto): CryptoActions {
  return {
    type: DELETE_CRYPTO,
    payload: {
      crypto,
    },
  }
}

export function searchCrypto(crypto: Crypto[]): CryptoActions {
  return {
    type: SEARCH_CRYPTO,
    payload: {
      crypto,
    },
  }
}

export function getDailyPairs(dailyPairs: any): CryptoActions {
  return {
    type: GET_DAILYPAIRS,
    payload: {
      dailyPairs,
    },
  }
}

export function getDailyExchangeVol(dailyExchangeVol: any): CryptoActions {
  return {
    type: GET_DAILYEXCHANGEVOL,
    payload: {
      dailyExchangeVol,
    },
  }
}

export function getTopFiveSymbols(topFiveSymbols: any): CryptoActions {
  return {
    type: GET_TOPFIVESYMBOLS,
    payload: {
      topFiveSymbols,
    },
  }
}

export function getCryptoWallets(wallets: any): CryptoActions {
  return {
    type: GET_CRYPTOWALLETS,
    payload: {
      wallets,
    },
  }
}

export function searchCryptoWallets(wallet: CryptoWallets[]): CryptoActions {
  return {
    type: SEARCH_CRYPTOWALLET,
    payload: {
      wallet,
    },
  }
}

export function getCryptoNews(news: CryptoNews[]): CryptoActions {
  return {
    type: GET_CRYPTONEWS,
    payload: {
      news,
    },
  }
}

export function getNewsFeeds(newsFeeds: NewsFeeds[]): CryptoActions {
  return {
    type: GET_NEWSFEEDS,
    payload: {
      newsFeeds,
    },
  }
}

export function saveConversion(
  savedConversion: SavedConversionItem
): CryptoActions {
  return {
    type: SAVE_CONVERSION,
    payload: {
      savedConversion,
    },
  }
}

export function deleteCurrency(
  savedConversion: SavedConversionItem
): CryptoActions {
  return {
    type: DELETE_CURRENCY,
    payload: {
      savedConversion,
    },
  }
}

export function fetchBtcPrice() {
  const url =
    'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getBtcPrice(data))
  }
}

export function fetchCrypto() {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const cryptos = await res.json()
    dispatch(getCryptos(cryptos.Data))
  }
}

//testing this API to get data for all coins
/*
export function fetchAllCrypto() {
  const url =
    'https://min-api.cryptocompare.com/data/all/coinlist'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const cryptos = await res.json()
    const cryptoArr = []
    cryptoArr.push(cryptos.Data)
    console.log(cryptoArr.length)
    console.log(cryptoArr)
    // dispatch(getCryptos(cryptos.Data))
  }
}
*/

export function fetchDailyPairs(pair: any) {
  let { pairOne, pairTwo, limit } = pair
  const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${pairOne}&tsym=${pairTwo}&limit=${limit}`
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    data.Data.Data.forEach((pair: any) => {
      const unixTime = pair.time
      const timeStamp = new Date(unixTime * 1000)
      if (limit === 1 || limit === 6) {
        console.log(pair)
        pair.time = timeStamp.toDateString()
        pair.time = moment(pair.time).format('ll')
      }
      if (limit === 30) {
        pair.time = timeStamp.toDateString()
        pair.time = moment(pair.time).format('ll').slice(0, 6)
        console.log(pair)
      }
      if (limit === 2000) {
        // console.log(pair.time)
        // const timeStamp = new Date(unixTime * 1000)
        // console.log(moment.utc(pair.time).format('YYYY'))
        // pair.time = timeStamp.toDateString()
      }
      // pair.time = moment(pair.time).format('ll')
    })
    dispatch(getDailyPairs(data.Data.Data))
  }
}

export function fetchDailyExchangeVol(dailyExchangeQuery: any) {
  const { exchange, symbol, limit } = dailyExchangeQuery
  const url = `https://min-api.cryptocompare.com/data/exchange/histoday?e=${exchange}&tsym=${symbol}&limit=${limit}`
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getDailyExchangeVol(data))
  }
}

export function fetchTopFiveSymbols(exchange: any) {
  // const API_KEY =
  //   '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
  // const url = `https://min-api.cryptocompare.com/data/exchange/top/volume?e=${exchange}&direction=to?api_key=${API_KEY}`
  const url = `https://min-api.cryptocompare.com/data/exchange/top/volume?e=${exchange}&direction=TO`
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    data.exchange = exchange.toUpperCase()
    data.Data.map((d: any) => parseInt(d.fromSymbol))
    data.Data.map((d: any) => parseInt(d.toSymbol))
    dispatch(getTopFiveSymbols(data))
  }
}

export function fetchCryptoWallets() {
  const API_KEY =
    '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
  const url = 'https://min-api.cryptocompare.com/data/wallets/general?api_key='
  return async (dispatch: Dispatch) => {
    const res = await fetch(`${url}${API_KEY}`)
    const data = await res.json()
    const walletsArr = []
    for (const key in data.Data) {
      let wallet = data.Data[key]
      walletsArr.push(wallet)
    }
    dispatch(getCryptoWallets(walletsArr))
  }
}

export function fetchCryptoNews() {
  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getCryptoNews(data.Data))
  }
}

export function fetchNewsFeeds() {
  const url = 'https://min-api.cryptocompare.com/data/news/feeds'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getNewsFeeds(data))
  }
}
