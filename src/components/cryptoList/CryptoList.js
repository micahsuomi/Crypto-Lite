import React, { Component } from 'react'
import '../../assets/style/cryptolist.css'; 
import Crypto from './Crypto';
import Loader from '../commons/Loader';

let flag = false;
const toggle = () => {
  flag = !flag;
  return flag;
}

const APIURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'

class CryptoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cryptos: [],
            filteredCryptos: [],
            title: "Market Prices",
            isLoading: false,
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
                },
            result: ''

            
            
        }

       
    }
   
  
    componentDidMount() {
        fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            let cryptoArr = [];
            for(const crypto in data.Data) {
                let id = data.Data[crypto].CoinInfo.id;
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
                cryptos: cryptoArr, filteredCryptos: cryptoArr,
                isLoading: true,
                result: ''

            })
            
           


      
        })
     

    }
    

    handleSubmit = (event) => {
        event.preventDefault();

    }
    handleChange = (event) => {
        let cryptoArr = []
        let {value} = event.target;
        console.log(value)
        this.setState({filteredCryptos: value})
     
            for(const crypto in this.state.cryptos) {
                let{id, img, symbol, name, price, percentageChange, marketCap, supply} = this.state.cryptos[crypto];
               
                if(name.toLowerCase().includes(value) || name.includes(value) || symbol.toLowerCase().includes(value) || symbol.includes(value)) {
                    cryptoArr.push({id, img, symbol, name, price, percentageChange, marketCap, supply})
                }
                this.setState({filteredCryptos: cryptoArr})
                this.setState({text: ''});
                if(value.length > 0) {
                    this.setState({result: `There are ${cryptoArr.length} cryptocurrencies with this search result`})
                } else {
                    this.setState({result: ''})
                }
               
            
    
            
        }
        
        
    }


    sortByName = () => {
            this.setState({isNameClicked: true, ischange24hrClicked: false, ismarketCapClicked: false, issupplyClicked: false})
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
    sortByPercentage = () => {
        this.setState({isNameClicked: false, ischange24hrClicked: true, ismarketCapClicked: false, issupplyClicked: false})
        if(flag === true) {
            this.setState({
                cryptos: this.state.cryptos.sort((a, b) => {
                    if(a.percentageChange > b.percentageChange) return -1;
                    if(a.percentageChange < b.percentageChange) return 1;
                    return 0;
            
                })
            })
        } else {
            this.setState({cryptos: this.state.cryptos.reverse()})
        } toggle()
        
    
    }
    sortBySupply = () => {
        this.setState({isNameClicked: false, ischange24hrClicked: false, ismarketCapClicked: false, issupplyClicked: true})
        this.setState({
        cryptos: this.state.cryptos.sort((a, b) => {
            if(a.supply > b.supply) return -1;
            if(a.supply < b.supply) return 1;
            return 0;
    
        })
    })
}

    sortByMarketCap = () => {
        this.setState({
            cryptos: this.state.cryptos.sort((a, b) => {
                if(a.marketCap > b.marketCap) return -1;
                if(a.marketCap < b.marketCap) return 1;
                return 0;
        
            })
        })
    }


    render() {
          

        const cryptos = this.state.filteredCryptos.map(crypto => (

            <Crypto 
            key={crypto.id} 
            img={crypto.img}
            name={crypto.name} 
            symbol={crypto.symbol} 
            price={crypto.price} 
            percentageChange={crypto.percentageChange}
            supply={crypto.supply}
            marketCap={crypto.marketCap}
            />

   
        ))

       
    let {name, price, change24hr, marketCap, supply} = this.state.links;
    let {text} = this.state.text;
        
      return(
          <div>
            <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                <p className="form-text">Top {this.state.cryptos.length} crypto currencies by market cap</p>
                <div className="search-container">
                <input
                type="text"
                name="cryptoName" 
                value={text}
                onChange={this.handleChange}
                placeholder="search crypto by name or symbol"         
                />
                <button className="Btn-Search">Search</button>
            </div>
            <p className="form-text">{this.state.result}</p>
        </form>
    </div>
          <div className="list-container">

             <div className="market-prices__header-container">
              <h2 className="main-center-header" id="marketPrices">{this.state.title}</h2>
              </div>
              <div className="list-values">
                  <div className="value"></div>

                  <div className="value">Symbol</div>
                  <div className="value">
                  <a href className="value-link" 
                  onClick={this.sortByName} style={this.state.isNameClicked ? style1 : style2}>{name}</a></div>

                  <div className="value" style={style2}>{price}</div>

                  <div className="value" 
                  style={this.state.isNameClicked ? style1 : style2}><a href className="value-link" onClick={this.sortByPercentage}>{change24hr}</a></div>

                  <div className="value" style={this.state.isNameClicked ? style1 : style2}><a href className="value-link" onClick={this.sortByMarketCap}>{marketCap}</a></div>

                  <div className="value" style={this.state.isNameClicked ? style1 : style2}><a href className="value-link" onClick={this.sortBySupply}>{supply}</a></div>
              </div>
             
            <div>
                {this.state.isLoading ? 
                <div className="list-value">
                {cryptos} 
                </div>
                  :<Loader />} 

            </div>
        </div> 
        </div>
     
          
      )

        
    }
}

const style1 = {color: 'var(--color-secondary-light)'};
const style2 = {color: 'var(--color-secondary-dark)'};
export default CryptoList;
