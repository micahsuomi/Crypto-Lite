/* eslint-disable array-callback-return */
/* eslint-disable indent */
import {
  CryptoState,
  CryptoActions,
  GET_BTCPRICE,
  GET_CRYPTOS,
  ADD_CRYPTO,
  DELETE_CRYPTO,
  SEARCH_CRYPTO,
  GET_DAILYPAIRS,
  GET_DAILYEXCHANGEVOL,
  GET_TOPFIVESYMBOLS,
  GET_EXCHANGES,
  SEARCH_EXCHANGES,
  GET_CRYPTOWALLETS,
  SEARCH_CRYPTOWALLET,
  GET_CRYPTONEWS,
  GET_NEWSFEEDS,
  SAVE_CONVERSION,
  DELETE_CURRENCY,
} from '../../types'

export default function cryptos(
  state: CryptoState = {
    btcPrice: {},
    cryptos: [],
    filteredCryptos: [],
    inCart: [],
    dailyPairs: [],
    dailyExchangeVol: [],
    topFiveSymbols: [],
    exchanges: [],
    filteredExchanges: [],
    cryptoWallets: [],
    filteredWallets: [],
    cryptoNews: [],
    newsFeeds: [],
    savedCurrency: [],
  },
  action: CryptoActions
): CryptoState {
  switch (action.type) {
    case GET_BTCPRICE: {
      const { btcPrice } = action.payload
      return {
        ...state,
        btcPrice: btcPrice,
      }
    }
    case GET_CRYPTOS: {
      const { cryptos } = action.payload
      return {
        ...state,
        cryptos: [...cryptos],
      }
    }
    case ADD_CRYPTO: {
      const { crypto } = action.payload
      if (state.inCart.find((c) => c.name === crypto.name)) {
        return state
      }
      return {
        ...state,
        inCart: [...state.inCart, crypto],
      }
    }
    case DELETE_CRYPTO: {
      const { crypto } = action.payload
      return {
        ...state,
        inCart: [...state.inCart.filter((c) => c.name !== crypto.name)],
      }
    }
    case SEARCH_CRYPTO: {
      const { crypto } = action.payload
      return {
        ...state,
        filteredCryptos: crypto,
      }
    }
    case GET_DAILYPAIRS: {
      const { dailyPairs } = action.payload
      console.log('from reducer', dailyPairs)
      return {
        ...state,
        dailyPairs,
      }
    }
    case GET_DAILYEXCHANGEVOL: {
      const { dailyExchangeVol } = action.payload
      return {
        ...state,
        dailyExchangeVol,
      }
    }
    case GET_TOPFIVESYMBOLS: {
      const { topFiveSymbols } = action.payload
      return {
        ...state,
        topFiveSymbols,
      }
    }
    case GET_EXCHANGES: {
      const { exchanges } = action.payload
      return {
        ...state,
        exchanges,
      }
    }
    case SEARCH_EXCHANGES: {
      const { exchanges } = action.payload
      return {
        ...state,
        filteredExchanges: exchanges,
      }
    }
    case GET_CRYPTOWALLETS: {
      const { wallets } = action.payload
      return {
        ...state,
        cryptoWallets: wallets,
      }
    }
    case SEARCH_CRYPTOWALLET: {
      const { wallet } = action.payload
      return {
        ...state,
        filteredWallets: wallet,
      }
    }
    case GET_CRYPTONEWS: {
      const { news } = action.payload
      return {
        ...state,
        cryptoNews: news,
      }
    }
    case GET_NEWSFEEDS: {
      const { newsFeeds } = action.payload
      return {
        ...state,
        newsFeeds,
      }
    }
    case SAVE_CONVERSION: {
      const { savedConversion } = action.payload
      return {
        ...state,
        savedCurrency: [...state.savedCurrency, savedConversion],
      }
    }
    case DELETE_CURRENCY: {
      const { savedConversion } = action.payload
      return {
        ...state,
        savedCurrency: [
          ...state.savedCurrency.filter((c) => c.id !== savedConversion.id),
        ],
      }
    }
    default:
      return state
  }
}
