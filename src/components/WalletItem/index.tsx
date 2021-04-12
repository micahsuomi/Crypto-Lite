import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { WalletItemProps } from '../../types'
import { ThemeContext } from '../../contexts'
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
  const { theme, isSwitched } = useContext(ThemeContext)
  let [easeOfUseStyles, setEaseOfUseStyles] = useState({})

  if (easeOfUse.toLowerCase().includes('Easy')) {
    setEaseOfUseStyles({ color: 'darkgreen' })
  } else if (easeOfUse.toLowerCase().includes('Average')) {
    setEaseOfUseStyles({ color: 'orange' })
  } else if (easeOfUse.toLowerCase().includes('Difficult')) {
    setEaseOfUseStyles({ color: 'darkred' })
  }
  return (
    <div className={isSwitched ? 'wallet dark' : 'wallet light'} key={id}>
      <div className="wallet__wrapper">
        <div className="wallet__head">
          <Image image={logo} name={name} medium />
          <h4 className="wallet__name" style={{ color: theme.text }}>
            {name}
          </h4>
        </div>
        <div className="wallet__details-list">
          <p style={{ color: theme.text }}>Security: {security}</p>
          <p style={{ color: theme.text }}>
            Ease of Use: <span style={easeOfUseStyles}>{easeOfUse}</span>
          </p>
          <details style={{ color: theme.text }}>
            <summary style={{ color: theme.text }}>Platforms</summary>
            {platforms.map((platform) => (
              <p style={{ color: theme.text }}>{platform}</p>
            ))}
          </details>
          <p style={{ color: theme.text }}>Average Rating: {ratings}</p>
        </div>
        <NavLink to={`/wallets/${id}`} className="wallet__view">
          View Details
        </NavLink>
      </div>
    </div>
  )
}

export default WalletItem
