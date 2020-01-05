import React from 'react';
import './TopExchangesItem.css';

const TopExchangesItem = (props) => {
    return (
        <div className="top-exchanges-item__container">
            <ul className="top-exchanges-item__wrapper">
                {props.key}
                <li className="top-exchanges-item__item">{props.exchange}</li>
                <li className="top-exchanges-item__item">{props.fromSymbol}</li>
                <li className="top-exchanges-item__item">{props.toSymbol}</li>
                <li className="top-exchanges-item__item">{props.volume24H}</li>
                <li className="top-exchanges-item__item">{props.volume24HTo}</li>

            </ul>
            
        </div>
    )
}

export default TopExchangesItem;