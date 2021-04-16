import React from 'react'

import { TitleContainerProps } from '../../types'

import './style.scss'

const TitleContainer = ({ children }: TitleContainerProps) => {
  return <div className="title-container">{children}</div>
}

export default TitleContainer
