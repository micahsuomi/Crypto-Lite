import React, { useContext } from 'react'

import ArrowPrev from '../../components/ArrowPrev'
import ArrowNext from '../../components/ArrowNext'
import { ThemeContext } from '../../contexts'
import ViewExchange from '../../components/ViewExchange'

import './style.scss'

const Exchange = (props: any) => {
  const { theme } = useContext(ThemeContext)
  const id = props.match.params.id
  const slider = {
    index: '',
    prev: '',
    next: '',
  }

  const filteredExchange = props.exchanges.find((exchange: any, index: any) => {
    slider.index = index
    slider.prev = index === 0 ? '' : props.exchanges[index - 1].Id
    slider.next =
      index === props.exchanges - 1 ? '' : props.exchanges[index + 1].Id

    return exchange.Id === id
  })

  return (
    <div
      className="view-exchange-container"
      style={{ backgroundColor: theme.viewItemColor }}
    >
      <div className="view-exchange-container__prev">
        {slider.prev !== '' && <ArrowPrev slider={slider} />}
      </div>

      <ViewExchange
        key={filteredExchange.Id}
        id={filteredExchange.Id}
        url={filteredExchange.Url}
        image={filteredExchange.LogoUrl}
        name={filteredExchange.Name}
        country={filteredExchange.Country}
        description={filteredExchange.Description}
        centralizationType={filteredExchange.CentralizationType}
        volume={filteredExchange.DISPLAYTOTALVOLUME24H.BTC}
        fees={filteredExchange.Fees}
        rating={filteredExchange.Rating.Avg}
        grade={filteredExchange.Grade}
        gradePoints={filteredExchange.GradePoints}
        gradeSplit={filteredExchange.GradePointsSplit}
        itemType={filteredExchange.ItemType}
        depositMethods={filteredExchange.DepositMethods}
        witdhrawalMethods={filteredExchange.WithdrawalMethods}
      />
      <div className="view-exchange-container__next">
        {slider.next !== '' && <ArrowNext slider={slider} />}
      </div>
    </div>
  )
}

export default Exchange
