import React, { Component } from 'react';
import Header from './components/header/Header';
import './components/cryptoList/CryptoList.css'; 
import Crypto from './components/cryptoList/Crypto';
import TopCryptoByMarketCap from './components/topmarketcap/TopCryptoByMarketCap';
import TopVolume from './components/top-symbols-volumes/TopVolume';
import loadingImage from './imgs/loading-spinner.gif';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            cryptos: [],
            topVolume: [],
            loading: true
        }
       
    }
   
  
    componentDidMount() {

        this.setState({loading: true})
            fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            this.setState({
                cryptos: data,
                loading: false
            })

      
        })

        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                topVolume : data.Data,
                loading: false
            })

        })

    }

    
    render() {
        const cryptos = this.state.cryptos.map(crypto => (

            <Crypto 
            key={crypto.id} 
            name={crypto.name} 
            symbol={crypto.symbol} 
            rank={crypto.rank} 
            price={Math.round(100*crypto.price_usd)/100} 
            percentageChange={crypto.percent_change_24h}
            supply={Math.floor(Math.round((crypto.available_supply)*0.000001))}
            marketCap={Math.floor(Math.round(crypto.market_cap_usd)*0.0001)}
            />

   
        ))

        const topVolumeData = this.state.topVolume.map((item) => (
            <TopVolume 
            key={item.CoinInfo.Id}
            image={item.CoinInfo.ImageUrl}
            name={item.CoinInfo.FullName} 
            type={item.CoinInfo.ProofType}
            open={item.DISPLAY.USD.OPEN24HOUR}
            lastMarket={item.DISPLAY.USD.LASTMARKET}
            volume={item.DISPLAY.USD.VOLUME24HOUR}
            totalVolume={item.DISPLAY.USD.TOTALVOLUME24H} />
        
        ))
        return (
            <div>
                
                <Header />
                <div className="list-container">
             <div className="market-prices__header-container">
              <h2 className="crypto-market-header" id="marketPrices">{this.state.loading === true ? "Loading..." : this.state.title}</h2>
              </div>
              <h2 className="main-center-header">Market Prices</h2>
              <div className="list-values">
                  <div className="value">Rank</div>
                  <div className="value">Symbol</div>
                  <div className="value">Name</div>
                  <div className="value" >Price</div>
                  <div className="value">Change (24h)</div>
                  <div className="value">Market Cap</div>
                  <div className="value">Supply</div>
              </div>
             
            <div>
                <div className="list-value">
                {this.state.loading ? <img src={loadingImage} className="loading-spinner" alt="loading"/> : cryptos}

                </div>
            </div>
            <div className="top-volume-container">
            <h1 className="main-center-header">Top Volume Coins</h1>
                <div className="top-volume-wrapper">
                {topVolumeData}
                </div>
            </div>
        </div>
                <TopCryptoByMarketCap />
                
        
            </div>
        )
    }
}

export default Home
