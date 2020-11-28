import React from 'react'

import BtcPrice from '../BtcPrice/index'
import headerImg from '../../imgs/cryptos.svg'

import './style.scss'

const Header = () => {
  return (
    <div className="homebanner">
      <img src={headerImg} alt="prices pic" />
      <div className="homebanner__wrapper" id="home">
        <BtcPrice />

        <h1 className="homebanner__title">CryptoLite</h1>
        <h2 className="homebanner__subtitle">
          Cryptocurrencies data and news from the CryptoCompare APIs
        </h2>
        <button className="homebanner__btn-explore">
          <a href="#home-main">Explore Data</a>
        </button>
      </div>
    </div>
  )
}

export default Header
