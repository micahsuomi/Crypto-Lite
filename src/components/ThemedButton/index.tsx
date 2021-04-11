import React, { useContext } from 'react'
import { BsCircleHalf } from 'react-icons/bs'

import { ThemedButtonProps } from '../../types'
import { ThemeContext } from '../../contexts'

import './style.scss'

const ThemedButton = ({
  scrolled
}: ThemedButtonProps) => {
  const { switchTheme, isSwitched } = useContext(ThemeContext)
  return (
    <div>
      {isSwitched ? (
        <>
          <BsCircleHalf
            onClick={switchTheme}
            style={{color: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)'}}
            className="grow-icon theme-switch animate-rotate-clockwise"
            title="day mode"
          />
        </>
      ) : (
        <>
          <BsCircleHalf
            onClick={switchTheme}
            style={{color: scrolled || isSwitched ? 'white' : 'var(--color-secondary-dark)'}}
            className="grow-icon theme-switch animate-rotate-anticlockwise"
            title="night mode"
          />
        </>
      )}
    </div>
  )
}

export default ThemedButton
