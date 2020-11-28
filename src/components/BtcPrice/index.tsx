import React from 'react'

import useBtcPrice from '../../hooks/useBtcPrice'

import './style.scss'

const BtcPrice = () => {
  const [err, btcPrice] = useBtcPrice()

  return (
    <div className="btc-price">
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
