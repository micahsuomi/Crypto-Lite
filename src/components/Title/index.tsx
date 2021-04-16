import React, { useContext } from 'react'
import classNames from 'classnames'

import { TitleProps } from '../../types'
import { ThemeContext } from '../../contexts'

import styles from './style.module.scss'

const Title = ({
  title,
  big = false,
  medium = false,
  small = false,
  alignCenter = false,
}: TitleProps) => {
  const { theme } = useContext(ThemeContext)

  const titleStyles = classNames({
    [styles.big_title]: big,
    [styles.medium_title]: medium,
    [styles.small_title]: small,
    [styles.align_center]: alignCenter,
  })

  return (
    <React.Fragment>
      {title && (
        <h2 className={titleStyles} style={{ color: theme.text }}>
          {title}
        </h2>
      )}
    </React.Fragment>
  )
}

export default Title
