import React from 'react';
import '../../assets/style/wallet.css';

const Wallet = (props) => {
    let {logo, name, security, easeOfUse, coins, features, source, affiliate, ratings, recommended} = props;

    let easeOfUseStyles = [
        {color: 'darkgreen'},
        {color: 'orange'},
        {color: 'darkred'}
    ]

    let index = 0;

 
    if (easeOfUse.includes('Easy')) {
        easeOfUseStyles = easeOfUseStyles[index]
    } else if(easeOfUse.includes('Average')) {
        index = index + 1
        easeOfUseStyles = easeOfUseStyles[index]
    } else if(easeOfUse.includes('Difficult')) {
        index = index + 2
        easeOfUseStyles = easeOfUseStyles[index]

    }
    return (
        <div className="wallet-container">
            <div className="wallet-wrapper">
                <div className="wallet-head">
                <img src={`https://www.cryptocompare.com${logo}`} alt="wallet logo" className="wallet-logo"/>
                <a href={affiliate} target="blank"><h3 className="wallet-name">{name}</h3></a>
                </div>
                <div className="wallet-details-list">
                <p className="wallet-details">Security: {security}</p>
                <p className="wallet-details">Ease of Use: <span  style={easeOfUseStyles}>{easeOfUse}</span></p>
                <p className="wallet-details">Coins: {coins}</p>
                <p className="wallet-details">Features: {features}</p>
                <a href={source}><p className="wallet-details">Source Code: {source}</p></a>>
                <p className="wallet-details">Average Rating: {ratings}</p>
                <p className="wallet-details">Recommended: {recommended}</p>
            </div>
            </div>
        </div>
    )
}

export default Wallet;
