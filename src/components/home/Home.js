import React, { Component } from 'react';
import Header from '../header/Header';
import '../../assets/style/cryptolist.css'; 
import '../../assets/style/newslist.css'; 
import Crypto from '../cryptoList/Crypto';
import TopVolume from '../top-symbols-volumes/TopVolume';
import News from '../news/News';
import Loader from '../commons/Loader';
import NewFeedList from '../news/NewsFeedList';
import '../../assets/style/Home.css';
import { NavLink } from 'react-router-dom';

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
            
            let cryptoArr = [];
            for(const crypto in data.Data) {
                
                let id = data.Data[crypto].CoinInfo.Id;
                let img = data.Data[crypto].CoinInfo.ImageUrl;
                let name=data.Data[crypto].CoinInfo.FullName;
                let symbol=data.Data[crypto].CoinInfo.Name;
                let price = data.Data[crypto].DISPLAY.USD.PRICE;
                let percentageChange=data.Data[crypto].DISPLAY.USD.CHANGEPCTDAY;
                let supply=data.Data[crypto].DISPLAY.USD.SUPPLY;
                let marketCap=data.Data[crypto].DISPLAY.USD.MKTCAP;
                cryptoArr.push({id, img, name, symbol, price, percentageChange, supply, marketCap})
                
            }
            
            this.setState({
                cryptos: cryptoArr, 
                isLoading: true,
                result: ''

            })

      
        })

        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        .then(response => response.json())
        .then(data => {

            let volumeArr = [];
            for(const volume in data.Data) {

                let infoData = data.Data[volume].CoinInfo;
                let priceData = data.Data[volume].DISPLAY.USD;
                let id = infoData.Id;
                let img = infoData.ImageUrl;
                let name = infoData.FullName;
                let proofType = infoData.ProofType;
                let open = priceData.OPEN24HOUR;
                let lastMarket = priceData.LASTMARKET;
                let volume24HR = priceData.VOLUME24HOUR;
                let totalVolume = priceData.TOTALVOLUME24H;
                volumeArr.push({id, img, name, proofType, open, lastMarket, volume24HR, totalVolume});

                

                
            }
            this.setState({
                topVolume : volumeArr,
                isLoading: true
            })

        })

        fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then(response => response.json())
        .then(data => {

            this.setState({
                newsList : data.Data,
                loading: true
            })
          
        })

    }

    
    render() {
        
        const cryptos = this.state.cryptos.map(crypto => (

            <Crypto 
            key={crypto.id}
            crypto={crypto} 
            
            />
   
        ))

        const topVolumeData = this.state.topVolume.map((volume) => (
            <TopVolume 
            key={volume.id}
            volume={volume} />
        
        ))

        const newsList = this.state.newsList.map((newsItem) => (
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
                    
             <div className="market-prices__header-container" id="home-main">
                 
              <h2 className="main-center-header">Market Prices</h2>
              </div>

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
                    <NavLink to="/marketprices"><p className="view-all">View All</p></NavLink>
            </div>
            : <Loader />
        }

        {this.state.isLoading ? 

             <div className="top-volume-container">
             <h1 className="main-center-header">Top Volume Coins</h1>
                 <div className="top-volume-wrapper">
                 {topVolumeData}
                 </div>
             </div>
            : <Loader />
        }

        {this.state.isLoading ? 
                <div className="news-container">
                 <div className="news-list-wrapper">
                    {newsList}
                    </div>
                </div> : <Loader />
        }
        <NewFeedList />
                
            </div>
            </div>
        )
    }
}

export default Home
