import React, { useState, Fragment } from 'react'

import useCryptoWallets from '../../hooks/useCryptoWallets'
import Header from '../../components/Header'
import Section from '../../components/Section'
import TitleContainer from '../../components/TitleContainer'
import Title from '../../components/Title'
import WalletTable from '../../components/WalletTable'
import Pagination from '../../components/Pagination'
import { pageBanners } from '../../utils/page-banners'
import './style.scss'

export default function CryptoWallets() {
  const [search, setSearch] = useState('')
  const [err, cryptoWallets] = useCryptoWallets(search)
  const [currentPage, setCurrentPage] = useState(1)
  const [walletsPerPage] = useState(30)
  //get current wallets
  const indexLastWallet = currentPage * walletsPerPage
  const indexFirstWallet = indexLastWallet - walletsPerPage
  const currentWallets = cryptoWallets?.slice(indexFirstWallet, indexLastWallet)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }
  const placeholderText = 'search wallet by name'

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
          <TitleContainer>
            {pageBanners.map((p) => (
              <Title title={p.wallets} alignCenter />
            ))}
          </TitleContainer>
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
        </Section>
      </Fragment>
    </>
  )
}
