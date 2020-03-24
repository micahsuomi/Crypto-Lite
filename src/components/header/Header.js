import React from 'react';
import '../../assets/style/header.css';
import BtcPrice from './BtcPrice';
// import Form from '../../Form';
import headerImg from '../../assets/imgs/cryptos.svg'

const Header = () => {
    return(
        <div className="header-container">
            <img src={headerImg} alt="prices pic" className="crypto-header-img"/>
        <div className="Header" id="home">
            <BtcPrice />
            
            <h1 className="dashboard-title">CryptoLite</h1>
            <h2 className="dashboard-subtitle">Cryptocurrencies data and news from the CryptoCompare APIs</h2>
            <button className="btn-explore"><a href="#home-main">Explore Data</a></button>
        </div>
        </div>
    )
}

export default Header;