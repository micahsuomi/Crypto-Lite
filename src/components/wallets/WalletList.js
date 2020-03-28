import React, { Component } from 'react';
import Wallet from './Wallet';
import Loader from '../commons/Loader';
import '../../assets/style/walletlist.css';
import '../../assets/style/searchform.css';


const API_KEY = '5a3c910d4d4fed7d3d6e711f3845a09d9916452c3ca4f60532b0bc5e703ba41c'
const URL = 'https://min-api.cryptocompare.com/data/wallets/general?api_key='

class WalletList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wallets: [],
            filteredWallets: [],
            isLoading: false,
            text: ''
        }
        
    }
    componentDidMount() {
        fetch(`${URL}${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            let walletsArr = [];
            for(const key in data.Data) {
               let wallet = data.Data[key];
               let {Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures, SourceCodeUrl, AffiliateURL, Recommended} = wallet;               
               let avgRating = wallet.Rating.Avg
               walletsArr.push({Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures, avgRating, SourceCodeUrl, AffiliateURL, Recommended})
            }
            this.setState({wallets: walletsArr, filteredWallets: walletsArr, isLoading: true})
        })
    }

    
    handleSubmit = (event) => {
        event.preventDefault();

    }
    handleChange = (event) => {
        let walletsArr = []
        let {value} = event.target;
        this.setState({filteredWallets: value})
     
            for(const wallet in this.state.wallets) {
                let{Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures, avgRating, SourceCodeUrl, AffiliateURL, Recommended} = this.state.wallets[wallet];                
               
                if(Name.toLowerCase().includes(value) || Name.includes(value)) {
                    walletsArr.push({Id, Url, LogoUrl, Name, Security, EaseOfUse, Coins, WalletFeatures,
                    avgRating, SourceCodeUrl, AffiliateURL, Recommended})
                }
                this.setState({filteredWallets: walletsArr})
                this.setState({text: ''});
                if(value.length > 0) {
                    this.setState({result: `There are ${walletsArr.length} wallets with this search result`})

                } else {
                    this.setState({result: ''});
                }
            
            
        }
        
        
    }

    
    render() {

        let walletList = this.state.filteredWallets.map((wallet) => (
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
                        ratings={wallet.avgRating}
                        recommended={wallet.Recommended ? 'Yes' : 'No'}/>
        ))

        let {text} = this.state.text;

        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form-container">
            <p className="form-text">There are {this.state.wallets.length} total wallets available</p>
            <div className="search-container">
            <input
            type="text"
            name="walletName" 
            value={text}
            onChange={this.handleChange}
            placeholder="search wallet by name"         
            />
                    <button className="Btn-Search">Search</button>
                </div>
                <p className="form-text">{this.state.result}</p>
            </form>
            <div>
            { this.state.isLoading ?
            <div className="wallets-container">
                <h1 className="main-center-header">Wallets Info</h1>
                <div className="wallets-wrapper">
                {walletList}
            </div>
            </div>
            : <Loader />
            }
            </div>
            </div>
        )
    }
}

export default WalletList
