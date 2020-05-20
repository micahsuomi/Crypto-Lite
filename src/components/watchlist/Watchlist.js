import React, { Component } from 'react';
import '../../assets/style/watchlist.css';
import '../../assets/style/searchform.css';
import WatchListItem from './WatchListItem';

class Watchlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BTC: {},
            isSelected: false,
            cryptos: [],
            watchlistArr: [],
            query: '',
            warning: '',
            watchListResult: ''

            
        }
    }

    componentDidMount() {
       
        const APIURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'

        fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            let cryptoArr = [];
            for(const crypto in data.Data) {
                let coinInfo = data.Data[crypto].CoinInfo;
                let coinData = data.Data[crypto].DISPLAY.USD;
                let id = coinInfo.Id;
                let img = coinInfo.ImageUrl;
                let name = coinInfo.FullName;
                let symbol = coinInfo.Name;
                let price = coinData.PRICE;
                let percentageChange = coinData.CHANGEPCTDAY;
                let supply = coinData.SUPPLY;
                let marketCap = coinData.MKTCAP;
                cryptoArr.push({id, img, name, symbol, price, percentageChange, supply, marketCap})
                
            }
            
            this.setState({
                cryptos: cryptoArr

            })

      
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.query === '') {
            console.log('select one currency', this.state.watchlistArr)
            this.setState({warning: 'Select one currency'})

        } else {
            this.setState({isSelected: true})

            for(let i = 0; i < this.state.cryptos.length; i++) {
                let crypto = this.state.cryptos[i]
                let symbol = crypto.symbol
                let index = this.state.cryptos.indexOf(crypto)
        
                if(this.state.query === symbol && this.state.watchlistArr.indexOf(index !== -1)) {
                    
                    console.log('this is the symbol', crypto.symbol, index)
                    
                        console.log(i, crypto, this.state.query)
                        let cryptoObj = {};
    
                        let {id, img, name, symbol, price, percentageChange, supply, marketCap} = crypto;
                        cryptoObj.id = id;
                        cryptoObj.img = img;
                        cryptoObj.name = name;
                        cryptoObj.symbol = symbol;
                        cryptoObj.price = price;
                        cryptoObj.percentageChange = percentageChange;
                        cryptoObj.supply = supply;
                        cryptoObj.marketCap = marketCap;
                        // console.log(cryptoObj)
                        //this.setState({watchlistArr: [...this.state.watchlistArr, cryptoObj]})
                        this.state.watchlistArr.push(cryptoObj)
                        console.log(this.state.watchlistArr)
                        this.setState({warning: '', query: ''})   
                    
                    } 
                
        }


        }
    }

    deleteCurrency = (id) => {
        let undeletedCryptos = this.state.watchlistArr.filter(crypto => crypto.id !== id)
        this.setState({watchlistArr: undeletedCryptos});
        console.log(this.state.watchlistArr);
        
    }
    handleChange = (e) => {
        let {value} = e.target;
        this.setState({query: value})
        
    }


    render() {

        const watchlist = this.state.watchlistArr.map((watchlist) => (
            <WatchListItem  key = {watchlist.id} 
                            watchlist={watchlist}
                            deleteCurrency={()=> this.deleteCurrency(watchlist.id)}/>
                ))
        return (
            <div className="watchlist-container">
            <div className="watchlist-wrapper">

                <h1 className="main-center-header watchlist-header">Watchlist</h1>

                <form className="watchlist-form" onSubmit={this.handleSubmit}>
                    <select className="select-watchlist__currency" 
                    onChange={this.handleChange}>
                      <option value=''>---Select Currency</option>
                      <option value='BTC'>Bitcoin</option>        
                      <option value='ETH'>Ethereum</option>        
                      <option value='XRP'>XRP</option>     
                      <option value='USDT'>Tether</option>     
                      <option value='BCH'>Bitcoin Cash</option>     
                      <option value='BSV'>Bitcoin SV</option>     
                      <option value='LTC'>Litecoin</option>     
                      <option value='EOS'>EOS</option>    
                      <option value='LINK'>ChainLink</option>     
                      <option value='BNB'>Binance Coin</option>     
                      <option value='HT'>Huobi Token</option>     
                      <option value='XTZ'>Tezos</option>     
                      <option value='XLM'>Stellar</option>     
                      <option value='XMR'>Monero</option>     
                      <option value='ADA'>Cardano</option>     
                      <option value='TRX'>Tron</option>     
                      <option value='USDC'>USD Coin</option>     
                    </select>
                    <button className="watchlist-add__btn">Add</button>
                </form>
                <p className="warning">{this.state.warning}</p>

            
            </div>

            {
                this.state.isSelected && this.state.watchlistArr.length > 0 ?
            <div className="watchlist-currencies__container">
                <div className="watchlist-result"><p>Watchlist Items: {this.state.watchlistArr.length} 
                </p></div>

            <div className="watchlist-list__values hide-mobile">
                  <div className="watchlist-value"></div>
                  <div className="watchlist-value">Symbol</div>
                  <div className="watchlist-value">Name</div>
                  <div className="watchlist-value" >Price</div>
                  <div className="watchlist-value">Change (24h)</div>
                  <div className="watchlist-value">Market Cap</div>
                  <div className="watchlist-value hide-mobile">Supply</div>
                  <div className="watchlist-value hide-mobile">Remove</div>

              </div>
            </div>
            : ''
            }

            <div className="watchlist-items">
                {watchlist}
            </div>
            </div>


            
            


            
        )
    }
}

export default Watchlist;
