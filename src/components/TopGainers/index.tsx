import React, { useState } from 'react'

import TopGainerItem from '../TopGainerItem'

import './style.scss'

const TopGainers = (props: any) => {
  const [isTopPerformersShowing, setTopPerformersShowing] = useState(true)
  const [isTopLosersShowing, setTopLosersShowing] = useState(false)

  const filteredTopPerformers = []
  const filteredTopLosers = []

  for (const crypto of props.topPerformersData) {
    let performersObj = { id: '', image: '', name: '', symbol: '', price: '', percentageChange: 0 }
    performersObj.id = crypto.CoinInfo.Id
    performersObj.image = crypto.CoinInfo.ImageUrl
    performersObj.name = crypto.CoinInfo.FullName
    performersObj.symbol = crypto.CoinInfo.Name
    performersObj.price = crypto.DISPLAY.USD.PRICE
    performersObj.percentageChange = Math.round(crypto.RAW.USD.CHANGEPCTDAY)
    filteredTopPerformers.push(performersObj);
    filteredTopLosers.push(performersObj);

  }
  
  const topPerformers = filteredTopPerformers.sort((a, b) => {
    if (a.percentageChange > b.percentageChange) return -1;
    if (a.percentageChange < b.percentageChange) return 1;
    return 0
  });
  const topLosers = filteredTopLosers.sort((a, b) => {
    if (a.percentageChange > b.percentageChange) return 1;
    if (a.percentageChange < b.percentageChange) return -1;
    return 0
  });
  
  let topFivePerformers = topPerformers.slice(0, 5);
  let topFiveLosers = topLosers.slice(0, 5);
 
  const showTopFiveGainers = () => {
    setTopPerformersShowing(true)
    setTopLosersShowing(false)
  }
  const showTopFiveLosers = () => {
    setTopPerformersShowing(false)
    setTopLosersShowing(true)
  }
 
  return (
    <div className="top-performers">
      <div className="top-performers__btn-wrapper">
        <button onClick={showTopFiveGainers} style={isTopPerformersShowing ? styleBtnClicked : styleBtnUnClicked} className="grow">Top 5 Gainers</button>
        <button onClick={showTopFiveLosers} style={!isTopPerformersShowing ? styleBtnClicked : styleBtnUnClicked} className="grow">Top 5 Losers</button>
      </div>
      { isTopPerformersShowing ?  
        <>
          <h3>Top {topFivePerformers.length} Gainers</h3>
          <div className="top-gainer-list-wrapper">{
            topFivePerformers.map((performer: any) => (
              <TopGainerItem key={performer.id} performer={performer} />
            ))} 
          </div> 
        </>
        : 
        <>
          <h3>Top {topFivePerformers.length} Losers</h3>
          <div className="top-gainer-list-wrapper">{
            topFiveLosers.map((performer) => (
              <TopGainerItem key={performer.id} performer={performer} /> 
            ))}</div>
        </>
      } 
    
    </div>
  )
}

export default TopGainers

const styleBtnClicked = {
  backgroundColor: 'var(--primary)'
}
const styleBtnUnClicked = {
  backgroundImage: 'var(--btn-disabled)'
}
