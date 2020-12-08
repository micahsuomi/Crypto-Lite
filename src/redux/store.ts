import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

const initState: AppState = {
  product: {
    inCart: [],
    test: []
  },

  ui: {
    dialogOpen: {},
  },

  cryptos: {
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
    savedCurrency: []
  },

  error: {
    msg: {},
    status: null
  }
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose
  // const localState = localStorage.getItem('app-state')
  // localState && (initialState = JSON.parse(localState))

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
