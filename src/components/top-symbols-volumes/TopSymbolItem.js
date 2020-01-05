import React from 'react';
import './TopSymbolItem.css';

const TopSymbolItem = (props) => {
    return (
        <div className="top-symbol-item-container">
            <ul className="top-symbol-item-list">
                {props.key}
                <li className="top-symbol-item"><span className="bold">Symbol:</span> {props.fromSymbol}</li>
                <li className="top-symbol-item"><span className="bold">Volume:</span> {props.volume}</li>
            </ul>
        </div>
    )
}

export default TopSymbolItem;
