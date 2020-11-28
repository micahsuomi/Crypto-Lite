/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, Fragment } from 'react'

import useCryptoWallets from '../../hooks/useCryptoWallets'
import Header from '../../components/Header'
import WalletTable from '../../components/WalletTable'
import Pagination from '../../components/Pagination'

import './style.scss'

export default function CryptoWallets() {
  const [search, setSearch] = useState('')
  const [err, cryptoWallets] = useCryptoWallets(search)
  const [currentPage, setCurrentPage] = useState(1)
  const [walletsPerPage] = useState(30)

  //get current books
  const indexLastWallet = currentPage * walletsPerPage
  const indexFirstWallet = indexLastWallet - walletsPerPage
  const currentWallets = cryptoWallets?.slice(indexFirstWallet, indexLastWallet)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }
  const placeholderText = 'search wallet by name'

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

        <WalletTable
          cryptoWallets={search === '' ? currentWallets : cryptoWallets}
        />

        {search === '' && (
          <Pagination
            itemsPerPage={walletsPerPage}
            totalItems={cryptoWallets?.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </Fragment>
    </>
  )
}
