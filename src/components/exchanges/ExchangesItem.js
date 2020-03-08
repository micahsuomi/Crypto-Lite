import React from 'react';
import '../../assets/style/exchangesitem.css';

const ExchangesItem = (props) => {
    let {name, pairs,  active, topTier} = props
    let singlePair = pairs.map((pair, match) => <li className="pair-paragraph">{pair}<li>Pairs:{match}</li></li>)
    return (
        <div className="exchanges-item-container">
            <div className="exchanges-item-wrapper">
                <h3 className="exchange-header">{name}</h3>
                <details><summary className="exchange-details">Currencies</summary>
                <ul className="exchange-list">
                    {singlePair}
                </ul>
                    
                </details>
                <p className="exchange-details">Active: <span style ={active.includes('Yes') ? {color: 'green'} : {color: 'red'}}>{active}</span></p>
                <p className="exchange-details">Top Tier: <span style= {topTier.includes('Yes') ? {color: 'green'} : {color: 'red'}}>{topTier}</span></p>
            </div>
      
        </div>
    )
}

export default ExchangesItem;
