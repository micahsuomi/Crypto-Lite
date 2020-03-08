import React from 'react';
import '../../assets/style/crypto.css';

const Crypto = (props) => {
const {img, symbol, name, price, percentageChange, marketCap, supply} = props;  

 return(
    
    <div className="crypto-values">
        <div className="crypto-values-list">
            <div className="crypto-value crypto-value__rank"><img src={`https://www.cryptocompare.com${img}`} className="crypto-img" alt="crypto"/></div>
            <div className="crypto-value">{symbol}</div>
            <div className="crypto-value crypto-value__name"><span className="bold">{name}</span></div>
            <div className="crypto-value"><span className="blue-text">${price}</span></div>
            <div className="crypto-value percentage-change" style={percentageChange > 0 ? {color:'green'} : {color:'red'}}>{percentageChange}%</div>
            <div className="crypto-value">{marketCap}</div>
            <div className="crypto-value">{supply}</div>
        </div>
    </div>
    )
}


export default Crypto;