import React from 'react';
import './ExchangesItem.css';

const ExchangesItem = (props) => {
    return (
        <div className="exchanges-item-container">
            <div className="exchanges-item-wrapper">
            {props.key}
                <p>Name: {props.name}</p>
                <p>Alghoritm: {props.algo} </p>
            </div>
        </div>
    )
}

export default ExchangesItem;
