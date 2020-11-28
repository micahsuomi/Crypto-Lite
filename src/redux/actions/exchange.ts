import { Dispatch } from 'redux'

import {  
  GET_EXCHANGES,
  SEARCH_EXCHANGES,
  CryptoActions
} from '../../types'

export function getExchangesInfo(data: any): CryptoActions {
  return {
    type: GET_EXCHANGES,
    payload: {
      exchanges: data,
    },
  }
}

export function searchCryptoExchanges(exchanges: any): CryptoActions {
  return {
    type: SEARCH_EXCHANGES,
    payload: {
      exchanges,
    },
  }
}

export function fetchExchangesInfo() {
  const url = 'https://min-api.cryptocompare.com/data/exchanges/general'
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    let exchangesArr = []
    for (const key in data.Data) {
      let exchange = data.Data[key]
      exchangesArr.push(exchange)
    }
    dispatch(getExchangesInfo(exchangesArr))
  }
}