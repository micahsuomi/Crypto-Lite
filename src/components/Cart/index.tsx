import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdPlaylistAddCheck } from 'react-icons/md'

import { AppState } from '../../types'
import { ThemeContext } from '../../contexts'

import './style.scss'

const CryptoCart = () => {
  const cryptoBasket = useSelector((state: AppState) => state.cryptos.inCart)
  const { theme } = useContext(ThemeContext)
  return (
    <div className="cart">
      <div className="cart__left">
        {cryptoBasket.length < 1 ? (
          <NavLink to="#" className="cart__link--empty">
            <MdPlaylistAddCheck className="watchlist-icon"
              style={{color: theme.iconColor}} />
          </NavLink>
        ) : (
          <NavLink
            to="/watchlist"
            className="cart__link--full grow"
            title="watchlist"
          >
            <MdPlaylistAddCheck className="watchlist-icon" 
              style={{color: theme.iconColor}}/>
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
