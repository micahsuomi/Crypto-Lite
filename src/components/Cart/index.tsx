import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'

import { AppState, CryptoCartProps } from '../../types'

import './style.scss'

const CryptoCart = ({ scrolled, isSwitched }: CryptoCartProps) => {
  const cryptoBasket = useSelector((state: AppState) => state.cryptos.inCart)
  return (
    <div className="cart" title="watchlist">
      <div className="cart__left">
        {cryptoBasket.length < 1 ? (
          <NavLink to="#" className="cart__link--empty" title="watchlist">
            <FaRegStar
              className="watchlist-icon"
              style={{ color: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)' }}
            />
          </NavLink>
        ) : (
          <NavLink
            to="/watchlist"
            className="cart__link--full grow"
            title="watchlist"
          >
            <FaStar
              className="watchlist-icon"
              style={{ color: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)' }}
            />
          </NavLink>
        )}
      </div>
      {cryptoBasket.length < 1 ? (
        ''
      ) : (
        <div className="cart__right animate-appear grow">
          <p>{cryptoBasket.length}</p>
        </div>
      )}
    </div>
  )
}

export default CryptoCart
