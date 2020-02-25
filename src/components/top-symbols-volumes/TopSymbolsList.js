import React, { Component } from 'react';
import './TopSymbolsList.css';
import TopSymbolItem from './TopSymbolItem';
const API_KEY = "5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c";

class TopSymbolsList extends Component {
    constructor() {
        super();
        this.state = {
            title: "Exchange Top Symbols By Volume",
            loading: true,
            topSymbol: []
        }
    }

    componentDidMount() {
        fetch(`https://min-api.cryptocompare.com/data/exchange/top/volume?e=Binance&direction=to?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({topSymbol : data.Data, 
                loading : false})
        } )
    }
    render() {
        const symbols = this.state.topSymbol.map(symbolItem => (

            <TopSymbolItem
                    key = {symbolItem.key}
                    fromSymbol={symbolItem.fromSymbol}
                    toSymbol={symbolItem.toSymbol}
                    volume={symbolItem.volume}
    
             />
         ))
        return (
            <div className="top-symbols-list-container">
                <h1 className="top-symbols-list-header main-center-header">{this.state.title}</h1>
                <div className="top-symbols-list-wrapper">
                    {symbols}
                </div>
            </div>
        )
    }
}

export default TopSymbolsList;
