import React from 'react';
import '../../assets/style/VolumeByPairItem.css';

const VolumeByPairItem = ({name, supply, symbol, volume}) => {
    return (
        <div className="volume-item-container">
            <ul className="volume-item-list">
                <li className="volume-list__item"><span className="bold bigger-text">{name}</span></li>
                <li className="volume-list__item"><span className="bold"></span>{supply}</li>
                <li className="volume-list__item"><span className="bold"></span>{symbol}</li>
                <li className="volume-list__item"><span className="bold"></span>{volume}</li>

            </ul>
        </div>
    )
}

export default VolumeByPairItem;
