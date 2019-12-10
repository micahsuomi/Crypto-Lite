import React from 'react';
import './TopVolume.css';

const TopVolume = (props) => {
    return (
        <div className="top-volume-card-container">
            <div className="top-volume-head"><img src={`https://www.cryptocompare.com${props.image}`} className="top-volume-image" alt="crypto" />
            </div>
            <h4 className="top-volume-name"><span className="bold"></span> {props.name}</h4>
            <div className="top-volume-card-wrapper">
                {props.key}
                <p className="top-volume-details"><span className="bold">Consensus:</span> {props.type}</p>
                <p className="top-volume-details"><span className="bold">Open:</span> {props.open}</p>
                <p className="top-volume-details"><span className="bold">Last Market:</span> {props.lastMarket}</p>
                <p className="top-volume-details"><span className="bold">Volume 24H:</span> {props.volume}</p>
                <p className="top-volume-details"><span className="bold">Total Volume:</span> {props.totalVolume}</p>
            </div>
            
        </div>
    )
}

export default TopVolume;
