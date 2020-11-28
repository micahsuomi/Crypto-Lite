import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { NavLink } from 'react-router-dom'
import { Crypto } from '../../types'
import Image from '../Image/index'
import AddCryptoButton from '../AddCryptoButton/index'

import './style.scss'

const CryptoItem = ({
  id,
  image,
  symbol,
  name,
  price,
  percentageChange,
  marketCap,
  supply,
  addCrypto,
}: Crypto) => {
  const { theme } = useContext(ThemeContext)

  return (
    <tr className="crypto-info__list" style={{ color: theme.text }}>
      <td>
        <Image image={image} name={name} />
      </td>
      <td>{symbol}</td>
      <NavLink to={`/crypto/${id}`} className="crypto-info__link">
        <td>{name}</td>
      </NavLink>
      <td>{price}</td>
      <td style={percentageChange > 0 ? { color: 'green' } : { color: 'red' }}>
        {percentageChange}%
      </td>
      <td>{marketCap}</td>
      <td>{supply}</td>
      <td className="crypto-info__button">
        <AddCryptoButton addCrypto={addCrypto} id={id} />
      </td>
    </tr>
  )
}

export default CryptoItem
