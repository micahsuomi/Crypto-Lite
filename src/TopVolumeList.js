import React, { Component } from 'react';
import TopVolume from './TopVolume';
import './TopVolumeList.css';

class TopVolumeList extends Component {
    constructor() {
        super();
        this.state = {
            topVolume: []
        }
    }
    componentDidMount() {
        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        .then(response => response.json())
        .then(data => {
            console.log(data.Data);
            
            this.setState({
                topVolume : data.Data,
                loading: false
            })

        })
    }
    render() {
        const topVolumeData = this.state.topVolume.map((item) => (
            <TopVolume 
            key={item.CoinInfo.Id}
            image={item.CoinInfo.ImageUrl}
            name={item.CoinInfo.FullName} 
            type={item.CoinInfo.ProofType}
            open={item.DISPLAY.USD.OPEN24HOUR}
            lastMarket={item.DISPLAY.USD.LASTMARKET}
            volume={item.DISPLAY.USD.VOLUME24HOUR}
            totalVolume={item.DISPLAY.USD.TOTALVOLUME24H} />
        
        ))

        return (
            <div className="top-volume-container">
                <h1 className="main-center-header">Top Volume</h1>
                <div className="top-volume-wrapper">
                {topVolumeData}
                </div>
            </div>
        )
    }
}

export default TopVolumeList;
