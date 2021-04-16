import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { SectionProps } from '../../types'

import './style.scss'

const Section = ({ padding, children }: SectionProps) => {
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
