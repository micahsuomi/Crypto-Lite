import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ViewWalletProps } from '../../types'
import { ThemeContext } from '../../contexts'
import Image from '../Image'

import './style.scss'

const ViewWallet = ({
  id,
  url,
  logo,
  name,
  security,
  anonymity,
  easeOfUse,
  platforms,
  coins,
  features,
  source,
  affiliate,
  ratings,
}: ViewWalletProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="view-wallet"
      key={id}
      style={{ backgroundColor: theme.backgroundColor, color: theme.text }}
    >
      <div className="view-wallet__exit-container">
        <NavLink to="/wallets" className="back-link">
          <i className="far fa-window-close fa-2x close-window"></i>
        </NavLink>
      </div>
      <div className="view-wallet__content">
        <div className="view-wallet__header-container">
          <h4 className="view-wallet__header">Wallet Info</h4>
          <Image image={logo} name={name} big />
          <div className="header-symbol__container">
            <h4 className="view-wallet__name">{name}</h4>
          </div>
        </div>

        <div className="view-wallet__body">
          <div className="viw-wallet__info">
            <p className="view-wallet__data">
              <a href={url} target="blank" className="grow">
                <i className="fas fa-globe"></i>
                <span>Website</span>
              </a>
            </p>
            <p className="view-wallet__data">
              <i className="fas fa-lock"></i>
              Security:
              <span>{security}</span>
            </p>
            <p className="view-wallet__data">
              <span>Anonimity: </span> {anonymity}
            </p>
            <p className="view-wallet__data">
              Ease of use:
              <span>{easeOfUse}</span>
            </p>
            <p className="view-wallet__data">
              Rating:
              <span>{ratings}</span>
            </p>
            <p>Platforms</p>
            <ul className="view-wallet__platforms">
              {platforms.map((platform) => (
                <li className="view-wallet__data">{platform}</li>
              ))}
            </ul>
            <p>Coins</p>
            <ul className="view-wallet__coins">
              {coins.map((coin) => (
                <li className="view-wallet__data">{coin}</li>
              ))}
            </ul>
          </div>
          <div className="crypto-card-body__info">
            Features
            <ul>
              {features.map((feature) => (
                <li className="view-wallet__data"> {feature}</li>
              ))}
            </ul>
            <p className="view-wallet__data">
              <a href={source} target="blank" className="grow">
                <i className="fab fa-github-alt"></i>
                <span>Github</span>
              </a>
            </p>
            <p className="view-wallet__data">
              <a href={affiliate} target="blank" className="grow">
                <i className="fas fa-link"></i>
                <span>Affiliate link</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewWallet
