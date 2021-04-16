/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback, Fragment } from 'react'

import useCryptoExchanges from '../../hooks/useCryptoExchanges'
import Header from '../../components/Header'
import Section from '../../components/Section'
import TitleContainer from '../../components/TitleContainer'
import Title from '../../components/Title'
import ExchangesTable from '../../components/ExchangesTable'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'
import { pageBanners } from '../../utils/page-banners'

export default function Exchanges() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [isSorting, setIsSorting] = useState(false)
  const [flag, setFlag] = useState(false)
  const [err, exchanges, isLoading, changeValue] = useCryptoExchanges(
    search,
    sort,
    flag
  )

  const [isNameReversing, setIsNameReversing] = useState(false)
  const [isVolumeReversing, setIsVolumeReversing] = useState(false)
  const [isCountryReversing, setIsCountryReversing] = useState(false)
  const [isGradeReversing, setIsGradeReversing] = useState(false)
  const [isGradePointsReversing, setIsGradePointsReversing] = useState(false)
  const [isAverageRateReversing, setIsAverageRateReversing] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [exchangesPerPage] = useState(30)

  //get current exchanges
  const indexLastExchange = currentPage * exchangesPerPage
  const indexFirstExchange = indexLastExchange - exchangesPerPage
  const currentExchanges = exchanges?.slice(
    indexFirstExchange,
    indexLastExchange
  )

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

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
        setFlag(!flag)
        break
      case 'volume':
        setIsVolumeReversing(!isVolumeReversing)
        break
      case 'country':
        setIsCountryReversing(!isCountryReversing)
        break
      case 'grade':
        setIsGradeReversing(!isGradeReversing)
        break
      case 'gradepoints':
        setIsGradePointsReversing(!isGradePointsReversing)
        break
      case 'averagerating':
        setIsAverageRateReversing(!isAverageRateReversing)
        break
      default:
      }
    },
    [
      flag,
      isNameReversing,
      isVolumeReversing,
      isCountryReversing,
      isGradeReversing,
      isGradePointsReversing,
      isAverageRateReversing,
    ]
  )

  if (err) {
    return <h1>Page Not Found</h1>
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
        <Section padding="lg">
          {isLoading ? (
            <>
              <TitleContainer>
                {pageBanners.map((p) => (
                  <Title title={p.exchanges} alignCenter />
                ))}
              </TitleContainer>
              <ExchangesTable
                exchanges={
                  search === '' && !isSorting ? currentExchanges : exchanges
                }
                sortExchange={sortExchange}
                isNameReversing={isNameReversing}
                isVolumeReversing={isVolumeReversing}
                isCountryReversing={isCountryReversing}
                isGradeReversing={isGradeReversing}
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
          ) : (
            <Loader />
          )}
        </Section>
      </Fragment>
    </>
  )
}
