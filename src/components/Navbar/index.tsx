import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../imgs/logo.svg'
import NavbarToggler from '../NavbarToggler'
import CryptoCart from '../Cart'
import ThemedButton from '../ThemedButton'

import './style.scss'

const NavBar = () => {
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
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="crypto logo" className="navbar__logo"/>
      </NavLink>
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
      <ul className={isClicked ? navListOpen : navList}>
        <ul>
          <li>
            <NavLink to="/" 
              onClick={toggle} 
              className="navbar__link"
              activeStyle={{color: 'var(--yellow)'}}>
            Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/marketprices" className="navbar__link">
            Market Prices
            </NavLink>
          </li>

          <li>
            <NavLink to="/topvolume" 
              className="navbar__link" 
              onClick={toggle}
              activeStyle={{color: 'var(--yellow)'}}>
            Top Volume
            </NavLink>
          </li>

          <li>
            <NavLink to="/exchanges" 
              className="navbar__link" 
              onClick={toggle}
              activeStyle={{color: 'var(--yellow)'}}>
            Exchanges
            </NavLink>
          </li>

          <li>
            <NavLink to="/wallets" 
              className="navbar__link" 
              onClick={toggle}
              activeStyle={{color: 'var(--yellow)'}}>
            Wallets
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" 
              className="navbar__link" 
              onClick={toggle}
              activeStyle={{color: 'var(--yellow)'}}>
            News
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <CryptoCart />
          </li>
          <li>
            <NavLink
              to="/currencyconverter"
              className="navbar__link"
              title="currency converter"
              activeStyle={{color: 'var(--yellow)'}}>
              <i className="fas fa-coins"></i>
              <span className="hide-desktop show-tablet-mobile"> Currency Converter</span>
            </NavLink>
          </li>
          <li>
            <ThemedButton />
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default NavBar
