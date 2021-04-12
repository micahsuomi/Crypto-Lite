import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ViewExchangeProps } from '../../types'
import { ThemeContext } from '../../contexts'
import Image from '../Image'

import './style.scss'

const ViewExchange = ({
  id,
  url,
  image,
  name,
  country,
  description,
  centralizationType,
  volume,
  fees,
  rating,
  grade,
  gradePoints,
  gradeSplit,
  itemType,
  depositMethods,
  witdhrawalMethods,
}: ViewExchangeProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="view-exchange"
      key={id}
      style={{ backgroundImage: theme.backgroundColor, color: theme.text }}
    >
      <div className="view-exchange__exit-container">
        <NavLink to="/exchanges" className="back-link">
          <i className="far fa-window-close fa-2x close-window"></i>
        </NavLink>
      </div>
      <div className="view-exchange__content">
        <h4 className="view-exchange__header">Exchange Info</h4>
        <div className="view-exchange__header-container">
          <div className="header-symbol__container">
            <Image image={image} name={name} big />
          </div>
          <div className="view-exchange__description">
            <h4 className="view-exchange__name">{name}</h4>
            <p>{description}</p>
          </div>
        </div>

        <div className="view-exchange__body">
          <div className="viw-wallet__info">
            <div className="view-exchange__data">
              <a href={url} target="blank" className="grow">
                <i className="fas fa-globe fa-2x"></i>
                <span>Website</span>
              </a>
            </div>
            <div className="view-exchange__data">
              Country:
              <span>{country}</span>
            </div>
            <div className="view-exchange__data">
              Centralizaton Type:
              <span>{centralizationType}</span>
            </div>
            <div className="view-exchange__data">
              Volume:
              <span>{volume}</span>
            </div>
            <div className="view-exchange__list">
              Fees:
              <span>{fees}</span>
            </div>

            <p>Item Types</p>
            <ul className="view-exchange__platforms">
              {itemType.map((item) => (
                <li className="view-exchange__data" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="crypto-card-body__info">
            <div className="view-exchange__data">
              Rating:
              <span>{rating}</span>
            </div>
            <div className="view-exchange__data">
              Grade:
              <span>{grade}</span>
            </div>
            <div className="view-exchange__data">
              Grade Points:
              <span>{gradePoints}</span>
            </div>
            <div className="view-exchange__list">
              Grade Split:
              <ul>
                <li>
                  Asset Quality and Diversity{' '}
                  <span>{gradeSplit.AssetQualityAndDiversity}</span>
                </li>
                <li>
                  Data Provition <span>{gradeSplit.DataProvision}</span>
                </li>
                <li>
                  KYC and Transaction Risks{' '}
                  <span>{gradeSplit.KYCAndTransactionRisk}</span>
                </li>
                <li>
                  Legal <span>{gradeSplit.Legal}</span>
                </li>
                <li>
                  Market Quality <span>{gradeSplit.MarketQuality}</span>
                </li>
                <li>
                  Negative Reports Penalty{' '}
                  <span>{gradeSplit.NegativeReportsPenalty}</span>
                </li>
                <li>
                  Security <span>{gradeSplit.Security}</span>
                </li>
                <li>Team{gradeSplit.Team}</li>
              </ul>
            </div>
            <div className="view-exchange__data">
              Deposit Methods:
              <span>{depositMethods}</span>
            </div>
            <div className="view-exchange__data">
              Widthdrawal Methods:
              <span>{witdhrawalMethods}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewExchange
