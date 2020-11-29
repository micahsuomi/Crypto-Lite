/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from './types'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CryptoList from './pages/CryptoList'
import Crypto from './pages/Crypto'
import Exchanges from './pages/Exchanges'
import Exchange from './pages/Exchange'
import Wallets from './pages/Wallets'
import Wallet from './pages/Wallet/index'
import CryptoNews from './pages/CryptoNews'
import Cart from './pages/Cart/Cart'
import CurrencyConverter from './pages/CurrencyConverter'

const Routes = () => {
  const cryptos = useSelector((state: AppState) => state.cryptos.cryptos)
  const filteredCryptos = useSelector(
    (state: AppState) => state.cryptos.filteredCryptos
  )

  const filteredExchanges = useSelector(
    (state: AppState) => state.cryptos.filteredExchanges
  )

  const filteredWallets = useSelector(
    (state: AppState) => state.cryptos.filteredWallets
  )

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/marketprices" component={CryptoList} />

        <Route
          exact
          path="/crypto/:id"
          component={(props: any) => (
            <Crypto cryptos={filteredCryptos} {...props} />
          )}
        />

        <Route exact path="/exchanges" component={Exchanges} />

        <Route
          exact
          path="/exchanges/:id"
          component={(props: any) => <Exchange exchanges={filteredExchanges} {...props} />}
        />
        <Route exact path="/wallets" component={Wallets} />

        <Route
          exact
          path="/wallets/:id"
          component={(props: any) => (
            <Wallet wallets={filteredWallets} {...props} />
          )}
        />

        <Route exact path="/news" component={CryptoNews} />

        <Route
          exact
          path="/watchlist"
          component={(props: any) => <Cart cryptos={cryptos} {...props} />}
        />

        <Route
          exact
          path="/currencyconverter"
          component={(props: any) => (
            <CurrencyConverter cryptos={cryptos} {...props} />
          )}
        />
      </Switch>
    </>
  )
}

export default Routes
