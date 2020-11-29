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
  GET_EXCHANGES,
  SEARCH_EXCHANGES,
  GET_CRYPTOWALLETS,
  SEARCH_CRYPTOWALLET,
  GET_CRYPTONEWS,
} from '../../types'

export default function country(
  state: CryptoState = {
    btcPrice: {},
    cryptos: [],
    filteredCryptos: [],
    inCart: [],
    exchanges: [],
    filteredExchanges: [],
    cryptoWallets: [],
    filteredWallets: [],
    cryptoNews: [],
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

    case GET_EXCHANGES: {
      const { exchanges } = action.payload
      return {
        ...state,
        exchanges
      }
    }
    
    case SEARCH_EXCHANGES: {
      const { exchanges } = action.payload
      return {
        ...state,
        filteredExchanges: exchanges
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
      console.log(wallet)
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

    default:
      return state
  }
}
