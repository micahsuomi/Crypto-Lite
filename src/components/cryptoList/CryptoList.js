import React, { Component } from 'react'
import '../../assets/style/cryptolist.css'; 
import '../../assets/style/searchform.css';
import Crypto from './Crypto';
import Loader from '../commons/Loader';
import TopGainer from './TopGainer';



let flag = false;
const toggle = () => {
  flag = !flag;
  return flag;
}

let index;
let iconsClass = [
    {icon1: 'fas fa-sort-up sort-arrow'},
    {icon2: 'fas fa-sort-down sort-arrow'}

]

let iconStyle;
console.log(iconStyle)

class CryptoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cryptos: [],
            filteredCryptos: [],
            title: "Market Prices",
            isLoading: false,
            isSearching: false,
            links: {
                
                    name: 'Name',  
                    isNameClicked: false,

                    price: 'Price',   
                    isPrice: false,
  
                    change24hr: 'Change (24h)',
                    ischange24hrClicked: false,
              
                    marketCap: 'Market Cap',
                    ismarketCapClicked: false,
               
                    supply: 'Supply',
                    issupplyClicked: false,
                    
                },
            result: ''

            
            
        }

       
    }
   
  
    componentDidMount() {
        const APIURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'

        fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            console.log(data.Data)
            let cryptoArr = [];
            for(const crypto in data.Data) {
                let coinInfo = data.Data[crypto].CoinInfo;
                let coinDataDisplay = data.Data[crypto].DISPLAY.USD;
                let coinDataRaw = data.Data[crypto].RAW.USD;

                let id = coinInfo.Id;
                let img = coinInfo.ImageUrl;
                let name = coinInfo.FullName;
                let symbol = coinInfo.Name;
                let price = coinDataDisplay.PRICE;
                let rawPrice = coinDataRaw.PRICE;
                let percentageChange = coinDataDisplay.CHANGEPCTDAY;
                let rawPercentageChange = coinDataRaw.CHANGEPCTDAY;
                let rawSupply = coinDataRaw.SUPPLY;
                let supply = coinDataDisplay.SUPPLY;
                let rawMarketCap = coinDataRaw.MKTCAP;
                let marketCap = coinDataDisplay.MKTCAP;
                cryptoArr.push({id, img, name, symbol, price, rawPrice, percentageChange, rawPercentageChange, rawSupply, supply, marketCap, rawMarketCap})
                
            }
            
            this.setState({
                cryptos: cryptoArr, filteredCryptos: cryptoArr,
                isLoading: true,
                result: ''

            })

            console.log(this.state.filteredCryptos)

      
        })
     

    }
    

    handleSubmit = (event) => {
        event.preventDefault();

    }
    handleChange = (event) => {
        let cryptoArr = []
        let {value} = event.target;
        this.setState({filteredCryptos: value})
     
            for(const crypto in this.state.cryptos) {
                let{id, img, symbol, name, price, rawPrice, percentageChange, rawPercentageChange, marketCap, rawMarketCap, rawSupply, supply} = this.state.cryptos[crypto];
               
                if(name.toLowerCase().includes(value) || name.includes(value) || symbol.toLowerCase().includes(value) || symbol.includes(value)) {
                    cryptoArr.push({id, img, symbol, name, price, rawPrice, percentageChange, rawPercentageChange, marketCap, rawMarketCap, rawSupply, supply})
                }
                this.setState({filteredCryptos: cryptoArr})
                this.setState({text: ''});
                if(value.length > 0) {
                    this.setState({
                        result: `There are ${cryptoArr.length} cryptocurrencies with this search result`,
                        isSearching: true})
                } else {
                    this.setState({isSearching: false, result: ''})
                }

            
        }
        
        
    }


    sortByName = () => {
            this.setState({
                isNameClicked: true,
                isPriceClicked: false,
                ischange24hrClicked: false,
                ismarketCapClicked: false,
                issupplyClicked: false
            });
            if(flag === true) {
                index = 0
                iconStyle = iconsClass[index].icon1
                this.setState({
                    
                    cryptos: this.state.filteredCryptos.sort((a, b) => {
                        if(a.name > b.name) return -1;
                        if(a.name < b.name) return 1;
                        return 0;
                
                    })
                })
            } else {
                index = 1
                iconStyle = iconsClass[index].icon2
                this.setState({
                    cryptos: this.state.cryptos.reverse()})
            }
            toggle()
         
}


sortByPrice = () => {
    this.setState({
        isNameClicked: false,
        isPriceClicked: true,
        ismarketCapClicked: false,
        issupplyClicked: false
    });
    if(flag === true) {
        index = 0
        iconStyle = iconsClass[index].icon1
        this.setState({
            
            cryptos: this.state.filteredCryptos.sort((a, b) => {
                if(a.rawPrice > b.rawPrice) return -1;
                if(a.rawPrice < b.rawPrice) return 1;
                return 0;
        
            })
        })
    } else {
        index = 1
        iconStyle = iconsClass[index].icon2
        this.setState({
            cryptos: this.state.cryptos.reverse()})
    }
    toggle()
 
}
    sortByPercentage = () => {
        this.setState({
            isNameClicked: false,
            isPriceClicked: false,
            ischange24hrClicked: true,
            ismarketCapClicked: false,
            issupplyClicked: false
        })
        index = 0
        iconStyle = iconsClass[index].icon1
        if(flag === true) {
            this.setState({
                cryptos: this.state.filteredCryptos.sort((a, b) => {

                    if((a.rawPercentageChange > b.rawPercentageChange)) return -1;
                    if((a.rawPercentageChange < b.rawPercentageChange)) return 1;
                    return 0;
            
                })
            })
        } else {
            index = 1
            iconStyle = iconsClass[index].icon2
            this.setState({cryptos: this.state.cryptos.reverse()})
        } toggle()
        
    
    }

    sortBySupply = () => {
        this.setState({
            isNameClicked: false,
            isPriceClicked: false,
            ischange24hrClicked: false,
            ismarketCapClicked: false,
            issupplyClicked: true
        })
        index = 0
        iconStyle = iconsClass[index].icon1;
        if(flag === true) {
            this.setState({
                cryptos: this.state.cryptos.sort((a, b) => {
                                
                    if(parseInt(a.rawSupply) > parseInt(b.rawSupply)) return -1;
                    if(parseInt(a.rawSupply) < parseInt(b.rawSupply)) return 1;
                    return 0;

                    
            
                })
            })
        } else {
            this.setState({cryptos: this.state.cryptos.reverse()});
            index = 1
            iconStyle = iconsClass[index].icon2;
        }
        toggle()
        
    

}

    sortByMarketCap = () => {
        this.setState({
            isNameClicked: false,
            isPriceClicked: false,
            ischange24hrClicked: false,
            ismarketCapClicked: true,
            issupplyClicked: false
        });
        index = 0
        iconStyle = iconsClass[index].icon1;
        if(flag === true) {
            this.setState({
                cryptos: this.state.filteredCryptos.sort((a, b) => {
                    if(a.rawMarketCap > b.rawMarketCap) return -1;
                    if(a.rawMarketCap < b.rawMarketCap) return 1;
                    return 0;
            
                })
            })
        
        } else {
            this.setState({cryptos: this.state.filteredCryptos.reverse()});
            index = 1
            iconStyle = iconsClass[index].icon2;
        }
        toggle();

    }


    render() {

        let filteredPerformers = []; 
        let filteredLosers = [];
        for(const crypto of this.state.filteredCryptos) {
            let performersObj = {};
            performersObj.id = crypto.id;
            performersObj.img = crypto.img;
            performersObj.name = crypto.name;
            performersObj.symbol = crypto.symbol;
            performersObj.price = crypto.price;
            performersObj.percentageChange = crypto.percentageChange;
            filteredPerformers.push(performersObj);
        }

        let sortedPerformers = filteredPerformers.sort((a, b) => {
            if(a.percentageChange > b.percentageChange) return -1;
            if(a.percentageChange < b.percentageChange) return 1;
            return 0
        })
        let topFivePerformers = sortedPerformers.slice(0, 5);
        

        let topGainersList = topFivePerformers.map((performer) => (
            <TopGainer key={performer.id}
                       performer={performer} />
        ))
        const cryptos = this.state.filteredCryptos.map(crypto => (
            <Crypto key={crypto.id}
                    crypto={crypto}/>

        ))
       
    let {name, price, change24hr, marketCap, supply} = this.state.links;
    let {text} = this.state.text;
      return(
          <div>
            <div>
                <form onSubmit={this.handleSubmit} 
                className="form-container">
                <p className="form-text">
                Top {this.state.cryptos.length} crypto currencies by market cap</p>

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
    <div className="top-performers__container">

        {
            this.state.isSearching ? '' :  
            <div>
            <h3 className="top-performers__header">Top {topFivePerformers.length} Performers </h3>
                <div className="top-gainer-list-wrapper">
                    {topGainersList}
                </div>
                </div>
             }
            

             <div className="market-prices__header-container">
              <h2 className="main-center-header" id="marketPrices">{this.state.title}</h2>
              </div>
              <div className="list-values">
                  <div className="value"></div>

                  <div className="value">Symbol</div>
                  <div className="value">
                      
                  {
                          this.state.isNameClicked ?
                          <i className={iconStyle}></i>
                          :
                          ''
                      }
                 
                  <p className="value-link" 
                  onClick={this.sortByName}>{name}</p>
                      </div>

                  <div className="value">
                  {
                    this.state.isPriceClicked ?
                    <i className={iconStyle}></i>
                    :
                    ''
                }
                      
                  <p className="value-link" 
                    onClick={this.sortByPrice}>{price}</p></div>

                  <div className="value">
                   {
                    this.state.ischange24hrClicked ?
                    <i className={iconStyle}></i>
                    :
                    ''
                }
           
                      <p className="value-link" 
                      onClick={this.sortByPercentage}>
                          {change24hr}
                          </p></div>

                  <div className="value">
                  {
                          this.state.ismarketCapClicked ?
                          <i className={iconStyle}></i>
                          :
                          ''
                      }
                 
                      <p className="value-link" 
                      onClick={this.sortByMarketCap}>
                          {marketCap}
                          </p></div>

                  <div className="value hide-mobile">
                  {
                          this.state.issupplyClicked ?
                          <i className={iconStyle}></i>
                          :
                          ''
                      }
                 
                      <p className="value-link" 
                      onClick={this.sortBySupply}>
                        {supply}
                        </p></div>
              </div>
             
            <div>
                {this.state.isLoading ? 
                <div>
               
                <div className="list-value">
                {cryptos} 
                </div>
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
