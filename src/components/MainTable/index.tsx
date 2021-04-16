import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { addNewCrypto } from '../../redux/actions'
import { ThemeContext } from '../../contexts'
import { MainTableProps, NewCrypto } from '../../types'
import CryptoTableHeader from '../CryptoTableHeader'
import TopGainers from '../TopGainers'
import CryptoItem from '../CryptoItem'
import { pageBanners } from '../../utils/page-banners'

import './style.scss'

const MainTable = ({
  sortCrypto,
  isNameReversing,
  isPriceReversing,
  isPercentageChangeReversing,
  isMarketCapReversing,
  isSupplyReversing,
  cryptos,
  topPerformersData,
}: MainTableProps) => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  const addCrypto = (crypto: any) => {
    let newCrypto: NewCrypto = {
      id: crypto.CoinInfo.Id,
      image: crypto.CoinInfo.ImageUrl,
      symbol: crypto.CoinInfo.Name,
      name: crypto.CoinInfo.FullName,
      price: crypto.DISPLAY.USD.PRICE,
      percentageChange: crypto.DISPLAY.USD.CHANGEPCTDAY,
      marketCap: crypto.DISPLAY.USD.MKTCAP,
      supply: crypto.DISPLAY.USD.SUPPLY,
    }
    dispatch(addNewCrypto(newCrypto))
  }
  return (
    <>
      <TopGainers topPerformersData={topPerformersData} />
      <div className="crypto-banner">
        {pageBanners.map((p) => (
          <h2>{p.marketPrices}</h2>
        ))}
      </div>
      <table
        className="crypto-container"
        style={{ backgroundColor: theme.backgroundColor }}
      >
        <thead style={{ backgroundColor: theme.tableHead }}>
          <CryptoTableHeader
            sortCrypto={sortCrypto}
            isNameReversing={isNameReversing}
            isPriceReversing={isPriceReversing}
            isPercentageChangeReversing={isPercentageChangeReversing}
            isMarketCapReversing={isMarketCapReversing}
            isSupplyReversing={isSupplyReversing}
          />
        </thead>
        <tbody>
          {cryptos.map((crypto: any) => (
            <CryptoItem
              key={crypto.CoinInfo.Id}
              id={crypto.CoinInfo.Id}
              image={crypto.CoinInfo.ImageUrl}
              symbol={crypto.CoinInfo.Name}
              name={crypto.CoinInfo.FullName}
              price={crypto.DISPLAY.USD.PRICE}
              percentageChange={crypto.DISPLAY.USD.CHANGEPCTDAY}
              marketCap={crypto.DISPLAY.USD.MKTCAP}
              supply={crypto.DISPLAY.USD.SUPPLY}
              addCrypto={() => addCrypto(crypto)}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MainTable
