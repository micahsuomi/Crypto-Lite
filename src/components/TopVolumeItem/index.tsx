import React from 'react'

import { TopVolumeItemProps } from '../../types'

import './style.scss'

const TopVolumeItem = ({
  exchange,
  fromSymbol,
  toSymbol,
  volume24h,
  volume24hTo,
  price
}: TopVolumeItemProps) => {
  return (
    <tr className="top-volume-row">
      <td>{exchange}</td>
      <td>{fromSymbol}</td>
      <td>{toSymbol}</td>
      <td>{volume24h}</td>
      <td>{volume24hTo}</td>
      <td>{price}</td>
    </tr>
  )
}

export default TopVolumeItem
