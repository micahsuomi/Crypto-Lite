import React, { useContext } from 'react'
import { BsCircleHalf } from 'react-icons/bs'

import { ThemeContext } from '../../contexts'

import './style.scss'

const ThemedButton = () => {
  const { switchTheme, isSwitched } = useContext(ThemeContext)
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      {isSwitched ? (
        <>
          <BsCircleHalf
            onClick={switchTheme}
            style={{color: theme.iconColor}}
            className="grow-icon theme-switch animate-rotate-clockwise"
            title="day mode"
          />
        </>
      ) : (
        <>
          <BsCircleHalf
            onClick={switchTheme}
            style={{color: theme.iconColor}}
            className="grow-icon theme-switch animate-rotate-anticlockwise"
            title="night mode"
          />
        </>
      )}
    </div>
  )
}

export default ThemedButton
