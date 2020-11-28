import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts'
import { AppState } from '../../types'
import { IoIosArrowBack } from 'react-icons/io'
import DeleteCryptoButton from '../../components/DeleteCryptoButton'
import Image from '../../components/Image'
import { deleteCrypto } from '../../redux/actions'

import './style.scss'

const Cart = (props: any) => {
  const cryptoBasket = useSelector((state: AppState) => state.cryptos.inCart)
  const { theme } = useContext(ThemeContext)

  const dispatch = useDispatch()
  useEffect(() => {
    if (cryptoBasket.length === 0) {
      props.history.push('/')
    }
  })
  console.log(cryptoBasket)

  return (
    <div
      className="cart__container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.text }}
    >
      <div className="cart__wrapper animate-appear">
        <div className="cart__exit">
          <NavLink to="/" className="cart__exit-link">
            <IoIosArrowBack style={{ height: '2rem', width: '2rem' }} />
          </NavLink>
        </div>
        <div className="cart__header">
          {cryptoBasket.length < 1 ? (
            <h3>No crypto in your watchlist</h3>
          ) : (
            <h3>
              {cryptoBasket.length} crypto in your watchlist
            </h3>
          )}
        </div>
        {cryptoBasket.map((crypto: any) => (
          <ul className="cart__list">
            <Image image={crypto.image} name={crypto.name}/>
            <li>{crypto.symbol}</li>
            <li>{crypto.name}</li>
            <li>{crypto.price}</li>
            <li
              style={
                crypto.percentageChange > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {crypto.percentageChange}%
            </li>
            <li>{crypto.supply}</li>
            <li>
              <DeleteCryptoButton
                handleDelete={() => dispatch(deleteCrypto(crypto))}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Cart
