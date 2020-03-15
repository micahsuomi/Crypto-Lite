import React, {Component} from 'react';
import './App.css';
import './Navbar.css';
import Home from './Home';
import CryptoList from './components/cryptoList/CryptoList';
import VolumesTopSymbols from './components/top-symbols-volumes/VolumesTopSymbols';
import ExchangesList from './components/exchanges/ExchangesList';
import WalletList from './components/wallets/WalletList';
import CurrencyConverter from './components/currencyconverter/CurrencyConverter';
import NewsList from './components/news/NewsList';
import './assets/style/newslist.css';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor() {
      super();
      this.state={
          isToggleShowing: true,
          isExitShowing: false,
          addClass: true,
          hideClass: true
      }

      this.toggle = this.toggle.bind(this);
      this.close = this.close.bind(this);
  }

  toggle() {
      this.setState({addClass: !this.state.addClass, hideClass: !this.state.hideClass, isToggleShowing: false, isExitShowing: true})
      
  }

  close() {
      this.setState({addClass: !this.state.addClass, isToggleShowing: true, isExitShowing: false})

  }
  
  render() {

      let navLinksClass = ["navbar-links open"];
      if(this.state.addClass) {
          navLinksClass.push("open");
      }
      return(
        <Router>
        <div className="App">
          <nav className="navbar">
              {this.state.isToggleShowing ? <div className="hamburger-bar hide-desktop show-tablet" id="open-button" onClick={this.toggle}> 
              <i className="fas fa-bars fa-3x"></i>
              </div> : null }
              {this.state.isExitShowing ? <div className="exit" id="exit-button" onClick={this.close}><i className="fas fa-times fa-3x"></i></div> : null }


              <ul className={navLinksClass.join('')}>
                  <li className="navbar-link">
                      <Link to="/">Home</Link>
                      </li>
                  <li className="navbar-link">
                    <Link to="/marketPrices">Market Prices</Link>
                    </li>

                  <li className="navbar-link">
                    <Link to="/topVolume">Top Volume</Link>
                    </li>

                    <li className="navbar-link">
                    <Link to="/exchanges">Exchanges</Link>
                    </li>

                    <li className="navbar-link">
                    <Link to="/wallets">Wallets</Link>
                    </li>

                    <li className="navbar-link">
                    <Link to="/currencyconverter">Currency Converter</Link>
                    </li>

                  <li className="navbar-link">
                    <Link to="/news">News</Link>
                    </li>

                  <li className="navbar-link"><a href="#newsFeed">{this.state.feeds}</a></li>

              </ul>

          </nav>

          <Switch>
          <Route path="/marketPrices">
              <CryptoList />
            </Route>
            <Route path="/topVolume">
              <VolumesTopSymbols />
            </Route>
            <Route path="/exchanges">
              <ExchangesList />
            </Route>
            <Route path="/wallets">
              <WalletList />
            </Route>
            <Route path="/currencyconverter">
              <CurrencyConverter />
            </Route>
          <Route path="/news">
              <NewsList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        <div className="App">
      
        <Footer />
        </div>
</div>
          </Router>

      )
  }
}

export default App;
