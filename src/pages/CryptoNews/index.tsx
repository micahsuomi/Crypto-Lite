import React, { useState, useContext } from 'react'

import NewsItem from '../../components/NewsItem'
import useCryptoNews from '../../hooks/useCryptoNews'
import { ThemeContext } from '../../contexts'
import Pagination from '../../components/Pagination'

import './style.scss'

const CryptoNews = () => {
  const [err, cryptoNews] = useCryptoNews()
  const { theme } = useContext(ThemeContext)
  const [isClicked, setIsClicked] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(10)

  //get current news
  const indexLastNews = currentPage * newsPerPage
  const indexFirstNews = indexLastNews - newsPerPage
  const currentNews = cryptoNews?.slice(indexFirstNews, indexLastNews)

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  const loadMore = () => {
    setIsClicked(!isClicked)
  }

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

  if(err) {
    return (
      <h1>Page Not Found</h1>
    )
  }
  return (
    <div
      className="news-container"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <div className="news-list" id="latestNews">
        <h2 className="news-list__header">Latest News</h2>
        <div className="news-list__wrapper">{newsList}</div>
        <Pagination
          itemsPerPage={newsPerPage}
          totalItems={cryptoNews?.length}
          currentPage={currentPage}
          paginate={paginate}
        />
        <div className="btn-view__all__container">
          <button className="view-all" onClick={loadMore}>
            {isClicked ? 'Show Less -' : 'Show All + '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CryptoNews
