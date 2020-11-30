import React, { useContext } from 'react'

import useTopVolume from '../../hooks/useTopVolume'
import TopVolumeHeader from '../../components/TopVolumeHeader'
import TopVolumeItem from '../../components/TopVolumeItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const TopVolume = () => {
  const [err, topVolume] = useTopVolume()
  const { theme } = useContext(ThemeContext)

  console.log(topVolume)
  
  const topVolumeList = topVolume?.map((volume: any) => (
    <TopVolumeItem  
      exchange={volume.exchange}
      fromSymbol={volume.fromSymbol}
      toSymbol={volume.toSymbol}
      volume24h={volume.volume24h}
      volume24hTo={volume.volume24hTo}
      price={volume.price} />
  ))
  if(err) {
    return (
      <h1>Page Not Found</h1>
    )
  }
  return (
    <div
      className="top-volume"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <h2 className="news-list__header" style={{ color: theme.text}}>Top Volume</h2>
      <table className="top-volume__table" style={{ color: theme.text}}>
        <thead>
          <TopVolumeHeader />
        </thead>
        <tbody className="top-volume__table-body">
          {topVolumeList}
        </tbody>
      </table>
    </div>
  )
}

export default TopVolume
