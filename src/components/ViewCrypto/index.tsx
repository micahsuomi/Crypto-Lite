import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { CryptoDetails } from '../../types'
import { ThemeContext } from '../../contexts'
import Image from '../Image'

import './style.scss'

const ViewCrypto = ({
  id,
  img,
  name,
  symbol,
  algorithm,
  proofType,
  rating,
  techAdoption,
  performance,
  hashPerSecond,
  blockReward,
  price,
  marketCap,
  lastMarket,
  changeDay,
  percentageChange,
  volume24H,
  open,
  high,
  low,
  totalVolume,
  supply,
}: CryptoDetails) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="view-crypto"
      key={id}
      style={{ backgroundColor: theme.backgroundColor, color: theme.text }}
    >
      <div className="navigation-exit__container">
        <NavLink to="/marketprices" className="back-link">
          <span className="back-to__coins">Back to All Coins</span>
          <i className="far fa-window-close fa-2x close-window"></i>
        </NavLink>
      </div>
      <div className="view-crypto__content">
        <div className="crypto-content__header">
          <h1 className="view-crypto__header">Coin Info</h1>
          <Image image={img} name={name} big />
          <div className="header-symbol__container">
            <h4 className="view-crypto__name">{name}</h4>
            <h4 className="view-crypto__symbol">{symbol}</h4>
          </div>
        </div>

        <div className="view-crypto__body">
          <div className="crypto-card-body__info">
            <p className="crypto-content__data">
              <span className="bold">Algorithm:</span> {algorithm}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Proof Type:</span> {proofType}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Block Reward:</span> {blockReward}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Hash Rate p/s:</span> {hashPerSecond}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Rating:</span> {rating}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Tech Adoption:</span> {techAdoption}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Market Performance:</span> {performance}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Supply:</span> {supply}
            </p>
          </div>

          <div className="crypto-card-body__price">
            <p className="crypto-content__data">
              <span className="bold">Price:</span> {price}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Market Cap:</span> {marketCap}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Last Market Cap:</span> {lastMarket}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Change Day:</span> {changeDay}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Percentage Change:</span>{' '}
              {percentageChange}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Volume 24H:</span> {volume24H}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Open:</span> {open}
            </p>
            <p className="crypto-content__data">
              <span className="bold">High:</span> {high}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Low:</span> {low}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Total Volume:</span> {totalVolume}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCrypto
