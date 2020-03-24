import React from 'react';
import '../../assets/style/watchlistitem.css';

const WatchListItem = (props) => {
    let {id, img, name, symbol, price, percentageChange, supply, marketCap} = props.watchlist;
    return (
        <div className="watchlist-values-list watchlist-values">
            <div className="crypto-value crypto-value__rank">
            <img src={`https://www.cryptocompare.com${img}`} className="crypto-img" alt="crypto"/></div>
            <div className="crypto-value">{symbol}</div>
            <div className="crypto-value crypto-value__name"><span className="bold">{name}</span></div>
            <div className="crypto-value"><span className="blue-text">${price}</span></div>
            <div className="crypto-value percentage-change" style={percentageChange > 0 ? {color:'green'} : {color:'red'}}>{percentageChange}%</div>
            <div className="crypto-value">{marketCap}</div>
            <div className="crypto-value hide-mobile">{supply}</div>
            <i class="far fa-times-circle fa-2x delete-currency"onClick={props.deleteCurrency}></i>
    </div>
    )
}

export default WatchListItem;
