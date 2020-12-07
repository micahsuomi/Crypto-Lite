import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome } from "react-icons/im";
import { RiExchangeLine } from "react-icons/ri";
import { BsNewspaper, BsFillBarChartFill } from "react-icons/bs";
import { FaWallet, FaChartLine } from "react-icons/fa";

import logo from '../../imgs/logo.svg'
import NavbarToggler from '../NavbarToggler'
import CryptoCart from '../Cart'
import ThemedButton from '../ThemedButton'
import { ThemeContext } from '../../contexts'

import './style.scss'

const NavBar = () => {
  const { theme } = useContext(ThemeContext)
  const [isClicked, setState] = useState(false)

  const navList = 'nav-list'
  const navListOpen = 'nav-list open'

  const lineClassOne = 'line top'
  const lineClassOneActive = 'line top active'

  const lineClassTwo = 'line middle'
  const lineClassTwoActive = 'line middle active'

  const lineClassThree = 'line bottom'
  const lineClassThreeActive = 'line bottom active'

  const toggle = () => {
    setState(!isClicked)
  }
  return (
    <nav className="navbar" style={{backgroundColor: theme.backgroundColor}}>
      <NavLink to="/">
        <img src={logo} alt="crypto logo" className="navbar__logo"/>
      </NavLink>
      <ul className={isClicked ? navListOpen : navList}>
        <li>
          <NavLink to="/" 
            onClick={toggle} 
            className="navbar__link"
            activeStyle={{color: 'var(--yellow)'}}>
            <ImHome />
            <span>
             Home
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/marketprices" 
            onClick={toggle}
            className="navbar__link"
            activeStyle={{color: 'var(--yellow)'}}>
            <FaChartLine />
            <span>
            Market Prices
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/historicaldata" 
            className="navbar__link" 
            onClick={toggle}
            activeStyle={{color: 'var(--yellow)'}}>
            <BsFillBarChartFill />
            <span>
            Historical Data
            </span>
          </NavLink> 
        </li>

        <li>
          <NavLink to="/exchanges" 
            className="navbar__link" 
            onClick={toggle}
            activeStyle={{color: 'var(--yellow)'}}>
            <RiExchangeLine 
              className="navbar__icon"/>
            <span>
            Exchanges
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/wallets" 
            className="navbar__link" 
            onClick={toggle}
            activeStyle={{color: 'var(--yellow)'}}>
            <FaWallet />
            <span>
            Wallets
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" 
            className="navbar__link" 
            onClick={toggle}
            activeStyle={{color: 'var(--yellow)'}}>
            <BsNewspaper />
            <span>
            News
            </span>
          </NavLink>
        </li>
      </ul>
      <ul>
        <CryptoCart />
        <NavLink
          to="/currencyconverter"
          title="currency converter"
          activeStyle={{color: 'var(--yellow)'}}>
          <i className="fas fa-funnel-dollar" 
            style={{color: theme.iconColor,
              fontSize: '1.5rem'}}></i>
        </NavLink>
        <ThemedButton />
        <NavbarToggler
          toggle={toggle}
          isClicked={isClicked}
          lineClassOneActive={lineClassOneActive}
          lineClassOne={lineClassOne}
          lineClassTwoActive={lineClassTwoActive}
          lineClassTwo={lineClassTwo}
          lineClassThreeActive={lineClassThreeActive}
          lineClassThree={lineClassThree}
        />
      </ul>
    </nav>
  )
}

export default NavBar
