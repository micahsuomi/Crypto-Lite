import React from 'react';
import './Header.css';
import BtcPrice from './BtcPrice';
import Form from '../../Form';

const Header = () => {
    return(
        <div className="header-container>">
        <div className="Header" id="home">
            <BtcPrice />
            <Form />
            <h1 className="dashboard-title">Crypto Dashboard</h1>
            <h2 className="dashboard-subtitle">Cryptocurrencies historical data from CoinMarketCap and CryptoCompare APIs</h2>
            <button className="btn-explore"><a href="#marketPrices">Explore Data</a></button>
        </div>
        </div>
    )
}

export default Header;