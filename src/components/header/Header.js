import React from 'react';
import '../../assets/style/header.css';
import BtcPrice from './BtcPrice';
// import Form from '../../Form';

const Header = () => {
    return(
        <div className="header-container>">
        <div className="Header" id="home">
            <BtcPrice />
            {/* <Form /> */}
            <h1 className="dashboard-title">CryptoLite</h1>
            <h2 className="dashboard-subtitle">Cryptocurrencies data and news from the CryptoCompare APIs</h2>
            <button className="btn-explore"><a href="#marketPrices">Explore Data</a></button>
        </div>
        </div>
    )
}

export default Header;