import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { CryptoNewsItemProps } from '../../types'

import './style.scss'

const NewsItem = ({
  image,
  articleUrl,
  title,
  description,
  categories,
}: CryptoNewsItemProps) => {
  const { theme, isSwitched } = useContext(ThemeContext)
  return (
    <div
      className="news-item"
      style={{ backgroundColor: theme.backgroundColor, color: theme.text }}
    >
      <div className="news-item__left">
        <img src={`${image}`} alt="news pic" className="news-img" />
      </div>

      <div className="news-item__right">
        <a href={`${articleUrl}`} target="blank">
          <h3 className="news-header" style={{ color: theme.text }}>
            {title}
          </h3>
        </a>
        <p className="news-item-paragraph news-item__hide-mobile">
          {description}
        </p>
        <p className="categories" style={{ color: theme.text }}>
          {categories}
        </p>
        <div className="read-more__wrapper">
          <a
            href={`${articleUrl}`}
            className={
              isSwitched ? 'read-more-link dark grow' : 'read-more-link light grow'
            }
            target="blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
