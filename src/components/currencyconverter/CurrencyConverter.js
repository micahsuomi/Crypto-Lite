import React, { Component } from 'react';
import '../../assets/style/currencyconverter.css';

export class CurrencyConverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputNum: '',
            btcPrice: '',
            ethPrice: '',
            xrpPrice: '',
            bchPrice: '',
            ltcPrice: '',
            etcPrice: '',
            result: '',
            price:'',
            isSwitched: true,
            cryptoResult:'',
            pricesArr: []
        }
    }

    componentDidMount() {
        const urlBTC = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'
        fetch(urlBTC)
        .then((response) => response.json())
        .then((data) => {
           let BTC = {}
           BTC.name = 'BTC'
           BTC.priceUSD = data.USD
           BTC.priceEUR = data.EUR
           this.setState({pricesArr: [...this.state.pricesArr, BTC]})
           let price = data.USD
           this.setState({btcPrice: price})

        })

        const urlETH = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR'
        fetch(urlETH)
        .then((response) => response.json())
        .then((data) => {
           let ETH = {};
           ETH.name = 'ETH';
           ETH.priceUSD = data.USD; 
           ETH.priceEUR = data.EUR

           this.setState({pricesArr: [...this.state.pricesArr, ETH]})
           let price = data.USD
           this.setState({ethPrice: price})

        })

        
        const urlXRP = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,JPY,EUR'
        fetch(urlXRP)
        .then((response) => response.json())
        .then((data) => {
            let XRP = {};
           XRP.name = 'XRP';
           XRP.priceUSD = data.USD; 
           XRP.priceEUR = data.EUR

           this.setState({pricesArr: [...this.state.pricesArr, XRP]})
           let price = data.USD
           this.setState({xrpPrice: price})

        })

        const urlBCH = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,JPY,EUR'
        fetch(urlBCH)
        .then((response) => response.json())
        .then((data) => {
            let BCH = {};
           BCH.name = 'BCH';
           BCH.priceUSD = data.USD; 
           BCH.priceEUR = data.EUR

           this.setState({pricesArr: [...this.state.pricesArr, BCH]})
           let price = data.USD
           this.setState({bchPrice: price})

        })

        const urlETC = 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,JPY,EUR'
        fetch(urlETC)
        .then((response) => response.json())
        .then((data) => {
            let ETC = {};
            ETC.name = 'ETC';
            ETC.priceUSD = data.USD; 
            ETC.priceEUR = data.EUR

            this.setState({pricesArr: [...this.state.pricesArr, ETC]})
           let price = data.USD
           this.setState({etcPrice: price})

        })

        const urlLTC = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,JPY,EUR'
        fetch(urlLTC)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let LTC = {};
            LTC.name = 'LTC';
            LTC.priceUSD = data.USD; 
            LTC.priceEUR = data.EUR

            this.setState({pricesArr: [...this.state.pricesArr, LTC]})
           let price = data.USD
           this.setState({ltcPrice: price})

        })
    }

    handleSwitch = () => {
        this.setState({isSwitched: !this.state.isSwitched});
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.price)
        console.log(this.state.inputNum)
        if(this.state.isSwitched) {
                    
            let result = this.state.inputNum / this.state.price;
            console.log(result)
            this.state.inputNum.length < 1 ? result = 0 : this.setState({result: result})
    
            
        } else {
            let result = Math.round(this.state.inputNum * this.state.price);
            console.log(result)

            this.state.inputNum.length < 1 ? result = 0 : this.setState({result: `${result} USD`})
        }
        
        
    }

    selectCurrency = (e) => {
        let {value} = e.target;
        this.setState({price : value})
        console.log(this.state.price)
    }

    handleChange = (e) => {
        let {value} = e.target;
        this.setState({inputNum: value})
        console.log(this.state.price)
         
    }
    render() {

        console.log(this.state.pricesArr)
        let {btcPrice, ethPrice, xrpPrice, bchPrice, etcPrice, ltcPrice} = this.state
        return (
            <div className="currency-form__container">
                <h1 className="main-center-header currency-header">Currency Converter</h1>

                {this.state.isSwitched ? 

                <form className="currency-converter__form" onSubmit={this.handleSubmit}>
                    <div>
                    <label>Amount in USD</label>
                    <div className="inputs-arrows__container">
                    <input type="text"
                    name="amount" 
                    value={this.state.text}
                    placeholder="amount in $"
                    onChange={this.handleChange}/>
                    <button className="switch" onClick={this.handleSwitch}>
                    <i className="fas fa-long-arrow-alt-up fa-3x arrow"></i>
                    <i className="fas fa-long-arrow-alt-down fa-3x arrow"></i>
                    </button>
                    </div>
                    </div>

                    <label>Currency</label>
                    <select className="select-currency" onChange={this.selectCurrency}>
                      <option>---Choose Currency</option>
                      <option value={btcPrice}>Bitcoin (BTC)</option>
                      <option value={ethPrice}>Ethereum (ETH)</option>
                      <option value={xrpPrice}>XRP (XRP)</option>
                      <option value={bchPrice}>Bitcoin Cash (BCH)</option>
                      <option value={ltcPrice}>Litecoin (LTC)</option>
                      <option value={etcPrice}>Ethereum Classic( ETC)</option>

                    </select>
                    <div className="btn-arrow__container">
                    <button className="calculate-btn">Calculate</button>
                    
                    </div>
                    <div className="result-container" >
                    <h2>{this.state.result}</h2>
                    
                </div>

                </form> : 
                  <form className="currency-converter__form" onSubmit={this.handleSubmit}>
                  <div>
                  <label>Amount in Crypto</label>
                  <div className="inputs-arrows__container">
                  <input type="text"
                  name="amount" 
                  value={this.state.text}
                  placeholder="amount in crypto"
                  onChange={this.handleChange}/>
                  <button className="switch" onClick={this.handleSwitch}>
                    <i className="fas fa-long-arrow-alt-down fa-3x arrow"></i>
                    <i className="fas fa-long-arrow-alt-up fa-3x arrow"></i>
                    </button>
                  </div>
                  </div>

                  <label>Currency</label>
                  <select className="select-currency" onChange={this.selectCurrency}>
                      <option>---Choose Crypto Currency</option>
                      <option value={btcPrice}>Bitcoin (BTC)</option>
                      <option value={ethPrice}>Ethereum (ETH)</option>
                      <option value={xrpPrice}>XRP (XRP)</option>
                      <option value={bchPrice}>Bitcoin Cash (BCH)</option>
                      <option value={ltcPrice}>Litecoin (LTC)</option>
                      <option value={etcPrice}>Ethereum Classic( ETC)</option>


                  </select>
                  <div className="btn-arrow__container">
                  <button className="calculate-btn">Calculate</button>
                  
                  </div>
                  <div className="result-container" >
                    <h2>{this.state.result}</h2>
                </div>

                </form> 
                }

                
                
                
            </div>
        )
    }
}

export default CurrencyConverter
