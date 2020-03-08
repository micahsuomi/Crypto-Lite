import React from 'react';
import '../../assets/style/loader.css';


const Loader = () => {
    return (
        <div className="loading-container">
            <h1 className="loading-header">Loading</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
