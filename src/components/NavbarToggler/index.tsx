import React, { useContext } from 'react'

import { NavbarTogglerProps } from '../../types'
import { ThemeContext } from '../../contexts'

import './style.scss'

const NavbarToggler = ({
  toggle,
  isClicked,
  lineClassOneActive,
  lineClassOne,
  lineClassTwoActive,
  lineClassTwo,
  lineClassThreeActive,
  lineClassThree,
}: NavbarTogglerProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="toggle-wrapper">
      <div className="toggle-bar" onClick={toggle}>
        <span
          className={isClicked ? lineClassOneActive : lineClassOne}
          style={{ backgroundColor: theme.homeBanner }}
        ></span>
        <span
          className={isClicked ? lineClassTwoActive : lineClassTwo}
          style={{ backgroundColor: theme.homeBanner }}
        ></span>
        <span
          className={isClicked ? lineClassThreeActive : lineClassThree}
          style={{ backgroundColor: theme.homeBanner }}
        ></span>
      </div>
    </div>
  )
}

export default NavbarToggler
