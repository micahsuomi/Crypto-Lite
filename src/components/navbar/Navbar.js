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
            hideClass: true,
            isClicked: false,
            isSwitched: false,

        }
  
    
    }
  
    toggle = () => {

        this.setState({
            isClicked: false, 
            addClass: !this.state.addClass, 
            hideClass: !this.state.hideClass, 
            isToggleShowing: false, 
            isExitShowing: true})
    }
  
    close = () => {
        this.setState({
            addClass: !this.state.addClass, 
            isToggleShowing: true, 
            isExitShowing: false})
  
    }

    closeNavigation = () => {
        this.setState({
            isClicked: true, 
            addClass: !this.state.addClass,
            isToggleShowing: true, 
            isExitShowing: false})
    }

    switchMode = () => {
        this.props.switchMode()
        this.setState({isSwitched: !this.state.isSwitched})
    }
    
    render() {
  
        let navLinksClass = ["navbar-links open close"];
        
        if(this.state.addClass === false && this.state.isClicked === false) {
            navLinksClass.push("open");
        }
            else if(this.state.addClass && this.state.isClicked === true) {
                navLinksClass.slice(1)
            }
        

        
        return(
          
            <nav className="navbar" style={this.state.isSwitched ? {backgroundImage: 'var(--color-navbar-night)'} : {backgroundImage: 'var(--color-navbar-day)'}}>
                {this.state.isToggleShowing ? <div className="hamburger-bar hide-desktop show-tablet" id="open-button" onClick={this.toggle}> 
                <i className="fas fa-bars fa-3x"></i>
                </div> : null }
                {this.state.isExitShowing ? <div className="exit" id="exit-button" onClick={this.close}><i className="fas fa-times fa-3x"></i></div> : null }
  
  
                <ul className={navLinksClass.join('')}>
                    <li className="navbar-link">
                        <NavLink to="/" 
                        onClick={this.closeNavigation}>
                            Home</NavLink>
                        </li>
                    <li className="navbar-link">
                      <NavLink to="/marketprices" 
                      onClick={this.closeNavigation}>
                          Market Prices</NavLink>
                      </li>
  
                    <li className="navbar-link">
                      <NavLink to="/topvolume" 
                      onClick={this.closeNavigation}>
                          Top Volume</NavLink>
                      </li>
  
                      <li className="navbar-link">
                      <NavLink to="/exchanges" 
                      onClick={this.closeNavigation}>
                          Exchanges</NavLink>
                      </li>
  
                      <li className="navbar-link">
                      <NavLink to="/wallets" 
                      onClick={this.closeNavigation}>
                          Wallets</NavLink>
                      </li>

                      <li className="navbar-link">
                      <NavLink to="/watchlist" 
                      onClick={this.closeNavigation}>
                          Watchlist</NavLink>
                      </li>
  
                      <li className="navbar-link">
                      <NavLink to="/currencyconverter" 
                      onClick={this.closeNavigation}>
                          Currency Converter</NavLink>
                      </li>
  
                    <li className="navbar-link">
                      <NavLink to="/news" 
                      onClick={this.closeNavigation}>
                          News</NavLink>
                      </li>
                      <ul className="night-mode__switch__container">
                    <li class="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" onClick={this.switchMode}/>
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner"></span>
                            <span className="onoffswitch-switch"></span>
                        </label>
                        
                    </li>
                    <li className="night-mode__label">
                        Night Mode
                    </li>
                    </ul>
                    
               
                    <li className="navbar-link"><a href="#newsFeed">{this.state.feeds}</a></li>
  
                </ul>
  
            </nav>
  
            
  
        )
    }
  }
  
  export default NavBar;
  