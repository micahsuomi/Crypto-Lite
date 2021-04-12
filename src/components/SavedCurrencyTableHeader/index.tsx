import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'

import './style.scss'

const SavedCurrencyTableHeaer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <tr className="saved-currency-table-header">
      <td></td>
      <td style={{ color: theme.text }}>Name</td>
      <td style={{ color: theme.text }}>Price</td>
      <td style={{ color: theme.text }}>Amount</td>
      <td style={{ color: theme.text }}>Total</td>
    </tr>
  )
}

export default SavedCurrencyTableHeaer
