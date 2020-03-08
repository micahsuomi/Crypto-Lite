import React from 'react';
import './TopVolume.css';

const TopVolume = ({image, name, type, open, lastMarket, volume, totalVolume}) => {
    return (
        <div className="top-volume-card-container">
            <div className="top-volume-head"><img src={`https://www.cryptocompare.com${image}`} className="top-volume-image" alt="crypto" />
            </div>
            <h4 className="top-volume-name"><span className="bold"></span> {name}</h4>
            <div className="top-volume-card-wrapper">
                <p className="top-volume-details"><span className="bold">Consensus:</span> {type}</p>
                <p className="top-volume-details"><span className="bold">Open:</span> {open}</p>
                <p className="top-volume-details"><span className="bold">Last Market:</span> {lastMarket}</p>
                <p className="top-volume-details"><span className="bold">Volume 24H:</span> {volume}</p>
                <p className="top-volume-details"><span className="bold">Total Volume:</span> {totalVolume}</p>
            </div>
            
        </div>
    )
}

export default TopVolume;
