import React, { Component } from 'react';
import TopVolume from './TopVolume';
import '../../assets/style/TopVolumeList.css';

class TopVolumeList extends Component {
    constructor() {
        super();
        this.state = {
            topVolume: []
        }

    }
    
    componentDidMount() {
        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD")
        .then(response => response.json())
        .then(data => {
            console.log(data.Data)
            let volumeArr = [];
            for(const volume in data.Data) {

                let infoData = data.Data[volume].CoinInfo;
                let priceData = data.Data[volume].DISPLAY.USD;
                let id = infoData.Id;
                let img = infoData.ImageUrl;
                let name = infoData.FullName;
                let proofType = infoData.ProofType;
                let open = priceData.OPEN24HOUR;
                let lastMarket = priceData.LASTMARKET;
                let volume24HR = priceData.VOLUME24HOUR;
                let totalVolume = priceData.TOTALVOLUME24H;
                volumeArr.push({id, img, name, proofType, open, lastMarket, volume24HR, totalVolume});

                

                
            }

            
            this.setState({
                topVolume : volumeArr,
                loading: false
            })

        })
    }

    render() {
        const topVolumeData = this.state.topVolume.map((volume) => (
            <TopVolume 
            key={volume.id}
            volume={volume} />
        
        ))

        return (
            <div className="top-volume-container">
                <h1 className="main-center-header">Top Volume Coins</h1>
                <div className="top-volume-wrapper">
                {topVolumeData}
                </div>
            </div>
        )
    }
}

export default TopVolumeList;
