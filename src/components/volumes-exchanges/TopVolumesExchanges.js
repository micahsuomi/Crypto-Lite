import React from 'react'
import VolumeByPairList from './VolumeByPairList';
import './TopVolumesExchanges.css';
import TopExchangesVolume from './TopExchangesVolume';

const TopVolumesExchanges = () => {
    return (
        <div className="top-volumes-exchanges-container">
            <div className="top-volumes-exchanges-wrapper">
                    <VolumeByPairList />
                    <TopExchangesVolume />
                </div> 
            
        </div>
    )
}

export default TopVolumesExchanges;
