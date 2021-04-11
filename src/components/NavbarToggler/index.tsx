import React from 'react'

import { NavbarTogglerProps } from '../../types'

import './style.scss'

const NavbarToggler = ({
  toggle,
  scrolled,
  isSwitched,
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
        <span
          className={isClicked ? lineClassOneActive : lineClassOne}
          style={{ backgroundColor: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)' }}
        ></span>
        <span
          className={isClicked ? lineClassTwoActive : lineClassTwo}
          style={{ backgroundColor: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)' }}
        ></span>
        <span
          className={isClicked ? lineClassThreeActive : lineClassThree}
          style={{ backgroundColor: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)' }}
        ></span>
      </div>
    </div>
  )
}

export default NavbarToggler
