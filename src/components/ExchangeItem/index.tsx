import React from 'react'
import { NavLink } from 'react-router-dom'

import { ExchangeItemProps } from '../../types'
import Image from '../../components/Image'

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
  
  return (
    <div className="exchange">
      <div className="exchange__head">
        <Image image={logo} name={name} />
      </div>
      <div>
        <h4 className="exchange__name">{name}</h4>
      </div>
      <div className="exchange__details-list">
        <p>{volume}</p>
      </div>
      <div className="exchange__details-list">
        <p>{country}</p>
      </div>
      <div className="exchange__details-list">
        <p><span>{grade}</span></p>
      </div>
      <div className="exchange__details-list">
        <p>{gradePoints}</p>
      </div>
      <div className="exchange__details-list">
        <p>{rating}</p>
      </div>
      <div>
        <NavLink to={`/exchanges/${id}`} className="exchange__view">
          View Details
        </NavLink>
      </div>
    </div>
  )
}

export default ExchangeItem
