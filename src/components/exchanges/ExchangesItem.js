import React from 'react';
import '../../assets/style/exchangesitem.css';

const ExchangesItem = (props) => {
    let {name, coins, active, topTier} = props;

    let filteredCoins = coins.map((coin) => (
        <details><summary className="exchange-currency">{coin.name}</summary>
            <ul className="pairs-list exchange-currency"><span className="pair-header bold">Pairs:</span> {coin.pairs.map((pair) => <li className="pair">{pair}</li>)}</ul></details>
        
    ))

  
    return (
        <div className="exchanges-item-container">
            <div className="exchanges-item-wrapper">
                <h3 className="exchange-header">{name}</h3>
                <p className="exchange-details">Number of Currencies: {coins.length}</p>
                <details><summary className="exchange-details">Currencies</summary>
                <ul>
                    {filteredCoins}
                    </ul>

                </details>
                <p className="exchange-details">Active: <span style ={active.includes('Yes') ? {color: 'green'} : {color: 'red'}}> {active}</span></p>
                <p className="exchange-details">Top Tier: <span style= {topTier.includes('Yes') ? {color: 'green'} : {color: 'red'}}> {topTier}</span></p>
            </div>
      
        </div>
    )
}

export default ExchangesItem;
