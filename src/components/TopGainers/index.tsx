import React, { useState, useContext, useEffect } from 'react'

import TopGainerItem from '../TopGainerItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const TopGainers = (props: any) => {
  // console.log(props.topPerformersData)
  const [isTopPerformersShowing, setTopPerformersShowing] = useState(true)
  const [isTopLosersShowing, setTopLosersShowing] = useState(false)
  const filteredTopPerformers = [] as any[]
  const filteredTopLosers = [] as any[]
  const { theme } = useContext(ThemeContext)
  // console.log('top performers data', props)

  // const loadPerformersObj = async () => {
  //   try {
  for (const crypto of props.topPerformersData) {
    let performersObj = {
      id: '',
      image: '',
      name: '',
      symbol: '',
      price: '',
      percentageChange: 0,
    }
    performersObj.id = crypto.CoinInfo.Id
    performersObj.image = crypto.CoinInfo.ImageUrl
    performersObj.name = crypto.CoinInfo.FullName
    performersObj.symbol = crypto.CoinInfo.Name
    performersObj.price = crypto.DISPLA !== undefined && crypto.DISPLAY.USD.PRICE
    if(crypto.RAW !== undefined) {
      performersObj.percentageChange = Math.ceil(
        (crypto.RAW.USD.CHANGEPCTDAY * 100) / 100
      ) 
    }
         
    filteredTopPerformers.push(performersObj)
    filteredTopLosers.push(performersObj)
  }
  //   } catch (err) {console.log(err)}
  // }
  useEffect(() => {
    // loadPerformersObj()
  })
  

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
        <button onClick={showTopFiveGainers} style={isTopPerformersShowing && !isTopLosersShowing ? styleBtnClicked : styleBtnUnClicked} className="grow">Top 5 Gainers</button>
        <button onClick={showTopFiveLosers} style={!isTopPerformersShowing && isTopLosersShowing  ? styleBtnClicked : styleBtnUnClicked} className="grow">Top 5 Losers</button>
      </div>
      { isTopPerformersShowing ?  
        <>
          <h3 style={{color: theme.text}}>Top {topFivePerformers.length} Gainers</h3>
          <div className="top-performers__wrapper">{
            topFivePerformers.map((performer: any) => (
              <TopGainerItem 
                key={performer.id} 
                id={performer.id}
                image={performer.image}
                name={performer.name}
                symbol={performer.symbol}
                price={performer.price}
                percentageChange={performer.percentageChange} />
            ))} 
          </div> 
        </>
        : 
        <>
          <h3 style={{color: theme.text}}>Top {topFivePerformers.length} Losers</h3>
          <div className="top-performers__wrapper">{
            topFiveLosers.map((performer) => (
              <TopGainerItem  
                key={performer.id} 
                id={performer.id}
                image={performer.image}
                name={performer.name}
                symbol={performer.symbol}
                price={performer.price}
                percentageChange={performer.percentageChange} /> 
            ))}</div>
        </>
      }   
    </div>
  )
}

export default TopGainers

const styleBtnClicked = {
  backgroundColor: 'var(--primary)',
}
const styleBtnUnClicked = {
  backgroundImage: 'var(--btn-disabled)',
}
