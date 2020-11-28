import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

import { ArrowNextProps } from '../../types'

const ArrowNext = ({slider}: ArrowNextProps) => {
  return (
    <NavLink to={slider.next}>
      <IoIosArrowDroprightCircle style={arrowStyles} />
    </NavLink>
  )
}
export default ArrowNext

const arrowStyles = {
  height: '2rem',
  width: '2rem',
  color: 'var(--primary)',
  margin: '7rem',
}
