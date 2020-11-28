import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  IoIosArrowDropleftCircle
} from 'react-icons/io'

import { ArrowPrevProps } from '../../types'

const ArrowPrev = ({slider}: ArrowPrevProps) => {
  return (
    <NavLink to={slider.prev}>
      <IoIosArrowDropleftCircle style={arrowStyles} />
    </NavLink>
  )
}
export default ArrowPrev

const arrowStyles = {
  height: '2rem',
  width: '2rem',
  color: 'var(--primary)',
  margin: '7rem',
}
