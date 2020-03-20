import React from 'react';
import '../../assets/style/viewcrypto.css';
import {NavLink} from 'react-router-dom';

const ViewCrypto = (props) => {

    let {cryptos, id} = props;
    console.log(props)
    
    
    const filteredCryptos = cryptos.filter((crypto) => {
       return crypto.id === id;
     })
     let cryptoObj = {}
     for (const crypto of filteredCryptos) {
         let {id, img, name, symbol, algorithm, proofType, rating, techAdoption, performance, hashPerSecond, blockReward, price, marketCap, lastMarket, changeDay, percentageChange, volume24H, open, high, low, totalVolume, supply} = crypto

         cryptoObj.id = id;
         cryptoObj.img = img;
         cryptoObj.name = name;
         cryptoObj.symbol = symbol;
         cryptoObj.algorithm = algorithm;
         cryptoObj.proofType = proofType;
         cryptoObj.rating = rating;
         cryptoObj.techAdoption = techAdoption;
         cryptoObj.performance = performance;
         cryptoObj.hashPerSecond = hashPerSecond;
         cryptoObj.blockReward = blockReward;
         cryptoObj.price = price;
         cryptoObj.marketCap = marketCap;
         cryptoObj.lastMarket = lastMarket;
         cryptoObj.changeDay = changeDay;
         cryptoObj.percentageChange = percentageChange;
         cryptoObj.volume24H = volume24H;
         cryptoObj.open = open;
         cryptoObj.high = high;
         cryptoObj.low = low;
         cryptoObj.totalVolume = totalVolume;
         cryptoObj.supply = supply;
        
     }
     console.log(cryptoObj)

    return (
        <div className="view-crypto__background">
        <div className="view-crypto__container">
            <div className="navigation-exit__container">
            <NavLink to="/marketprices" className="back-link">
                <span className="back-to__coins">
                Back to All Coins
                </span>
                <i className="far fa-window-close fa-3x close-window"></i>
                </NavLink>
                </div>
            <div className="view-crypto__content">
            <div className="crypto-content__header">
            <h1 className="view-crypto__header">Coin Info</h1>
            <img src={`https://www.cryptocompare.com${cryptoObj.img}`} className="view-crypto__img"
            alt="crypto pic"/>
            <div className="header-symbol__container">
            <h4 className="view-crypto__name">{cryptoObj.name}</h4>
            <h4 className="view-crypto__symbol">{cryptoObj.symbol}</h4>
            </div>
            </div>

            <div className="crypto-content__body">
            <div className="crypto-card-body__info">
            <p className="crypto-content__data"><span className="bold">Algorithm:</span> {cryptoObj.algorithm}</p>
            <p className="crypto-content__data"><span className="bold">Proof Type:</span> {cryptoObj.proofType}</p>
            <p className="crypto-content__data"><span className="bold">Block Reward:</span> {cryptoObj.blockReward}</p>
            <p className="crypto-content__data"><span className="bold">Hash Rate p/s:</span> {cryptoObj.hashPerSecond}</p>
            <p className="crypto-content__data"><span className="bold">Rating:</span> {cryptoObj.rating}</p>
            <p className="crypto-content__data"><span className="bold">Tech Adoption:</span> {cryptoObj.techAdoption}</p>
            <p className="crypto-content__data"><span className="bold">Market Performance:</span> {cryptoObj.performance}</p>
            <p className="crypto-content__data"><span className="bold">Supply:</span> {cryptoObj.supply}</p>
            </div>

            <div className="crypto-card-body__price">
            <p className="crypto-content__data"><span className="bold">Price:</span> {cryptoObj.price}</p>
            <p className="crypto-content__data"><span className="bold">Market Cap:</span> {cryptoObj.marketCap}</p>
            <p className="crypto-content__data"><span className="bold">Last Market Cap:</span> {cryptoObj.lastMarket}</p>
            <p className="crypto-content__data"><span className="bold">Change Day:</span> {cryptoObj.changeDay}</p>
            <p className="crypto-content__data"><span className="bold">Percentage Change:</span> {cryptoObj.percentageChange}</p>
            <p className="crypto-content__data"><span className="bold">Volume 24H:</span> {cryptoObj.volume24H}</p>
            <p className="crypto-content__data"><span className="bold">Open:</span> {cryptoObj.open}</p>
            <p className="crypto-content__data"><span className="bold">High:</span> {cryptoObj.high}</p>
            <p className="crypto-content__data"><span className="bold">Low:</span> {cryptoObj.low}</p>
            <p className="crypto-content__data"><span className="bold">Total Volume:</span> {cryptoObj.totalVolume}</p>
      
            </div>

            
            </div>



            </div>
            

            

        </div>
        </div>
    )
}

export default ViewCrypto;
