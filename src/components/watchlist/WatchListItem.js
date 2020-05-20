import React from 'react';
import '../../assets/style/watchlistitem.css';

const WatchListItem = (props) => {
    let {img, name, symbol, price, percentageChange, supply, marketCap} = props.watchlist;
    return (
        <div className="watchlist-values-list watchlist-values">
            <div className="crypto-value crypto-value__rank">
            <img src={`https://www.cryptocompare.com${img}`} className="watchlist-crypto__img" alt="crypto"/></div>
            <div className="crypto-value">{symbol}</div>
            <div className="crypto-value crypto-value__name"><span className="bold">{name}</span></div>
            <div className="crypto-value"><span className="blue-text">${price}</span></div>
            <div className="crypto-value percentage-change" style={percentageChange > 0 ? {color:'green'} : {color:'red'}}>{percentageChange}%</div>
            <div className="crypto-value"><span className="hide-deskt show-mobile">Market Cap </span>{marketCap}</div>
            <div className="crypto-value hide-mobile"><span className="hide-deskt show-mobile">Percentage Change </span>{supply}</div>
            <button onClick={props.deleteCurrency} className="remove-btn">Remove</button>
    </div>
    )
}

export default WatchListItem;
