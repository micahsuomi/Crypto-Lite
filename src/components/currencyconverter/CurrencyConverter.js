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
            result: '',
            price:'',
            isSwitched: true,
            cryptoResult:''
        }
    }

    componentDidMount() {
        const urlBTC = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'
        fetch(urlBTC)
        .then((response) => response.json())
        .then((data) => {
           let price = data.USD
           this.setState({btcPrice: price})

        })

        const urlETH = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR'
        fetch(urlETH)
        .then((response) => response.json())
        .then((data) => {
           let price = data.USD
           this.setState({ethPrice: price})

        })

        
        const urlXRP = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,JPY,EUR'
        fetch(urlXRP)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
           let price = data.USD
           this.setState({xrpPrice: price})

        })

        const urlBCH = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,JPY,EUR'
        fetch(urlBCH)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
           let price = data.USD
           this.setState({bchPrice: price})

        })

        const urlLTC = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,JPY,EUR'
        fetch(urlLTC)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
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
        let {value, name} = e.target;
        this.setState({price : value})
        console.log(value, name)
        console.log(this.state.price)
    }

    handleChange = (e) => {
        let {value} = e.target;
        this.setState({inputNum: value})
        console.log(this.state.price)
         
    }
    render() {
        return (
            <div className="currency-form__container">
                <h1 className="main-center-header">Currency Converter</h1>

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

                    <label>Crypto</label>
                    <select className="select-currency" onChange={this.selectCurrency}>
                        <option>---Choose Currency</option>
                        <option 
                        value={this.state.btcPrice}>
                        BTC
                        </option>
                        
                        <option value={this.state.ethPrice}>ETH</option>
                        <option value={this.state.bchPrice}>BCH</option>
                        <option value={this.state.ltcPrice}>LTC</option>
                        <option value={this.state.xrpPrice}>XRP</option>

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
                      <option>---Choose Currency</option>
                      <option value={this.state.btcPrice}>BTC</option>
                      <option value={this.state.ethPrice}>ETH</option>
                      <option value={this.state.bchPrice}>BCH</option>
                      <option value={this.state.ltcPrice}>LTC</option>
                      <option value={this.state.xrpPrice}>XRP</option>


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
