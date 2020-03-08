import React, { Component } from 'react';
import Header from './components/header/Header';
import './assets/style/cryptolist.css'; 
import './assets/style/newslist.css'; 
import Crypto from './components/cryptoList/Crypto';
import TopVolume from './components/top-symbols-volumes/TopVolume';
import News from './components/news/News';
import Loader from './components/commons/Loader';
import './Home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            cryptos: [],
            topVolume: [],
            newsList: [],
            isLoading: false
        }
       
    }
   
    componentDidMount() {
        const APIURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            console.log(data.Data);
            
            this.setState({
                cryptos: data.Data,
                isLoading: true
            })

      
        })

        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                topVolume : data.Data,
                isLoading: true
            })

        })

        fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then(response => response.json())
        .then(data => {

            this.setState({
                newsList : data.Data,
                loading: false
            })
          
        })

    }

    
    render() {
        
        const cryptos = this.state.cryptos.map(crypto => (

            <Crypto 
            key={crypto.CoinInfo.id} 
            img={crypto.CoinInfo.ImageUrl}
            name={crypto.CoinInfo.FullName} 
            symbol={crypto.CoinInfo.Name} 
            price={crypto.DISPLAY.USD.PRICE} 
            percentageChange={crypto.DISPLAY.USD.CHANGEPCTDAY}
            supply={crypto.DISPLAY.USD.SUPPLY}
            marketCap={crypto.DISPLAY.USD.MKTCAP}
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

        const newsList = this.state.newsList.map(newsItem => (
            <News
                    key={newsItem.id}
                    body={newsItem.body}
                    categories={newsItem.categories}
                    title={newsItem.title}
                    image={newsItem.imageurl}
                    articleUrl={newsItem.url}
                    tags={newsItem.tags}
    
             />
         ))
        return (
            
            <div>
                
                <Header />

                <div className="list-container">
                    
             <div className="market-prices__header-container">
                 
              <h2 className="crypto-market-header" id="marketPrices">{this.state.title}</h2>
              </div>
              <h2 className="main-center-header">Market Prices</h2>
              
              <div className="list-values">
                  <div className="value"></div>
                  <div className="value">Symbol</div>
                  <div className="value">Name</div>
                  <div className="value" >Price</div>
                  <div className="value">Change (24h)</div>
                  <div className="value">Market Cap</div>
                  <div className="value">Supply</div>
              </div>
              { this.state.isLoading ? 

             
            <div>
                    <div className="list-value">
                    {cryptos} 

                </div>
             
            
            </div>
            : <Loader />
        }
            <div className="top-volume-container">
            <h1 className="main-center-header">Top Volume Coins</h1>
                <div className="top-volume-wrapper">
                {topVolumeData}
                </div>
            </div>
        </div>
                <div className="news-container">
                    {newsList}
                </div>
                
        
            </div>
        )
    }
}

export default Home
