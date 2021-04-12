import React from 'react'
import classNames from 'classnames'

import { ImageProps } from '../../types'

import styles from './style.module.scss'

const Image = ({ image, name, big = false, small = false }: ImageProps) => {
  const imageStyles = classNames({
    [styles.big_image]: big,
    [styles.small_image]: small,
  })
  return (
    <div className={imageStyles}>
      <img src={`https://www.cryptocompare.com${image}`} alt={name} />
    </div>
  )
}

export default Image
