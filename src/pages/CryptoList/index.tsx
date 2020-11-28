/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback, Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCrypto } from '../../redux/actions'
import useCryptos from '../../hooks/useCryptos'
import MainTable from '../../components/MainTable'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'

import './style.scss'

const CryptoList = () => {
  const dispatch = useDispatch()
 
  const [search, setSearch] = useState('')
  const [sortCountry, setSortCountry] = useState('')
  const [err, cryptos, isLoading, changeValue] = useCryptos(search, sortCountry)
  const [currentPage, setCurrentPage] = useState(1)
  const [cryptosPerPage] = useState(30)

  //get current crypto list
  const indexLastCrypto = currentPage * cryptosPerPage
  const indexFirstCrypto = indexLastCrypto - cryptosPerPage
  const currentCryptos = cryptos?.slice(indexFirstCrypto, indexLastCrypto)

  const [isSorting, setIsSorting] = useState(false)
  const [isNameReversing, setIsNameReversing] = useState(false)
  const [isPriceReversing, setIsPriceReversing] = useState(false)
  const [
    isPercentageChangeReversing,
    setIsPercentageChangeReversing,
  ] = useState(false)
  const [isMarketCapReversing, setIsMarketCapReversing] = useState(false)
  const [isSupplyReversing, setIsSupplyReversing] = useState(false)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)
  
  const placeholderText = 'search crypto by name or symbol'

  useEffect(() => {
    dispatch(fetchCrypto())
  }, [dispatch])

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const sortCrypto = (e: any) => {
    setSortCountry(e.target.value)
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
      case 'price':
        setIsPriceReversing(!isPriceReversing)
        break
      case 'percentagechange':
        setIsPercentageChangeReversing(!isPercentageChangeReversing)
        break
      case 'marketcap':
        setIsMarketCapReversing(!isMarketCapReversing)
        break
      case 'supply':
        setIsSupplyReversing(!isSupplyReversing)
        break
      default:
      }
    },
    [
      isNameReversing,
      isPriceReversing,
      isPercentageChangeReversing,
      isMarketCapReversing,
      isSupplyReversing,
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
        {!isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="cryptos">
              <MainTable
                cryptos={!isSorting && search=== '' ? currentCryptos : cryptos}
                topPerformersData={cryptos}
                sortCrypto={sortCrypto}
                isNameReversing={isNameReversing}
                isPriceReversing={isPriceReversing}
                isPercentageChangeReversing={isPercentageChangeReversing}
                isMarketCapReversing={isMarketCapReversing}
                isSupplyReversing={isSupplyReversing}
              />
            </div>
            {!isSorting && search ===''? (
              <Pagination
                itemsPerPage={cryptosPerPage}
                totalItems={cryptos?.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            ): null}
          </div>
        )}
      </Fragment>
    </>
  )
}

export default CryptoList
