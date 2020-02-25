import React, { Component } from 'react';
import VolumeByPairItem from './VolumeByPairItem';
import './VolumeByPairList.css';


class VolumeByPairList extends Component {
    constructor() {
        super();
        this.state = {
            title: "Toplist by Pair Volume",
            wallets: [],
            isLoading: true
        }
    }
    componentDidMount() {
        fetch(`https://min-api.cryptocompare.com/data/top/volumes?tsym=BTC`)
        .then(response => response.json())
        .then(data => {
            this.setState({wallets : data.Data,
                isLoading: false})
           
        })
    }
    render() {
        const topVolumesList = this.state.wallets.map(volumeItem => (
            <VolumeByPairItem 
            key={volumeItem.ID}
            name={volumeItem.NAME}
            supply={Math.round(volumeItem.SUPPLY)}
            symbol={volumeItem.SYMBOL}
            volume={Math.round(volumeItem.VOLUME24HOURTO)}/>
        ))
        
        return (
            <div className="toplist-by-pair-container">
                <h1 className="main-center-header">{this.state.title}</h1>
                <ul className="toplist-by-pair__wrapper">
                    <li className="toplist-by-pair__list bold">Name</li>
                    <li className="toplist-by-pair__list bold">Supply</li>
                    <li className="toplist-by-pair__list bold">Symbol</li>
                    <li className="toplist-by-pair__list bold">Volume</li>
                </ul>
                <div className="toplist-by-pair-item__container">
                {topVolumesList}  
                </div>
            </div>
        )
    }
}

export default VolumeByPairList;
