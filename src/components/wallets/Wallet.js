import React from 'react';
import '../../assets/style/wallet.css';

const Wallet = (props) => {
    let {logo, name, security, easeOfUse, coins, features, source, affiliate, ratings, recommended} = props;
    return (
        <div className="wallet-container">
            <div className="wallet-wrapper">
                <img src={`https://www.cryptocompare.com${logo}`} alt="wallet logo" className="wallet-logo"/>
                <a href={affiliate} target="blank"><h3 className="wallet-name">{name}</h3></a>
                <p className="wallet-details">Security: {security}</p>
                <p className="wallet-details">Ease of Use: {easeOfUse}</p>
                <p className="wallet-details">Coins: {coins}</p>
                <p className="wallet-details">Features: {features}</p>
                <a href={source}><p className="wallet-details">Source Code: {source}</p></a>>
                <p className="wallet-details">Ratings: {ratings}</p>
                <p className="wallet-details">Recommended: {recommended}</p>
            </div>
        </div>
    )
}

export default Wallet;
