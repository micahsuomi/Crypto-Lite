import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'
import { SearchProps } from '../../types'

import './style.scss'

const Search = ({ search, handleSubmit, handleChange, placeholderText }: SearchProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <form
        className="search-form"
        onSubmit={(e) => handleSubmit(e.preventDefault())}
      >
        <input
          type="text"
          placeholder={placeholderText}
          value={search}
          onChange={handleChange}
          style={{ 
            backgroundColor: theme.backgroundColor, 
            color: theme.text}}
        />
      </form>
    </div>
  )
}

export default Search
