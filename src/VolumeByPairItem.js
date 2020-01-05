import React from 'react';
import './VolumeByPairItem.css';

const VolumeByPairItem = (props) => {
    return (
        <div className="volume-item-container">
            <ul className="volume-item-list">
                {props.key}
                <li className="volume-list__item"><span className="bold bigger-text">{props.name}</span></li>
                <li className="volume-list__item"><span className="bold"></span>{props.supply}</li>
                <li className="volume-list__item"><span className="bold"></span>{props.symbol}</li>
                <li className="volume-list__item"><span className="bold"></span>{props.volume}</li>

            </ul>
        </div>
    )
}

export default VolumeByPairItem;
