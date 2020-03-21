import React, { Component } from 'react';
import '../../assets/style/exchangeslist.css';
import '../../assets/style/searchform.css';
import TopExchangesItem from './TopExchangeItem';
import ExchangesItem from './ExchangesItem';
import Loader from '../commons/Loader';



// const API_KEY = '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
// const URL = 'https://min-api.cryptocompare.com/data/social/coin/latest?api_key='

class ExchangesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            title: 'All Exchanges General Info',
            exchangesList: [],
            filteredExchanges: [],
            isLoading: false,
            isSearching: false,
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(`https://min-api.cryptocompare.com/data/v4/all/exchanges`)
        .then(response => response.json())
        .then(data => {
            let exchangesArr = [];
            for(const exchange in data.Data) {
                let exchanges = data.Data[exchange];
               

                for(const name in exchanges) {
                    let coinsArr = [];
                    let pairs = exchanges[name].pairs;
                
                     for(const pair in pairs) {
                        let pairsArr = [];
                        let coinObj = {}


                        //  pairsArr.push(pair)

                        //these are the currency trading
                         coinObj.name = pair

                         let subPair = pairs[pair].tsyms;
                         //these are the pair trading with that currency
                        //  console.log(subPair)
                         for(const sub in subPair) {
                             pairsArr.push(sub)
                             coinObj.pairs = pairsArr 

                         }
                         coinsArr.push(coinObj)

                     }

                    let active = exchanges[name].isActive;
                    let topTier = exchanges[name].isTopTier;
                    exchangesArr.push({name, coinsArr, active, topTier})
                 }

                
                 this.setState({
                     exchangesList: exchangesArr, 
                     filteredExchanges: exchangesArr, 
                     isLoading: true})

            }

       
          
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }
    handleChange = (e) => {
        let exchangesArr = [];
        let {value} = e.target;
        console.log(value)   
        this.setState({filteredExchanges: value})
     
        
        for(const exchange of this.state.exchangesList) {
            let {name, active, topTier} = exchange;
            let coinsArr = exchange.coinsArr;
            if(name.toLowerCase().includes(value) || name.includes(value)) {
                exchangesArr.push({name, coinsArr, active, topTier})
            }
            this.setState({
                filteredExchanges: exchangesArr,
                isSearching: true});
                if(value.length < 1) {
                    this.setState({isSearching: false})
                }
        }

    }
    

    render() {

      let filteredExchangeArr = [];
      for(const exchange of this.state.filteredExchanges) {
        let filteredExchangesObj = {}
          filteredExchangesObj.name = exchange.name;
          filteredExchangesObj.coinsArr = exchange.coinsArr.length;
          filteredExchangeArr.push(filteredExchangesObj)

      }

      
      

      let sortedArr = filteredExchangeArr.sort((a, b) => {
          if(a.coinsArr > b.coinsArr) return -1;
          if(a.coinsArr < b.coinsArr) return 1;
          return 0;
      })
      
      console.log(sortedArr)

      let slicedExchanges = sortedArr.slice(0, 5);
      console.log(slicedExchanges)

      let topCoinsExchanges = slicedExchanges.map((exchange, index) => (
          <TopExchangesItem key={index}
                            name={exchange.name}
                            coins={exchange.coinsArr} />
      ))

      const exchanges = this.state.filteredExchanges.map((exchange, index) => ( 
      
            <ExchangesItem key={index}
                           name={exchange.name}
                           coins={exchange.coinsArr.map((coin) => coin)}
                           active={`${exchange.active ? 'Yes' : 'No'}`}
                           topTier={`${exchange.topTier ? 'Yes' : 'No'}`} />))
        
        let {text} = this.state.text;

        return (
            

            <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <p className="form-text">There are {this.state.exchangesList.length} total exchanges available</p>
                    <div className="search-container">
                    <input
                    type="text"
                    name="exchangename" 
                    value={text}
                    onChange={this.handleChange}
                    placeholder="search exchange by name"         
                    />
                    <button className="Btn-Search">Search</button>
                </div>
                <p className="form-text">{this.state.result}</p>
            </form>

             <div className="exchanges-list__container">
            <h1 className="main-center-header">{this.state.title}</h1>

                {this.state.isLoading ? 
                <div>
                { this.state.isSearching ? '' :
                <div className="top-currencies__exchanges__container">
                    <h2>Top {slicedExchanges.length} exchanges with most currencies</h2>
                    <div className="top-currencies__exchanges__wrapper">
                    {topCoinsExchanges}
                </div>
                

                    </div>
                    }

                <div className="exchanges-list__wrapper">
                    {exchanges} 
                </div>
                </div>   :
                <Loader />
                }  
            </div>  
            </div>
        )
    }
}

export default ExchangesList;
