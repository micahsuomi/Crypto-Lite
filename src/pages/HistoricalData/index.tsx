import React, { useState } from 'react'

import useDailyPairs from '../../hooks/useDailyPairs'
import useTopFiveSymbols from '../../hooks/useTopFiveSymbols'
import useDailyExchangeVol from '../../hooks/useDailyExchangeVol'
import DailyPairsForm from '../../components/DailyPairsForm'
import DailyPairsTable from '../../components/DailyPairsTable'
import DailyPairsChart from '../../components/DailyPairsChart'
import DailyExchangeVolForm from '../../components/DailyExchangeVolForm'
import DailyExchangeVolChart from '../../components/DailyExchangeVolChart'
import TopFiveSymbolsForm from '../../components/TopFiveSymbolsForm'
import TopFiveSymbolsChart from '../../components/TopFiveSymbolsChart'
import TopFiveSymbolsTable from '../../components/TopFiveSymbolsTable'
import Section from '../../components/Section'
import TitleContainer from '../../components/TitleContainer'
import Title from '../../components/Title'
import { pageBanners } from '../../utils/page-banners'

import './style.scss'

const HistoricalData = () => {
  const [errDailyPairs, dailyPairs] = useDailyPairs()
  const [errDailyExchangeVolume, dailyExchangeVol] = useDailyExchangeVol()
  const [errTopFiveSymbols, topFiveSymbols] = useTopFiveSymbols()
  const [isDailyPairsTableShowing, setIsDailyPairsTableShowing] = useState(
    false
  )
  const [
    isTopFiveSymbolsTableShowing,
    setIsTopFiveSymbolsTableShowing,
  ] = useState(false)
  const [showDailyGraph, setShowDailyGraph] = useState(false)
  const [showDailyExchangeVolGraph, setShowDailyExchangeVolGraph] = useState(
    false
  )
  const [showTopFiveSymbolsGraph, setShowTopFiveSymbolsGraph] = useState(false)

  console.log('daily pairs', dailyPairs)
  console.log('daily exchange volume', dailyExchangeVol)
  console.log('top five symbols', topFiveSymbols)

  const [isDailyPairsShowing, setIsDailyPairsShowing] = useState(true)
  const [isDailyExchangeVolShowing, setIsDailyExchangeVolShowing] = useState(
    false
  )
  const [isTopFiveSymbolsShowing, setIsTopFiveSymbolsShowing] = useState(false)

  const showDailyPairs = () => {
    setIsDailyPairsShowing(true)
    setIsDailyExchangeVolShowing(false)
    setIsTopFiveSymbolsShowing(false)
  }

  const showDailyExchangeVol = () => {
    setIsDailyPairsShowing(false)
    setIsDailyExchangeVolShowing(true)
    setIsTopFiveSymbolsShowing(false)
  }
  /*
  const showTopFiveSymbols = () => {
    setIsDailyPairsShowing(false)
    setIsDailyExchangeVolShowing(false)
    setIsTopFiveSymbolsShowing(true)
  }*/

  const showDailyPairsTable = () => {
    setIsDailyPairsTableShowing(!isDailyPairsTableShowing)
  }

  const showTopFiveSymbolsTable = () => {
    setIsTopFiveSymbolsTableShowing(!isTopFiveSymbolsTableShowing)
  }

  const showDailyGraphOnSubmit = () => {
    setShowDailyGraph(true)
  }
  const showDailyExchangeVolGraphOnSubmit = () => {
    setShowDailyExchangeVolGraph(true)
  }
  const showTopFiveSymbolsGraphOnSubmit = () => {
    setShowTopFiveSymbolsGraph(true)
  }

  if (errDailyPairs || errTopFiveSymbols || errDailyExchangeVolume) {
    return <h1>Page Not Found</h1>
  }

  return (
    <Section>
      <TitleContainer>
        {pageBanners.map((p) => (
          <Title title={p.historicalData} alignCenter />
        ))}
      </TitleContainer>

      <div className="historical-data__tabs-wrapper">
        <button
          onClick={showDailyPairs}
          className="historical-data__btn historical-data__btn--daily-pairs"
        >
          Daily Pairs
        </button>
        <button
          onClick={showDailyExchangeVol}
          className="historical-data__btn historical-data__btn--daily-exchange-vol"
        >
          Daily Exchange Vol.{' '}
        </button>
        {/* <button
          onClick={showTopFiveSymbols}
          className="historical-data__btn historical-data__btn--top-five"
        >
          Top 5 Symbols{' '}
        </button> */}
      </div>
      <div className="historical-data__wrapper">
        {isDailyPairsShowing && (
          <div className="historical-data__daily">
            <h4>Search for daily pairs to view price history</h4>
            <p>
              If you want to view the entire price history of the selected
              crypto, enter 2000 as limit
            </p>
            <DailyPairsForm showDailyGraphOnSubmit={showDailyGraphOnSubmit} />
            <div className="historical-data__results">
              <div>
                {showDailyGraph && <DailyPairsChart dailyPairs={dailyPairs} />}
              </div>
              {showDailyGraph && (
                <>
                  {isDailyPairsTableShowing ? (
                    <button
                      onClick={showDailyPairsTable}
                      className="historical-data__show-table-btn"
                    >
                      Hide Table
                    </button>
                  ) : (
                    <button
                      onClick={showDailyPairsTable}
                      className="historical-data__show-table-btn"
                    >
                      Show Table
                    </button>
                  )}
                </>
              )}
              {isDailyPairsTableShowing && (
                <div>
                  <DailyPairsTable dailyPairs={dailyPairs} />
                </div>
              )}
            </div>
          </div>
        )}
        {isDailyExchangeVolShowing && (
          <div className="historical-data__daily">
            <h4>Search Daily Exchange Vol (daily Volume)</h4>
            <p>
              Get the total volume of daily historical exchange data. If you
              wish to get all the available <br /> historical data, you can
              enter limit=2000 (earliest timestamp received).{' '}
            </p>
            <DailyExchangeVolForm
              showDailyExchangeVolGraphOnSubmit={
                showDailyExchangeVolGraphOnSubmit
              }
            />
            <div className="historical-data__results">
              <div>
                {showDailyExchangeVolGraph && (
                  <DailyExchangeVolChart data={dailyExchangeVol} />
                )}
              </div>
            </div>
          </div>
        )}
        {isTopFiveSymbolsShowing && (
          <div className="historical-data__daily">
            <h4>Search Top 5 Symbols per Exchange</h4>
            <p>Search the top five symbols per exchange</p>
            <TopFiveSymbolsForm
              showTopFiveSymbolsGraphOnSubmit={showTopFiveSymbolsGraphOnSubmit}
            />
            <div className="historical-data__results">
              <div>{showTopFiveSymbolsGraph && <TopFiveSymbolsChart />}</div>
              {isTopFiveSymbolsTableShowing ? (
                <button
                  onClick={showTopFiveSymbolsTable}
                  className="historical-data__show-table-btn"
                >
                  Hide Table
                </button>
              ) : (
                <button
                  onClick={showTopFiveSymbolsTable}
                  className="historical-data__show-table-btn"
                >
                  Show Table
                </button>
              )}
              {isTopFiveSymbolsTableShowing && (
                <div>
                  <TopFiveSymbolsTable topFiveSymbols={topFiveSymbols} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

export default HistoricalData
