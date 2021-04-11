import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { HeaderProps } from '../../types'
import Search from '../Search/index'

import './style.scss'

const Header = ({
  handleSubmit,
  handleChange,
  search,
  placeholderText,
}: HeaderProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="header-container"
      style={{
        backgroundColor: theme.headerColor,
        height: `${search === '' ? '9.5rem' : '9.5rem'}`,
        padding: `${search === '' ? '2.15rem 2rem' : '2.15rem 2rem'}`,
      }}
    >
      <div className="header-wrapper">
        <div className="header-search">
          <Search
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            search={search}
            placeholderText={placeholderText}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
