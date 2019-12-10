import React from 'react';
import './TopSymbolItem.css';

const TopSymbolItem = (props) => {
    return (
        <div className="top-symbol-item-container">
            <ul className="top-symbol-item-list">
                {props.key}
                <li className="top-symbol-item"><div className="bold">From Symbol: </div>{props.fromSymbol}</li>
                <li className="top-symbol-item"><div className="bold">To Symbol: </div>{props.toSymbol}</li>
                <li className="top-symbol-item"><div className="bold">Volume: </div>{props.volume}</li>
            </ul>
        </div>
    )
}

export default TopSymbolItem;
