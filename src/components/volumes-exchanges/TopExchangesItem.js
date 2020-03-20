import React from 'react';
import '../../assets/style/TopExchangesItem.css';

const TopExchangesItem = ({exchange, fromSymbol, toSymbol, volume24H, volume24HTo}) => {
    return (
        <div className="top-exchanges-item__container">
            <ul className="top-exchanges-item__wrapper">
                <li className="top-exchanges-item__item">{exchange}</li>
                <li className="top-exchanges-item__item">{fromSymbol}</li>
                <li className="top-exchanges-item__item">{toSymbol}</li>
                <li className="top-exchanges-item__item">{volume24H}</li>
                <li className="top-exchanges-item__item">{volume24HTo}</li>

            </ul>
            
        </div>
    )
}

export default TopExchangesItem;