import React, { useContext } from 'react'

import ViewCrypto from '../../components/ViewCrypto'
// import ArrowPrev from '../../components/ArrowPrev'
// import ArrowNext from '../../components/ArrowNext'
import { ThemeContext } from '../../contexts'

import './style.scss'

const Crypto = (props: any) => {
  const { theme } = useContext(ThemeContext)
  const id = props.match.params.id

  const slider = {
    index: '',
    prev: '',
    next: '',
  }

  const filteredCrypto = props.cryptos.find((crypto: any, index: any) => {
    slider.index = index
    slider.prev = index === 0 ? '' : props.cryptos[index - 1].CoinInfo.Id
    slider.next =
      index === props.cryptos.length - 1
        ? ''
        : props.cryptos[index + 1].CoinInfo.Id

    return crypto.CoinInfo.Id === id
  })

  return (
    <div
      className="view-crypto-container"
      style={{ backgroundImage: theme.viewItemColor }}
    >
      {/* <div className="prev">
        {slider.prev !== '' && <ArrowPrev slider={slider} />}
      </div> */}

      <ViewCrypto
        id={filteredCrypto.CoinInfo.Id}
        img={filteredCrypto.CoinInfo.ImageUrl}
        name={filteredCrypto.CoinInfo.FullName}
        symbol={filteredCrypto.CoinInfo.Name}
        algorithm={filteredCrypto.CoinInfo.Algorithm}
        proofType={filteredCrypto.CoinInfo.ProofType}
        rating={filteredCrypto.CoinInfo.Rating.Weiss.Rating}
        techAdoption={
          filteredCrypto.CoinInfo.Rating.Weiss.TechnologyAdoptionRating
        }
        performance={
          filteredCrypto.CoinInfo.Rating.Weiss.MarketPerformanceRating
        }
        hashPerSecond={filteredCrypto.CoinInfo.NetHashesPerSecond}
        blockReward={filteredCrypto.CoinInfo.BlockReward}
        price={filteredCrypto.DISPLAY.USD.PRICE}
        marketCap={filteredCrypto.DISPLAY.USD.MKTCAP}
        lastMarket={filteredCrypto.DISPLAY.USD.LASTMARKET}
        changeDay={filteredCrypto.DISPLAY.USD.CHANGEDAY}
        percentageChange={filteredCrypto.DISPLAY.USD.CHANGEPCTDAY}
        volume24H={filteredCrypto.DISPLAY.USD.VOLUME24HOUR}
        open={filteredCrypto.DISPLAY.USD.OPEN24HOUR}
        high={filteredCrypto.DISPLAY.USD.HIGH24HOUR}
        low={filteredCrypto.DISPLAY.USD.LOW24HOUR}
        totalVolume={filteredCrypto.DISPLAY.USD.TOTALVOLUME24H}
        supply={filteredCrypto.DISPLAY.USD.SUPPLY}
        loadChart
      />
      {/* <div className="next">
        {slider.next !== '' && <ArrowNext slider={slider} />}
      </div> */}
    </div>
  )
}

export default Crypto
