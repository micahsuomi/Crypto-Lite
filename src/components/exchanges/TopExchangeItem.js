import React from 'react';
import '../../assets/style/topexchangeitem.css';

const TopExchangeItem = (props) => {
    let {name, coins} = props;
    return (
        <div className="top-exchanges__container">
            <h2 className="top-exchanges__name">{name}</h2>
            <h2 className="top-exchanges__num-coins">{coins} currencies</h2>
        </div>
    )
}

export default TopExchangeItem;
