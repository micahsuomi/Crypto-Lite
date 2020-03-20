import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/style/navbar.css';

class NavBar extends Component {
    constructor() {
        super();
        this.state={
            isToggleShowing: true,
            isExitShowing: false,
            addClass: true,
            hideClass: true
        }
  
        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }
  
    toggle = () => {
        this.setState({addClass: !this.state.addClass, hideClass: !this.state.hideClass, isToggleShowing: false, isExitShowing: true})
        
    }
  
    close = () => {
        this.setState({addClass: !this.state.addClass, isToggleShowing: true, isExitShowing: false})
  
    }
    
    render() {
  
        let navLinksClass = ["navbar-links open"];
        if(this.state.addClass) {
            navLinksClass.push("open");
        }
        return(
          
            <nav className="navbar">
                {this.state.isToggleShowing ? <div className="hamburger-bar hide-desktop show-tablet" id="open-button" onClick={this.toggle}> 
                <i className="fas fa-bars fa-3x"></i>
                </div> : null }
                {this.state.isExitShowing ? <div className="exit" id="exit-button" onClick={this.close}><i className="fas fa-times fa-3x"></i></div> : null }
  
  
                <ul className={navLinksClass.join('')}>
                    <li className="navbar-link">
                        <NavLink to="/">Home</NavLink>
                        </li>
                    <li className="navbar-link">
                      <NavLink to="/marketprices">Market Prices</NavLink>
                      </li>
  
                    <li className="navbar-link">
                      <NavLink to="/topvolume">Top Volume</NavLink>
                      </li>
  
                      <li className="navbar-link">
                      <NavLink to="/exchanges">Exchanges</NavLink>
                      </li>
  
                      <li className="navbar-link">
                      <NavLink to="/wallets">Wallets</NavLink>
                      </li>
  
                      <li className="navbar-link">
                      <NavLink to="/currencyconverter">Currency Converter</NavLink>
                      </li>
  
                    <li className="navbar-link">
                      <NavLink to="/news">News</NavLink>
                      </li>
  
                    <li className="navbar-link"><a href="#newsFeed">{this.state.feeds}</a></li>
  
                </ul>
  
            </nav>
  
            
  
        )
    }
  }
  
  export default NavBar;
  