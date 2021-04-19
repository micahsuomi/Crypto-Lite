import React, { useState, useContext } from 'react'
// import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Paper } from '@material-ui/core'

import useDailyPairs from '../../hooks/useDailyPairs'
// import { fetchDailyPairs } from '../../redux/actions/crypto'
import SwitchChartButtons from '../../components/SwitchCryptoChartButtons'
import DailyPairsChart from '../../components/DailyPairsChart'
import DailyPairsChartVolume from '../../components/DailyPairsChartVolume'
import { CryptoDetailsProps } from '../../types'
import { ThemeContext } from '../../contexts'

import Image from '../Image'

import './style.scss'

const ViewCrypto = ({
  id,
  img,
  name,
  symbol,
  algorithm,
  proofType,
  rating,
  techAdoption,
  performance,
  hashPerSecond,
  blockReward,
  price,
  marketCap,
  lastMarket,
  changeDay,
  percentageChange,
  volume24H,
  open,
  high,
  low,
  totalVolume,
  supply,
}: CryptoDetailsProps) => {
  const { theme } = useContext(ThemeContext)
  // const dispatch = useDispatch()
  const [loadChartOnPageLoad] = useState(true)
  const [query, setQuery] = useState('')
  const [errDailyPairs, dailyPairs, pair] = useDailyPairs(
    symbol,
    query,
    loadChartOnPageLoad
  )
  console.log(pair)
  /*
  const [pair, setPair] = useState({
    pairOne: symbol,
    pairTwo: 'usd',
    limit: 6,
  })*/
  //this one will be moved to useDailyPairs hook

  /*
  const switchChart = useCallback(
    (e: any) => {
      const { value } = e.target
      console.log(e.target.value)
      setQuery(value)
      if (value === 'day') {
        setPair({
          ...pair,
          limit: 1,
        })
      }
      if (value === 'week') {
        setPair({
          ...pair,
          limit: 6,
        })
      }
      if (value === 'month') {
        setPair({
          ...pair,
          limit: 30,
        })
      }
      if (value === 'threemonths') {
        setPair({
          ...pair,
          limit: 90,
        })
      }
      if (value === 'sixmonths') {
        setPair({
          ...pair,
          limit: 180,
        })
      }
      if (value === 'year') {
        setPair({
          ...pair,
          limit: 360,
        })
      }
      if (value === 'all') {
        setPair({
          ...pair,
          limit: 2000,
        })
      }
    },
    [pair]
  )*/
  const switchChart = (e: any) => {
    const { value } = e.target
    console.log(e.target.value)
    setQuery(value)
  }
  // console.log('daily pairs from hook to viewcrypto', dailyPairs)
  /*
  const loadChart = useCallback(() => {
    dispatch(fetchDailyPairs(pair))
  }, [dispatch, pair])

  useEffect(() => {
    loadChart()
  }, [loadChart])*/
  if (errDailyPairs) {
    return <h1>not found</h1>
  }

  const { pairOne, pairTwo } = pair
  return (
    <div
      className="view-crypto"
      key={id}
      style={{ backgroundColor: theme.backgroundColor, color: theme.text }}
    >
      <div className="navigation-exit__container">
        <NavLink to="/marketprices" className="back-link">
          <span className="back-to__coins">Back to All Coins</span>
          <i className="far fa-window-close fa-2x close-window"></i>
        </NavLink>
      </div>
      <div className="view-crypto__content">
        <div className="crypto-content__header">
          <h1 className="view-crypto__header">Coin Info</h1>
          {/* <Image image={img} name={name} big />
          <div className="header-symbol__container">
            <h4 className="view-crypto__name">{name}</h4>
            <h4 className="view-crypto__symbol">{symbol}</h4>
          </div> */}
        </div>

        <div className="view-crypto__body">
          <div className="header-symbol__container">
            <Image image={img} name={name} medium />
            <h4 className="view-crypto__name">{name}</h4>
            <h4 className="view-crypto__symbol">{symbol}</h4>
          </div>
          <div className="crypto-card-body__info">
            <p className="crypto-content__data">
              <span className="bold">Algorithm:</span> {algorithm}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Proof Type:</span> {proofType}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Block Reward:</span> {blockReward}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Hash Rate p/s:</span> {hashPerSecond}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Rating:</span> {rating}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Tech Adoption:</span> {techAdoption}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Market Performance:</span> {performance}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Supply:</span> {supply}
            </p>
          </div>

          <div className="crypto-card-body__price">
            <p className="crypto-content__data">
              <span className="bold">Price:</span> {price}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Market Cap:</span> {marketCap}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Last Market Cap:</span> {lastMarket}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Change Day:</span> {changeDay}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Percentage Change:</span>{' '}
              {percentageChange}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Volume 24H:</span> {volume24H}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Open:</span> {open}
            </p>
            <p className="crypto-content__data">
              <span className="bold">High:</span> {high}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Low:</span> {low}
            </p>
            <p className="crypto-content__data">
              <span className="bold">Total Volume:</span> {totalVolume}
            </p>
          </div>
        </div>
      </div>
      <SwitchChartButtons switchChart={switchChart} />
      <Paper className="chart-container">
        {dailyPairs !== undefined ? (
          <DailyPairsChart
            dailyPairs={dailyPairs}
            pairOne={pairOne}
            pairTwo={pairTwo}
          />
        ) : (
          'Loading Chart'
        )}
      </Paper>
      <Paper className="chart-container volume">
        {dailyPairs !== undefined ? (
          <DailyPairsChartVolume dailyPairs={dailyPairs} />
        ) : (
          'Loading Chart'
        )}
      </Paper>
    </div>
  )
}

export default ViewCrypto
