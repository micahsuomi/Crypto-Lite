import React, { Component } from 'react';
import TopExchangesItem from './TopExchangesItem';
import '../../assets/style/TopExchangesVolume.css';

class TopExchangesVolume extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            title: 'Top Exchanges Volume Data by Pair',
            topExchanges: []
        }
    }

    componentDidMount() {
        fetch(`https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD&limit=21`)
        .then(response => response.json())
        .then(data => {
            console.log(data.Data)
            this.setState({
                topExchanges: data.Data,
                loading: false
            })
           
        })

    }
    
    render() {
        const topExchangesList = this.state.topExchanges.map(exchange => (
            <TopExchangesItem 
                key = {exchange.exchange}
                exchange = {exchange.exchange}
                fromSymbol = {exchange.fromSymbol}
                toSymbol = {exchange.toSymbol}
                volume24H = {Math.round(exchange.volume24h)/100}
                volume24HTo = {Math.round(exchange.volume24hTo)/100}

                />
        ))
        return (
            <div className="top-exchanges-volume-container">
                <h1 className="main-center-header">{this.state.title}</h1>
                <ul className="top-exchanges-volume-wrapper">
                    <li className="top-exchanges-volume-list bold">Exchange</li>
                    <li className="top-exchanges-volume-list bold">From Symbol</li>
                    <li className="top-exchanges-volume-list bold">To Symbol</li>
                    <li className="top-exchanges-volume-list bold">Vol 24H</li>
                    <li className="top-exchanges-volume-list bold">Vol 24H To</li>
                </ul>
                <div className="top-exchanges-volume__item">
                {topExchangesList}
                </div>
            </div>
        )
    }
}

export default TopExchangesVolume
