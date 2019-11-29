import React from 'react';
import './CryptoMarketCap.css';

const CryptoMarketCap = (props) => {
    
 return(
    <div className="crypto-card">
        <div className="crypto-header-container">
    <h4 className="crypto-card-symbol-header">{props.name}</h4>
    </div>
    <div className="crypto-card-body">
    <p className="crypto-card-value">Market Cap: {props.marketCap}</p>
    <p className="crypto-card-value">Price: ${props.price}</p>
    <p className="crypto-card-value">Supply: {props.supply}MIL</p>
    <button className="btn-buy"><a href="https://www.coinbase.com/" target="blank">Buy on Coinbase</a></button>
    </div>
    </div>
    )
}


export default CryptoMarketCap;