import React from 'react';
import '../../assets/style/crypto.css';
import {NavLink} from 'react-router-dom';

const Crypto = (props) => {
const {id, img, symbol, name, price, percentageChange, marketCap, supply} = props.crypto;  

 return(
    
    <div className="crypto-values">
        <div className="crypto-values-list">
            <div className="crypto-value crypto-value__rank">
            <img src={`https://www.cryptocompare.com${img}`} className="crypto-img" alt="crypto"/></div>
            <NavLink to={`/viewcrypto/${id}`} 
            className="crypto-link">
            <div className="crypto-value">{symbol}</div>
            </NavLink>
            <div className="crypto-value crypto-value__name"><span className="bold">{name}</span></div>
            <div className="crypto-value"><span className="blue-text">{price}</span></div>
            <div className="crypto-value percentage-change" style={percentageChange > 0 ? {color:'green'} : {color:'red'}}>{percentageChange}%</div>
            <div className="crypto-value">{marketCap}</div>
            <div className="crypto-value hide-mobile">{supply}</div>
        </div>
    </div>
    )
}


export default Crypto;