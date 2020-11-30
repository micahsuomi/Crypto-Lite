import React, { useContext } from 'react'

import BtcPrice from '../BtcPrice/index'
import headerImg from '../../imgs/cryptos.svg'

import { ThemeContext } from '../../contexts'

import './style.scss'

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="homebanner" 
      style={{ backgroundColor: theme.backgroundColor, color: theme.homeBanner }}>
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
