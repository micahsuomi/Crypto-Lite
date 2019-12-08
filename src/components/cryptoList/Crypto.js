import React from 'react';
import './Crypto.css';

const Crypto = (props) => {
    

 return(
    
    <div className="crypto-values">
        <div className="crypto-values-list">
            <div className="crypto-value crypto-value__rank">{props.rank}</div>
            <div className="crypto-value">{props.symbol}</div>
            <div className="crypto-value crypto-value__name"><span className="bold">{props.name}</span></div>
            <div className="crypto-value"><span className="blue-text">${props.price}</span></div>
            <div className="crypto-value">{props.percentageChange}%</div>
            <div className="crypto-value">{props.supply}MIL <span className="bold">{props.symbol}</span></div>
        </div>
    </div>
    )
}


export default Crypto;