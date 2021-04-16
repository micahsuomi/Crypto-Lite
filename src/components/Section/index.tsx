import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { SectionContainerProps } from '../../types'

import './style.scss'

const Section = ({ children }: SectionContainerProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="section-container"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      {children}
    </div>
  )
}

export default Section
