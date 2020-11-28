import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdPlaylistAddCheck } from 'react-icons/md'

import { AppState } from '../../types'

import './style.scss'

const CryptoCart = () => {
  const countriesBasket = useSelector((state: AppState) => state.cryptos.inCart)
  return (
    <div className="cart">
      <div className="cart__left">
        {countriesBasket.length < 1 ? (
          <NavLink to="#" className="cart__link--empty">
            {/* <i className="fas fa-cart-plus fa-2x"></i> */}
            <MdPlaylistAddCheck className="watchlist-icon" />
          </NavLink>
        ) : (
          <NavLink
            to="/watchlist"
            className="cart__link--full grow"
            title="watchlist"
          >
            {/* <i className="fas fa-cart-plus fa-2x"></i> */}
            <MdPlaylistAddCheck className="watchlist-icon" />
          </NavLink>
        )}
      </div>
      {countriesBasket.length < 1 ? (
        ''
      ) : (
        <div className="cart__right animate-appear grow">
          <p>{countriesBasket.length}</p>
        </div>
      )}
    </div>
  )
}

export default CryptoCart
