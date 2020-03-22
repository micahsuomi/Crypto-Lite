import React from 'react';
import '../../assets/style/topgainer.css';

const TopGainer = (props) => {
    let {img, name, symbol, price, percentageChange} = props.performer
    return (
        <div className="top-gainer__container">
            <img src={`https://www.cryptocompare.com${img}`} className="top-gainer__img" alt="crypto"/>
            <h2 className="top-gainer__name">{name}</h2>
            <p className="top-gainer__details">{symbol}</p>
            <p className="top-gainer__details">{price}</p>
            <p className="top-gainer__details" style={percentageChange > 0 ? {color: 'green'} : {color: 'red'}}>{percentageChange}%</p>
        </div>
    )
}

export default TopGainer;
