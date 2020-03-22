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
            isClicked: false
        }
  
    
    }
  
    toggle = () => {

        this.setState({
            isClicked: false, 
            addClass: !this.state.addClass, 
            hideClass: !this.state.hideClass, 
            isToggleShowing: false, 
            isExitShowing: true})
        console.log('clicking')
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
    
    render() {
  
        let navLinksClass = ["navbar-links open close"];
        
        if(this.state.addClass === false && this.state.isClicked === false) {
            navLinksClass.push("open");
        }
            else if(this.state.addClass && this.state.isClicked === true) {
                navLinksClass.slice(1)
                console.log(navLinksClass)
            }
        

        
        return(
          
            <nav className="navbar">
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
                      <NavLink to="/currencyconverter" 
                      onClick={this.closeNavigation}>
                          Currency Converter</NavLink>
                      </li>
  
                    <li className="navbar-link">
                      <NavLink to="/news" 
                      onClick={this.closeNavigation}>
                          News</NavLink>
                      </li>
  
                    <li className="navbar-link"><a href="#newsFeed">{this.state.feeds}</a></li>
  
                </ul>
  
            </nav>
  
            
  
        )
    }
  }
  
  export default NavBar;
  