import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state={
            home: "Home",
            marketPrices: "Market Prices",
            top5MarketCap: "Top Market Cap",
            topVolume: "Top volume",
            news: "Latest News",
            feeds: "News Feeds",
            isToggleShowing: true,
            isExitShowing: false,
            addClass: true,
            hideClass: true
        }

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    toggle() {
        this.setState({addClass: !this.state.addClass, hideClass: !this.state.hideClass, isToggleShowing: false, isExitShowing: true})
        
    }

    close() {
        this.setState({addClass: !this.state.addClass, isToggleShowing: true, isExitShowing: false})

    }
    

    render() {

        let navLinksClass =["navbar-links open"];
        if(this.state.addClass) {
            navLinksClass.push("open");
        }
        return(
            <nav className="navbar">
                {this.state.isToggleShowing ? <div className="hamburger-bar hide-desktop show-tablet" id="open-button" onClick={this.toggle}> 
                <i className="fas fa-bars fa-4x"></i>
                </div> : null }
                {this.state.isExitShowing ? <div className="exit" id="exit-button" onClick={this.close}><i className="fas fa-times fa-4x"></i></div> : null }


                <ul className={navLinksClass.join('')}>
                    <li className="navbar-link"><a href="#home">{this.state.home}</a></li>
                    <li className="navbar-link"><a href="#marketPrices">{this.state.marketPrices}</a></li>
                    <li className="navbar-link"><a href="#home">{this.state.topVolume}</a></li>
                    <li className="navbar-link"><a href="#top5MarketCap">{this.state.top5MarketCap}</a></li>
                    <li className="navbar-link"><a href="#latestNews">{this.state.news}</a></li>
                    <li className="navbar-link"><a href="#home">{this.state.feeds}</a></li>

                </ul>

            </nav>
        )
    }
}

export default Navbar;