import React from 'react'

import { ImageProps } from '../../types'

import './style.scss'

const Image = ({ image, name }: ImageProps) => {
  return (
    <div className="image-container">
      <img src={`https://www.cryptocompare.com${image}`} alt={name} />
    </div>
  )
}

export default Image
