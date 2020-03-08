import React, { Component } from 'react';
import Wallet from './Wallet';
import Loader from '../commons/Loader';
import '../../assets/style/walletlist.css';

const API_KEY = '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
const URL = 'https://min-api.cryptocompare.com/data/wallets/general?api_key='

class WalletList extends Component {
    constructor(props) {
        super()
        this.state = {
            wallets: [],
            isLoading: false
        }
        
    }
    componentDidMount() {
        fetch(`${URL}${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.Data)
            let walletsArr = [];
            for(const key in data.Data) {
               let wallet = data.Data[key];
               let ratingsArr = []
               let {Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures, SourceCodeUrl, AffiliateURL, Rating, Recommended} = wallet;
               for(const rating in wallet.Rating) {
                   let ratings = wallet.Rating[rating];
                   ratingsArr.push(ratings)
               }
               console.log(Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures, SourceCodeUrl, AffiliateURL, Rating, Recommended)
               walletsArr.push({Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures, SourceCodeUrl, AffiliateURL, ratingsArr, Recommended})
            }
            this.setState({wallets: walletsArr, isLoading: true})
            console.log(this.state.wallets)
        })
    }
 
    render() {
        let walletList = this.state.wallets.map((wallet) => (
                <Wallet key={wallet.Id} 
                        url={wallet.Url}
                        logo={wallet.LogoUrl}
                        name={wallet.Name}
                        security={wallet.Security}
                        easeOfUse={wallet.EaseOfUse}
                        coins={`${wallet.Coins.map((coin) => coin)}`}
                        features={`${wallet.WalletFeatures.map((coin) => coin)}`}
                        source={wallet.SourceCodeUrl}
                        affiliate={wallet.AffiliateURL}
                        ratings={`${wallet.ratingsArr.map((rating) => rating)}`}
                        recommended={wallet.Recommended ? 'Yes' : 'No'}/>
        ))
        return (
            <div>
            { this.state.isLoading ?
            <div className="wallets-container">
                <h1 className="main-center-header">Wallets Info</h1>
                <h3>There are {this.state.wallets.length} wallets available</h3>
                <div className="wallets-wrapper">
                {walletList}
            </div>
            </div>
            : <Loader />
            }
            </div>
        )
    }
}

export default WalletList
