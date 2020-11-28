import React from 'react'

import { NavbarTogglerProps } from '../../types'

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
  return (
    <div className="toggle-wrapper">
      <div className="toggle-bar" onClick={toggle}>
        <span className={isClicked ? lineClassOneActive : lineClassOne}></span>
        <span className={isClicked ? lineClassTwoActive : lineClassTwo}></span>
        <span
          className={isClicked ? lineClassThreeActive : lineClassThree}
        ></span>
      </div>
    </div>
  )
}

export default NavbarToggler
