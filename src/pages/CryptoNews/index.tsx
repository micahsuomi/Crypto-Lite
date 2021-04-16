import React, { useState, useContext } from 'react'

import NewsItem from '../../components/NewsItem'
import useCryptoNews from '../../hooks/useCryptoNews'
import { ThemeContext } from '../../contexts'
import Pagination from '../../components/Pagination'
import Section from '../../components/Section'
import TitleContainer from '../../components/TitleContainer'
import Title from '../../components/Title'
import { pageBanners } from '../../utils/page-banners'

import './style.scss'

const CryptoNews = () => {
  const [err, cryptoNews] = useCryptoNews()
  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(10)

  //get current news
  const indexLastNews = currentPage * newsPerPage
  const indexFirstNews = indexLastNews - newsPerPage
  const currentNews = cryptoNews?.slice(indexFirstNews, indexLastNews)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)
  const { theme } = useContext(ThemeContext)

  const newsList = currentNews?.map((newsItem: any) => (
    <NewsItem
      key={newsItem.id}
      id={newsItem.id}
      description={newsItem.body}
      categories={newsItem.categories}
      title={newsItem.title}
      image={newsItem.imageurl}
      articleUrl={newsItem.url}
    />
  ))

  if (err) {
    return <h1 style={{ color: theme.text }}>Page Not Found</h1>
  }
  return (
    <Section>
      <TitleContainer>
        {pageBanners.map((p) => (
          <Title title={p.news} alignCenter />
        ))}
      </TitleContainer>
      <div className="news-list__wrapper">{newsList}</div>
      <Pagination
        itemsPerPage={newsPerPage}
        totalItems={cryptoNews?.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Section>
  )
}

export default CryptoNews
