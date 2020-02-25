import React, { Component } from 'react'
import './CryptoList.css'; 
import Crypto from './Crypto';
import loadingImage from '../../imgs/loading-spinner.gif';

let flag = false;
const toggle = () => {
  flag = !flag;
  return flag;
}


class CryptoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cryptos: [],
            test: ['HTML', 'CSS', 'JS'],
            title: "Market Prices",
            loading: true,
            links: {
                
                    name: 'Name',
                    isNameClicked: false,
              
                    price: 'Price',
                    isPriceClicked: false,
              
                    change24hr: 'Change (24h)',
                    ischange24hrClicked: false,
              
                    marketCap: 'Market Cap',
                    ismarketCapClicked: false,
               
                    supply: 'Supply',
                    issupplyClicked: false
                }

            
            
        }

        this.sortByName = this.sortByName.bind(this)
        this.sortByPercentage = this.sortByPercentage.bind(this)

       
    }
   
  
    componentDidMount() {

        this.setState({loading: true})
            fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                cryptos: data,
                loading: false

            })
            
           


      
        })
     

    }
    

    handleSubmit = (event) => {
        event.preventDefault();

    }
    handleChange = (event) => {
        let cryptoArr = []
        let {name, value} = event.target;
        this.setState({[name]: value})
        if(value.length < 1) {
            this.componentDidMount()
        } else {

            for(const crypto in this.state.cryptos) {
                let{id, rank, symbol, name, price_usd, percent_change_24h, market_cap_usd,available_supply} = this.state.cryptos[crypto];
                console.log(name)
               
                if(name.toLowerCase().includes(value) || symbol.toLowerCase().includes(value)) {
                    let newObj = {}
                    newObj.id = id;
                    newObj.rank = rank;
                    newObj.symbol = symbol;
                    newObj.name = name;
                    newObj.price_usd = price_usd;
                    newObj.percent_change_24h = percent_change_24h;
                    newObj.market_cap_usd = market_cap_usd;
                    newObj.available_supply = available_supply;
                    cryptoArr.push(newObj)
                }
                this.setState({cryptos: cryptoArr})
    
                console.log(cryptoArr)
            
    
            }
        }
        
        
    }


    sortByName() {

            if(flag === true) {
                this.setState({
                    cryptos: this.state.cryptos.sort((a, b) => {
                        if(a.name > b.name) return -1;
                        if(a.name < b.name) return 1;
                        return 0;
                
                    })
                })
            } else {
                this.setState({cryptos: this.state.cryptos.reverse()})
            }
            toggle()
         

}
    sortByPercentage() {

        this.setState({
        cryptos: this.state.cryptos.sort((a, b) => {
            if(a.percent_change_24h > b.percent_change_24h) return -1;
            if(a.percent_change_24h < b.percent_change_24h) return 1;
            return 0;
    
        })
    })
    
    }
    sortBySupply = () => {

        this.setState({
        cryptos: this.state.cryptos.sort((a, b) => {
            if(a.available_supply > b.available_supply) return -1;
            if(a.available_supply < b.available_supply) return 1;
            return 0;
    
        })
    })
}

    sortByMarketCap = () => {
        this.setState({
            cryptos: this.state.cryptos.sort((a, b) => {
                if(a.market_cap_usd > b.market_cap_usd) return -1;
                if(a.market_cap_usd < b.market_cap_usd) return 1;
                return 0;
        
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

       
    let {name, price, change24hr, marketCap, supply} = this.state.links;
    let {text} = this.state.text;
        
      return(
          <div>
            <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                <span className="formtext"></span>
                <div className="search-container">
                <input
                type="text"
                name="cryptoName" 
                value={text}
                onChange={this.handleChange}
                placeholder="Search for Crypto"         
                />
            <button className="Btn-Search">Search</button>
            </div>
            <p className="form-text">These are the top {this.state.cryptos.length} crypto currencies by market cap</p>
        </form>
    </div>
          <div className="list-container">
             
             <div className="market-prices__header-container">
              <h2 className="main-center-header" id="marketPrices">{this.state.loading === true ? "Loading..." : this.state.title}</h2>
              </div>
              <div className="list-values">
                  <div className="value">Rank</div>

                  <div className="value">Symbol</div>
                  <div className="value">
                  <a href className="value-link" 
                  onClick={this.sortByName} style={this.state.isNameClicked ? style1 : style2}>{name}</a></div>

                  <div className="value">{price}</div>
                  <div className="value"><a href className="value-link" onClick={this.sortByPercentage}>{change24hr}</a></div>
                  <div className="value"><a href className="value-link" onClick={this.sortByMarketCap}>{marketCap}</a></div>
                  <div className="value"><a href className="value-link" onClick={this.sortBySupply}>{supply}</a></div>
              </div>
             
            <div>
                <div className="list-value">
                {this.state.loading ? <img src={loadingImage} className="loading-spinner" alt="loading"/> : cryptos}

                </div>
            </div>
        </div>
        </div>
     
          
      )

        
    }
}

const style1 = {color: 'var(--color-primary-light: rgb(83, 62, 83))'};
const style2 = {color: 'var(--color-primary-dark: rgb(83, 62, 83))'};
export default CryptoList;
