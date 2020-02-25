import React from 'react';
import TopVolumeList from './TopVolumeList';
import './VolumesTopSymbols.css';
import TopSymbolsList from './TopSymbolsList';
import TopVolumesExchanges from '../../components/volumes-exchanges/TopVolumesExchanges';

const VolumesTopSymbols = () => {
    return (
        <div className="volumes-top-symbols__container" id="topVolume">
            <div className="volumes-top-symbols__wrapper">

                <div><TopVolumeList /></div>
                <div><TopSymbolsList /></div>
                <TopVolumesExchanges />


            </div>
        </div>
    )
}

export default VolumesTopSymbols;
