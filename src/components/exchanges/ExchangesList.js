import React, { Component } from 'react';
import './ExchangesList.css';
import ExchangesItem from './ExchangesItem';

const API_KEY = '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'

class ExchangesList extends Component {
    constructor() {
        super();
        this.state = {
            title: 'All Exchanges General Info',
            exchangesList: []
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(`https://min-api.cryptocompare.com/data/social/coin/latest?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.Data);

           /* this.setState({
                exchangesList : data.Data,
                loading: false
            })*/
          
        })
    }

    

    render() {
        
       /*const exchanges = this.state.exchangesList.map(exchange => (
            <ExchangesItem 
            key={exchange.CryptoCompare.Points}
            name={exchange.CryptoCompare.Followers}
           
            />
        ))*/
        return (
            <div className="exchanges-list__container">
                <h1>{this.state.title}</h1>
                <div className="exchanges-list__wrapper">
                </div>
            </div>
        )
    }
}

export default ExchangesList;
