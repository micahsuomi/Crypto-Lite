import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { WalletItemProps } from '../../types'
import Image from '../Image'

import './style.scss'

const WalletItem = ({
  id,
  logo,
  name,
  security,
  easeOfUse,
  platforms,
  ratings,
}: WalletItemProps) => {
  let [easeOfUseStyles, setEaseOfUseStyles] = useState({})

  if (easeOfUse.toLowerCase().includes('Easy')) {
    setEaseOfUseStyles({ color: 'darkgreen' })
  } else if (easeOfUse.toLowerCase().includes('Average')) {
    setEaseOfUseStyles({ color: 'orange' })
  } else if (easeOfUse.toLowerCase().includes('Difficult')) {
    setEaseOfUseStyles({ color: 'darkred' })
  }
  return (
    <div className="wallet" key={id}>
      <div className="wallet__wrapper">
        <div className="wallet__head">
          <Image image={logo} name={name} />
          <h4 className="wallet__name">{name}</h4>
        </div>
        <div className="wallet__details-list">
          <p>Security: {security}</p>
          <p>
            Ease of Use: <span style={easeOfUseStyles}>{easeOfUse}</span>
          </p>
          <details>
            <summary>Platforms</summary>
            {platforms.map((platform) => (
              <p>{platform}</p>
            ))}
          </details>
          <p>Average Rating: {ratings}</p>
        </div>
        <NavLink to={`/wallets/${id}`} className="wallet__view">
          View Details
        </NavLink>
      </div>
    </div>
  )
}

export default WalletItem
