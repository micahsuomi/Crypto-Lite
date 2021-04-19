import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts'
import { TopGainerProps } from '../../types'
import Image from '../Image'

import './style.scss'

const TopGainerItem = ({
  id,
  image,
  name,
  symbol,
  price,
  percentageChange,
}: TopGainerProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <NavLink to={`/crypto/${id}`} className="top-gainer-link">
      <div className="top-gainer grow">
        <Image image={image} name={name} small />
        <h3 className="top-gainer__name" style={{ color: theme.homeBanner }}>
          {name}
        </h3>
        <p className="top-gainer__details" style={{ color: theme.text }}>
          {symbol}
        </p>
        <p className="top-gainer__details" style={{ color: theme.text }}>
          {price}
        </p>
        <p
          className="top-gainer__details"
          style={percentageChange > 0 ? { color: 'green' } : { color: 'red' }}
        >
          {percentageChange}%
        </p>
      </div>
    </NavLink>
  )
}

export default TopGainerItem
