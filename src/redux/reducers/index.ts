import { combineReducers } from 'redux'

import product from './product'
import cryptos from './crypto'
import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    product,
    cryptos,
    ui,
  })

export default createRootReducer
