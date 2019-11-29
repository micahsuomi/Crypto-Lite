import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state={
            home: "Home",
            marketPrices: "Market Prices",
            top5MarketCap: "Top Crypto by Market Cap",
            topPerformers: "Top Performers"
        }
    }

    render() {
        return(
            <nav className="navbar">

                <ul className="navbar-links">
                    <li className="navbar-link"><a href="#home">{this.state.home}</a></li>
                    <li className="navbar-link"><a href="#marketPrices">{this.state.marketPrices}</a></li>
                    <li className="navbar-link"><a href="#top5MarketCap">{this.state.top5MarketCap}</a></li>
                    <li className="navbar-link"><a href="#home">{this.state.topPerformers}</a></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar;