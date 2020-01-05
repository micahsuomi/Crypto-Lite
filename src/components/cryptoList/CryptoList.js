import React, { Component } from 'react'
import './CryptoList.css'; 
import Crypto from './Crypto';
import loadingImage from '../../imgs/loading-spinner.gif';

class CryptoList extends Component {
    constructor() {
        super();
        this.state = {
            cryptos: [],
            title: "Market Prices",
            loading: true
        }
    }
    
    
    componentDidMount() {

        this.setState({loading: true})
        fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                cryptos: data,
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

       
      
      return(
          <div className="list-container">
             <div className="market-prices__header-container">
              <h2 className="crypto-market-header" id="marketPrices">{this.state.loading === true ? "Loading..." : this.state.title}</h2>
              </div>
              <div className="list-values">
                  <div className="value">Rank</div>
                  <div className="value">Symbol</div>
                  <div className="value">Name</div>
                  <div className="value">Price</div>
                  <div className="value">Change (24h)</div>
                  <div className="value">Market Cap</div>
                  <div className="value">Supply</div>
              </div>
             
            <div>
                <div className="list-value">
                {this.state.loading ? <img src={loadingImage} className="loading-spinner" alt="loading"/> : cryptos}

                </div>
            </div>
        </div>
     
          
      )

        
    }
}


export default CryptoList;
