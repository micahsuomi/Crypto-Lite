import React, { useContext } from 'react'

import useBtcPrice from '../../hooks/useBtcPrice'
import { ThemeContext } from '../../contexts'

import './style.scss'

const BtcPrice = () => {
  const [err, btcPrice] = useBtcPrice()
  const { theme } = useContext(ThemeContext)

  if(err) {
    return(
      <h1>Not Found</h1>
    )
  }
  return (
    <div className="btc-price"
      style={{ color: theme.homeBanner }}>
      <div className="btc-price__wrapper">
        <p className="btc-price__text">BTC Price</p>
        <p className="btc-price__text">USD {btcPrice && btcPrice.USD}</p>
        <p className="btc-price__text">EUR {btcPrice && btcPrice.EUR}</p>
        <p className="btc-price__text">JPY {btcPrice && btcPrice.JPY}</p>
      </div>
    </div>
  )
}

export default BtcPrice
