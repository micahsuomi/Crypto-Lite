/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback, Fragment } from 'react'

import useCryptoExchanges from '../../hooks/useCryptoExchanges'
import Header from '../../components/Header'
import ExchangesTable from '../../components/ExchangesTable'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'

import './style.scss'

export default function Exchanges() {

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [err, exchanges, isLoading, changeValue] = useCryptoExchanges(search, sort)
  
  const [isSorting, setIsSorting] = useState(false)
  const [isNameReversing, setIsNameReversing] = useState(false)
  const [isVolumeReversing, setIsVolumeReversing] = useState(false)
  const [
    isGradePointsReversing,
    setIsGradePointsReversing,
  ] = useState(false)
  const [isAverageRateReversing, setIsAverageRateReversing] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [exchangesPerPage] = useState(30)

  //get current exchanges
  const indexLastExchange = currentPage * exchangesPerPage
  const indexFirstExchange = indexLastExchange - exchangesPerPage
  const currentExchanges = exchanges?.slice(indexFirstExchange, indexLastExchange)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  console.log(exchanges)

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }
  const placeholderText = 'search exchange by name'

  const sortExchange = (e: any) => {
    setSort(e.target.value)
    setIsSorting(true)
  }

  useEffect(() => {
    changeArrowValue(changeValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeValue])

  //will update the UI of the arrows taking the changeValue from the custom hook
  const changeArrowValue = useCallback(
    (changeValue: any) => {
      switch (changeValue) {
      case 'name':
        setIsNameReversing(!isNameReversing)
        break
      case 'volume':
        setIsVolumeReversing(!isVolumeReversing)
        break
      case 'gradepoints':
        setIsGradePointsReversing(!isGradePointsReversing)
        break
      case 'averagerate':
        setIsAverageRateReversing(!isAverageRateReversing)
        break
      default:
      }
    },
    [
      isNameReversing,
      isVolumeReversing,
      isGradePointsReversing,
      isAverageRateReversing,
    ]
  )

  if(err) {
    return (
      <h1>Page Not Found</h1>
    )
  }
  return (
    <>
      <Fragment>
        <Header
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          placeholderText={placeholderText}
        />
        { isLoading ? 
          <>
            <ExchangesTable
              exchanges={search === '' && !isSorting? currentExchanges : exchanges}
              sortExchange={sortExchange} 
              isNameReversing={isNameReversing} 
              isVolumeReversing={isVolumeReversing} 
              isGradePointsReversing={isGradePointsReversing} 
              isAverageRateReversing={isAverageRateReversing}
            /> 
            {search === '' && !isSorting ? (
              <Pagination
                itemsPerPage={exchangesPerPage}
                totalItems={exchanges?.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            ) : null}
          </> 
          : <Loader />
        }
      </Fragment>
    </>
  )
}
