import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { SectionProps } from '../../types'

import classNames from 'classnames'

import styles from './style.module.scss'

const Section = ({ padding, children, className }: SectionProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={classNames(styles.section, className, {
        [styles.padding_small]: padding === 'sm',
        [styles.padding_medium]: padding === 'md',
        [styles.padding_large]: padding === 'lg',
      })}
      style={{ backgroundColor: theme.backgroundColor }}
    >
      {children}
    </div>
  )
}

export default Section
