import React from 'react';
import TopVolumeList from './TopVolumeList';
import './VolumesTopSymbols.css';
import TopSymbolsList from './TopSymbolsList';

const VolumesTopSymbols = () => {
    return (
        <div className="volumes-top-symbols__container">
            <div className="volumes-top-symbols__wrapper">

                <div><TopVolumeList /></div>
                <div><TopSymbolsList /></div>

            </div>
        </div>
    )
}

export default VolumesTopSymbols;
