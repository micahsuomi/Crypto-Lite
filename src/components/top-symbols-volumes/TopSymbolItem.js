import React from 'react';
import '../../assets/style/TopSymbolItem.css';

const TopSymbolItem = ({fromSymbol, volume}) => {
    return (
        <div className="top-symbol-item-container">
            <ul className="top-symbol-item-list">
                <li className="top-symbol-item"><span className="bold">Symbol:</span> {fromSymbol}</li>
                <li className="top-symbol-item"><span className="bold">Volume:</span> {volume}</li>
            </ul>
        </div>
    )
}

export default TopSymbolItem;
