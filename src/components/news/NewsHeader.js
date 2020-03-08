import React from 'react';
import '../../assets/style/newsheader.css';

const NewsHeader = () => {
    return (
        <div className="news-header__container">
            <div className="news-header__left">

            </div>
            <div className="news-header__right">
                <h2 className="news-header__title">CryptoCurrency News</h2>
                <h3 className="news-header__subtitle">This news are displayed using the CryptoCompare news API</h3>
                <p className="news-header__paragraph">News include topics like technical analysis on the cryptocurrencies markets, investor sentiments, blockchain news, innovations on the industry, adoption, news on exchanges like Binance, Coinbase and Bitfinex.</p>
                <button className="btn-learn-more">Learn More</button>
            </div>
            
        </div>
    )
}

export default NewsHeader;
