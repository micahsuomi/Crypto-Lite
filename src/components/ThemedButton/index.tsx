import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { BsCircleHalf } from 'react-icons/bs'

import './style.scss'

const ThemedButton = () => {
  const { switchTheme, isSwitched } = useContext(ThemeContext)

  return (
    <div>
      {isSwitched ? (
        <BsCircleHalf
          onClick={switchTheme}
          style={iconStyle}
          className="grow-icon animate-rotate-clockwise"
          title="day mode"
        />
      ) : (
        <BsCircleHalf
          onClick={switchTheme}
          style={iconStyle}
          className="grow-icon animate-rotate-anticlockwise"
          title="night mode"
        />
      )}
    </div>
  )
}

const iconStyle = {
  color: 'white',
  height: '1.5rem',
  width: '1.5rem',
  cursor: 'pointer',
  marginLeft: '1.5rem',
  marginTop: '.3rem',
}
export default ThemedButton
