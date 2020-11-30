import { Dispatch } from 'redux'

import {
  GET_BTCPRICE,
  GET_CRYPTOS,
  ADD_CRYPTO,
  DELETE_CRYPTO,
  SEARCH_CRYPTO,
  GET_TOPVOLUME,
  GET_CRYPTOWALLETS,
  SEARCH_CRYPTOWALLET,
  GET_CRYPTONEWS,
  NewCrypto,
  Crypto,
  TopVolume,
  CryptoWallets,
  CryptoNews,
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

export function getTopVolume(topVolume: TopVolume[]): CryptoActions {
  return {
    type: GET_TOPVOLUME,
    payload: {
      topVolume,
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
      news: news,
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

export function fetchTopVolume() {
  const url =
    'https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD&limit=100'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const topVolume = await res.json()
    dispatch(getTopVolume(topVolume.Data))
  }
}

export function fetchCryptoWallets() {
  const API_KEY =
    '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
  const url = 'https://min-api.cryptocompare.com/data/wallets/general?api_key='
  return async (dispatch: Dispatch) => {
    const res = await fetch(`${url}${API_KEY}`)
    const data = await res.json()
    console.log(data.Data)
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
    const news = await res.json()
    dispatch(getCryptoNews(news.Data))
  }
}
