import React, {Component} from 'react';
import './BtcPrice.css';

// const API_KEY = "5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c"
class BtcPrice extends Component {
    constructor() {
        super();
        this.state = {
            newsTitle: "BTC Price",
            btcPriceSnaphsot : [],
            loading: false,
        }
    }


    componentDidMount() {
        this.setState({loading: true})
        // fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info`)
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                btcPriceSnaphsot: data, 
                loading: false
            })
            
        })

    }
    render() {
   
            

        return(
            <div className="btc-price-container">
                    <div className="btc-price-wrapper">
                        <p className="btc-price-text">{this.state.newsTitle}</p>
                        <p className="btc-price-text">USD {this.state.btcPriceSnaphsot.USD}</p>
                        <p className="btc-price-text">EUR {this.state.btcPriceSnaphsot.EUR}</p>
                        <p className="btc-price-text">JPY {this.state.btcPriceSnaphsot.JPY}</p>
                    </div>
                </div>

        )
    }
}

export default BtcPrice;