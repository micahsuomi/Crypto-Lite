/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      <div className="toggle-bar" onClick={toggle} role="button">
        <span
          className={isClicked ? lineClassOneActive : lineClassOne}
          style={{
            backgroundColor:
              scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)',
          }}
        ></span>
        <span
          className={isClicked ? lineClassTwoActive : lineClassTwo}
          style={{
            backgroundColor:
              scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)',
          }}
        ></span>
        <span
          className={isClicked ? lineClassThreeActive : lineClassThree}
          style={{
            backgroundColor:
              scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)',
          }}
        ></span>
      </div>
    </div>
  )
}

export default NavbarToggler
