import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ExchangeItemProps } from '../../types'
import Image from '../../components/Image'
import { ThemeContext } from '../../contexts'

import './style.scss'

const ExchangeItem = ({
  id,
  logo,
  name,
  volume,
  country,
  grade,
  gradePoints,
  rating,
}: ExchangeItemProps) => {
  const { theme, isSwitched } = useContext(ThemeContext)
  return (
    <div
      className={
        isSwitched ? 'exchange exchange-dark' : 'exchange exchange-light'
      }
    >
      <div className="exchange__head">
        <Image image={logo} name={name} small />
      </div>
      <div>
        <h4 className="exchange__name" style={{ color: theme.text }}>
          {name}
        </h4>
      </div>
      <div className="exchange__details-list">
        <p style={{ color: theme.text }}>{volume}</p>
      </div>
      <div className="exchange__details-list">
        <p style={{ color: theme.text }}>{country}</p>
      </div>
      <div className="exchange__details-list">
        <p style={{ color: theme.text }}>
          <span>{grade}</span>
        </p>
      </div>
      <div className="exchange__details-list">
        <p style={{ color: theme.text }}>{gradePoints}</p>
      </div>
      <div className="exchange__details-list">
        <p style={{ color: theme.text }}>{rating}</p>
      </div>
      <div className="exchange__view">
        <NavLink to={`/exchanges/${id}`} style={{ color: theme.text }}>
          View Details
        </NavLink>
      </div>
    </div>
  )
}

export default ExchangeItem
