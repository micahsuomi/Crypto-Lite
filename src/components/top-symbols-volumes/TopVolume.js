import React from 'react';
import '../../assets/style/TopVolume.css';
import {NavLink} from 'react-router-dom';

const TopVolume = (props) => {

    let {id, img, name, proofType, open, lastMarket, volume24HR, totalVolume} = props.volume;
    return (
        <div className="top-volume-card-container">
            <div className="top-volume-head"><img src={`https://www.cryptocompare.com${img}`} className="top-volume-image" alt="crypto" />
            </div>
            <NavLink to={`/viewcrypto/${id}`}>
            <h4 className="top-volume-name"><span className="bold"></span>{name}</h4>
            </NavLink>
            <div className="top-volume-card-wrapper">
                <p className="top-volume-details"><span className="bold">Consensus:</span> {proofType}</p>
                <p className="top-volume-details"><span className="bold">Open:</span> {open}</p>
                <p className="top-volume-details"><span className="bold">Last Market:</span> {lastMarket}</p>
                <p className="top-volume-details"><span className="bold">Volume 24H:</span> {volume24HR}</p>
                <p className="top-volume-details"><span className="bold">Total Volume:</span> {totalVolume}</p>
            </div>
            
        </div>
    )
}

export default TopVolume;
