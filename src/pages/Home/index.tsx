import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  addNewCrypto,
  fetchCrypto,
  fetchCryptoWallets,
} from '../../redux/actions'
import { AppState, NewCrypto } from '../../types'
import useCryptoNews from '../../hooks/useCryptoNews'
import useNewsFeeds from '../../hooks/useNewsFeeds'
import HomeBanner from '../../components/HomeBanner'
import TopGainers from '../../components/TopGainers'
import CryptoItem from '../../components/CryptoItem'
import WalletItem from '../../components/WalletItem'
import NewsItem from '../../components/NewsItem'
import NewsFeedsItem from '../../components/NewsFeedsItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

export default function Home() {
  const cryptos = useSelector((state: AppState) => state.cryptos.cryptos)
  const wallets = useSelector((state: AppState) => state.cryptos.cryptoWallets)
  const [errNews, cryptoNews] = useCryptoNews()
  const [errNewsFeeds, newsFeeds] = useNewsFeeds()
  const [showTopPerformers, setShowTopPerformers] = useState(false)
  const [currentPage] = useState(1)
  const [itemsPerPage] = useState(8)

  //get current items
  const indexLastItem = currentPage * itemsPerPage
  const indexFirstItem = indexLastItem - itemsPerPage
  const currentNews = cryptoNews?.slice(indexFirstItem, indexLastItem)
  const currentWallets = wallets?.slice(indexFirstItem, indexLastItem)
  const currentCryptos = cryptos?.slice(indexFirstItem, indexLastItem)
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const [isHomePage] = useState(true)

  useEffect(() => {
    dispatch(fetchCrypto())
    dispatch(fetchCryptoWallets())
    setTimeout(() => {
      setShowTopPerformers(true)
    }, 2000)
  }, [dispatch])

  //returns 5 news items

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

  const cryptoList = currentCryptos.map((crypto: any) => (
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
      isHomePage={isHomePage}
    />
  ))

  let walletList = currentWallets?.map((wallet: any) => (
    <WalletItem
      key={wallet.Id}
      id={wallet.Id}
      url={wallet.Url}
      logo={wallet.LogoUrl}
      name={wallet.Name}
      security={wallet.Security}
      easeOfUse={wallet.EaseOfUse}
      platforms={wallet.Platforms}
      ratings={wallet.avgRating}
    />
  ))

  const newsList = currentNews?.map((newsItem: any) => (
    <NewsItem
      key={newsItem.id}
      id={newsItem.id}
      description={newsItem.body}
      categories={newsItem.categories}
      title={newsItem.title}
      image={newsItem.imageurl}
      articleUrl={newsItem.url}
    />
  ))

  const newsFeedsList = newsFeeds?.map((feed: any) => (
    <NewsFeedsItem
      key={feed.key}
      id={feed.key}
      name={feed.name}
      language={feed.lang}
      image={feed.img}
    />
  ))

  if (errNews || errNewsFeeds) {
    return <h1>Page Not Found</h1>
  }

  return (
    <div className="home-page">
      <HomeBanner />
      <div style={{ backgroundColor: theme.backgroundColor }}>
        {showTopPerformers && <TopGainers topPerformersData={cryptos} />}
        <NavLink
          to="/marketprices"
          className="home-page__header"
          style={{ color: theme.text }}
        >
          <h2 id="home-main">Latest Market Prices</h2>
        </NavLink>
        <div className="home-page__section">{cryptoList}</div>
        <div style={{ backgroundColor: theme.backgroundColor }}>
          <div className="home-page__section" id="latestNews">
            <NavLink
              to="/wallets"
              className="home-page__header"
              style={{ color: theme.text }}
            >
              <h2>Wallets</h2>
            </NavLink>
            <div className="wallets__wrapper">{walletList}</div>
          </div>

          <div
            className="home-page__news-container"
            style={{ backgroundColor: theme.backgroundColor }}
          >
            <div className="home-page__section" id="latestNews">
              <NavLink
                to="/news"
                className="home-page__header"
                style={{ color: theme.text }}
              >
                <h2>Latest News</h2>
              </NavLink>
              <div className="news-list__wrapper">{newsList}</div>
            </div>
            <div
              className="home-page__news-container"
              style={{ backgroundColor: theme.backgroundColor }}
            >
              <div className="home-page__section" id="latestNews">
                <NavLink
                  to="/news"
                  className="home-page__header"
                  style={{ color: theme.text }}
                >
                  <h2>News Feeds</h2>
                </NavLink>
                <div className="home-page__newsfeeds-wrapper">
                  {newsFeedsList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
