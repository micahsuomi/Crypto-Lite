import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import { ThemeContext } from '../../contexts'
import { AppState, WatchListProps } from '../../types'
import DeleteCryptoButton from '../../components/DeleteCryptoButton'
import Image from '../../components/Image'
import { deleteCrypto } from '../../redux/actions'
import Loader from '../../components/Loader'

import './style.scss'

const Watchlist = ({ cryptos }: WatchListProps, props: any) => {
  const cryptoBasket = useSelector((state: AppState) => state.cryptos.inCart)
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useContext(ThemeContext)

  const dispatch = useDispatch()

  const updatePrices = async () => {
    cryptos &&
      cryptos.forEach((crypto: any) => {
        cryptoBasket.forEach((cryptoInCart) => {
          if (cryptoInCart.id.match(crypto.CoinInfo.Id)) {
            cryptoInCart.image = crypto.CoinInfo.ImageUrl
            cryptoInCart.symbol = crypto.CoinInfo.Name
            cryptoInCart.name = crypto.CoinInfo.FullName
            cryptoInCart.price = crypto.DISPLAY.USD.PRICE
            cryptoInCart.percentageChange = crypto.DISPLAY.USD.CHANGEPCTDAY
            cryptoInCart.supply = crypto.DISPLAY.USD.SUPPLY
            setIsLoaded(true)
          }
        })
      })
  }
  useEffect(() => {
    if (cryptoBasket.length === 0) {
      props.history.push('/marketprices')
    }
    updatePrices()
  })

  return (
    <div
      className="cart__container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.text }}
    >
      {isLoaded ? (
        <div className="cart__wrapper animate-appear">
          <div className="cart__exit">
            <NavLink to="/marketprices" className="cart__exit-link">
              <IoIosArrowBack style={{ height: '2rem', width: '2rem' }} />
            </NavLink>
          </div>
          <div className="cart__header">
            {cryptoBasket.length < 1 ? (
              <h3>No crypto in your watchlist</h3>
            ) : (
              <h3>{cryptoBasket.length} crypto in your watchlist</h3>
            )}
          </div>
          {cryptoBasket.map((crypto: any) => (
            <ul className="cart__list" key={crypto.id}>
              <Image image={crypto.image} name={crypto.name} small />
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
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Watchlist
