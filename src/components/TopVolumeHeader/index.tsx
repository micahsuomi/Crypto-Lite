import React from 'react'

import './style.scss'

const TopVolumeHeader = () => {
  return (
    <tr className="top-volume-header">
      <td>Exchange</td>
      <td>From Symbol</td>
      <td>To Symbol</td>
      <td>Volume 24H</td>
      <td>Volume 24H To</td>
      <td>Price</td>
    </tr>
  )
}

export default TopVolumeHeader
