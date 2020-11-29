import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdPlaylistAddCheck } from 'react-icons/md'

import { AppState } from '../../types'

import './style.scss'

const CryptoCart = () => {
  const cryptoBasket = useSelector((state: AppState) => state.cryptos.inCart)
  return (
    <div className="cart">
      <div className="cart__left">
        {cryptoBasket.length < 1 ? (
          <NavLink to="#" className="cart__link--empty">
            <MdPlaylistAddCheck className="watchlist-icon" />
            {/* <span>Wishlist</span> */}
          </NavLink>
        ) : (
          <NavLink
            to="/watchlist"
            className="cart__link--full grow"
            title="watchlist"
          >
            <MdPlaylistAddCheck className="watchlist-icon" />
            {/* <span>Wishlist</span> */}
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
