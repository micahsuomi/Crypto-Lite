import React, { Component } from 'react';
import '../../assets/style/currencyconverter.css';

export class CurrencyConverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pricesArr: [],
            query: '',
            inputNum: '',
            warning: '',
            result: '',
            resultSymbol: '',
            price:'',
            isSwitched: true,
            cryptoResult:''
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
                
                let id = data.Data[crypto].CoinInfo.Id;
                let name=data.Data[crypto].CoinInfo.FullName;
                let symbol=data.Data[crypto].CoinInfo.Name;
                let price = data.Data[crypto].RAW.USD.PRICE;
                cryptoArr.push({id, name, symbol, price})
                
            }
            
            this.setState({
                pricesArr: cryptoArr

            })

        })
        
    }

    handleSwitch = () => {
        this.setState({isSwitched: !this.state.isSwitched});
    }

    //with new functions

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.inputNum.length < 1 || this.state.query === '') {
            this.setState({
                warning: 'Please fill both values', 
                result: '', 
                resultSymbol: ''})

        } else {

            for(const crypto of this.state.pricesArr) {
                let symbol = crypto.symbol;
                if(this.state.query === symbol) {
                    let {price} = crypto;
                    if(this.state.isSwitched) {
                    let result = this.state.inputNum / price;
                    console.log(result)
                    this.state.inputNum.length < 1 ? result = 0 : this.setState({result: result, resultSymbol: symbol, warning: ''})
                    
                    
                    } else {
                        let result = Math.round(this.state.inputNum * price);
                        this.state.inputNum.length < 1 ? result = 0 : this.setState({result: `${result} USD`, warning: ''})
                    }
                }
            }
        }
        
    }

    selectCurrency = (e) => {
        let {value} = e.target;
        this.setState({query: value});
        
    }

    handleChange = (e) => {
        let {value} = e.target;
        this.setState({inputNum: value})
         
    }

    render() {

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
                      <option value='BTC'>Bitcoin (BTC)</option>
                      <option value='ETH'>Ethereum (ETH)</option>
                      <option value='XRP'>XRP (XRP)</option>
                      <option value='BCH'>Bitcoin Cash (BCH)</option>
                      <option value='LTC'>Litecoin (LTC)</option>
                      <option value='ETC'>Ethereum Classic( ETC)</option>

                    </select>
                  
                    <div className="btn-arrow__container">
                    <button className="calculate-btn">Calculate</button>
                    
                    </div>
                <div className="warning">{this.state.warning}</div>
                    <div className="result-container" >
                    <h2>{this.state.result}</h2>
                    <h2 className="result-symbol">{this.state.resultSymbol}</h2>
                    
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
                      <option>---Choose Currency</option>
                      <option value='BTC'>Bitcoin (BTC)</option>
                      <option value='ETH'>Ethereum (ETH)</option>
                      <option value='XRP'>XRP (XRP)</option>
                      <option value='BCH'>Bitcoin Cash (BCH)</option>
                      <option value='LTC'>Litecoin (LTC)</option>
                      <option value='ETC'>Ethereum Classic( ETC)</option>
                    </select>
                  <div className="btn-arrow__container">
                  <button className="calculate-btn">Calculate</button>
                  
                  </div>
                  <div className="warning">{this.state.warning}</div>
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
