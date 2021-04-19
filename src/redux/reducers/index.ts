import { combineReducers } from 'redux'

import product from './product'
import cryptos from './crypto'
import error from './error'
// import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    product,
    cryptos,
    error,
    // ui,
  })

export default createRootReducer
