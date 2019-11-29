import React, { Component } from 'react'
import './CryptoList.css'; 
import Crypto from './Crypto';

class CryptoList extends Component {
    constructor() {
        super();
        this.state = {
            cryptos: [],
            title: "Market Prices",
            loading: false
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
            supply={Math.floor(crypto.available_supply)}
            />
           
            
        ))

       
      
      return(
          <div className="list-container">
             
              <h2 className="crypto-market-header" id="marketPrices">{this.state.loading === true ? "Loading..." : this.state.title}</h2>
              <div className="list-values">
                  <div className="value">Rank</div>
                  <div className="value">Symbol</div>
                  <div className="value">Name</div>
                  <div className="value">Price</div>
                  <div className="value">Change (24h)</div>
                  <div className="value">Supply</div>
                  

              </div>
             
            <div>
                <div className="list-value">
                {cryptos}

                </div>
            </div>
        </div>
     
          
      )

        
    }
}


export default CryptoList;
