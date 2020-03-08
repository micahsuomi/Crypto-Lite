import React, { Component } from 'react';
import '../../assets/style/exchangeslist.css';
import ExchangesItem from './ExchangesItem';
import Loader from '../commons/Loader';


// const API_KEY = '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
// const URL = 'https://min-api.cryptocompare.com/data/social/coin/latest?api_key='

class ExchangesList extends Component {
    constructor() {
        super();
        this.state = {
            title: 'All Exchanges General Info',
            exchangesList: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(`https://min-api.cryptocompare.com/data/v4/all/exchanges`)
        .then(response => response.json())
        .then(data => {
            console.log(data.Data);
            let exchangesArr = [];
            for(const exchange in data.Data) {
                let exchanges = data.Data[exchange];
               

                for(const name in exchanges) {
                    let pairsArr = [];
                    let exchange = name;
                    let pairs = exchanges[name].pairs;
                
                     for(const pair in pairs) {
                        let subPairArr = [];

                        //  console.log('these are pairs',pair);
                        //  pairsArr.push(pair)
                        let coin = pair
                         

                         let subPair = pairs[pair].tsyms;
                         for(const sub in subPair) {
                             subPairArr.push(sub)
                         }
                         pairsArr.push(coin, subPairArr)

                     }

                    let active = exchanges[name].isActive;
                    let topTier = exchanges[name].isTopTier;
                    exchangesArr.push({name, pairsArr, active, topTier})
                 }

                
                 this.setState({exchangesList: exchangesArr, isLoading: true})

                console.log(this.state.exchangesList)

            }

       
          
        })
    }

    render() {

        
      const exchanges = this.state.exchangesList.map((exchange, index) => ( 
      
            <ExchangesItem key={index}
                            name={exchange.name}
                            pairs={exchange.pairsArr.map((pair) => pair)}
                            // subPairs={exchange.pairsArr.map((pair, match) => pair[match])}
                           active={`${exchange.active ? 'Yes' : 'No'}`}
                           topTier={`${exchange.topTier ? 'Yes' : 'No'}`} />))
        return (
            
            <div className="exchanges-list__container">
                <h1>{this.state.title}</h1>
                {this.state.isLoading ? 

                <div className="exchanges-list__wrapper">
                    {exchanges} 
                </div> :
                <Loader />
                } 
            </div>
        )
    }
}

export default ExchangesList;
