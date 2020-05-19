import React, {Component} from 'react';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/Navbar';
import CryptoList from './components/cryptoList/CryptoList';
import ViewCrypto from './components/viewcrypto/ViewCrypto';
import VolumesTopSymbols from './components/top-symbols-volumes/VolumesTopSymbols';
import ExchangesList from './components/exchanges/ExchangesList';
import WalletList from './components/wallets/WalletList';
import Watchlist from './components/watchlist/Watchlist';
import CurrencyConverter from './components/currencyconverter/CurrencyConverter';
import NewsList from './components/news/NewsList';
import './assets/style/newslist.css';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  constructor() {
      super();
      this.state={
        cryptos: [],
        isSwitched: false
      }

     
  }

  switchMode = () => {
      this.setState({isSwitched: !this.state.isSwitched})
  }

  componentDidMount() {
    const APIURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'

    fetch(APIURL)
    .then(response => response.json())
    .then(data => {
        let cryptoArr = [];
        for(const crypto in data.Data) {
            
            let cryptoInfo = data.Data[crypto].CoinInfo;
            let cryptoPrice = data.Data[crypto].DISPLAY.USD;

            let id = cryptoInfo.Id;
            let img = cryptoInfo.ImageUrl;
            let name = cryptoInfo.FullName;
            let symbol = cryptoInfo.Name;
            let ratings = cryptoInfo.Rating.Weiss;
            let rating = ratings.Rating;
            let techAdoption = ratings.TechnologyAdoptionRating;
            let performance = ratings.MarketPerformanceRating;
            let hashPerSecond = cryptoInfo.NetHashesPerSecond;
            let algorithm = cryptoInfo.Algorithm;
            let proofType = cryptoInfo.ProofType;
            let blockReward = cryptoInfo.BlockReward;
            let supply=cryptoPrice.SUPPLY;
            let marketCap = cryptoPrice.MKTCAP;
            
            let price = cryptoPrice.PRICE;
            let percentageChange = cryptoPrice.CHANGEPCTDAY;
            let changeDay = cryptoPrice.CHANGEDAY;
            let lastMarket = cryptoPrice.LASTMARKET;
            let volume24H = cryptoPrice.VOLUME24HOUR;
            let open = cryptoPrice.OPEN24HOUR;
            let high = cryptoPrice.HIGH24HOUR;
            let low = cryptoPrice.LOW24HOUR;
            let totalVolume = cryptoPrice.TOTALVOLUME24H;

            cryptoArr.push({id, img, name, symbol, algorithm, proofType, rating, techAdoption, performance, hashPerSecond, blockReward, price, marketCap, lastMarket, changeDay, percentageChange, volume24H, open, high, low, totalVolume, supply})
            
        }
        
        this.setState({
            cryptos: cryptoArr,
            isLoading: true,
            result: ''

        })

  
    })

}
  
  render() {
     return(
        <Router>
        <div className="App" 
        style={this.state.isSwitched? 
        {backgroundColor: 'var(--color-night-mode)'} : 
        {backgroundColor: 'white'}}>

          <NavBar switchMode={this.switchMode}/>
          <Switch>
          <Route path={"/marketprices"} 
          component={(props)=><CryptoList
          cryptos={this.state.filteredCryptos}
          switchMode={this.state.isSwitched}
          {...props}/>}/>

          <Route path={"/viewcrypto/:id"}
          component={(props)=><ViewCrypto
          cryptos={this.state.cryptos}
          id={props.match.params.id}
          {...props}/>} />
          
             
            <Route path="/topvolume" 
            component={()=><VolumesTopSymbols/>} />
           
            <Route path={"/exchanges"} 
            component={ExchangesList} />

            <Route path={"/wallets"} 
            component={WalletList} />

            <Route path={"/watchlist"}
            component={Watchlist} />
             
            <Route path={"/currencyconverter"}
            component={CurrencyConverter} />
              
            <Route path={"/news"}
            component={NewsList} />
            
            <Route path="/" 
            component={Home} 
            switchMode={this.switchMode}
            isSwitched={this.state.isSwitched}/>
              
          </Switch>

      
          <Footer />
          </div>
          </Router>

      )
  }
}

const styleNight = {
  backgroundColor: 'var(--color-night-mode)',
  color: 'white'
}

const styleDay = {
  backgroundColor: 'white',
  color: 'var(--color-primary-dark)'
}
export default App;
