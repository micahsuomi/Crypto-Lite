import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { SavedCurrencyTableProps } from '../../types'
import SavedCurrencyTableHeader from '../../components/SavedCurrencyTableHeader'
import { deleteCurrency } from '../../redux/actions/crypto'
import DeleteCurrencyButton from '../../components/DeleteCurrencyButton'
import { ThemeContext } from '../../contexts'

import './style.scss'

const SavedCurrencyTable = ({ savedCurrency }: SavedCurrencyTableProps) => {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
 
  return (
    <table className="saved-currency-table" style={{ backgroundColor: theme.backgroundColor }}>
      <thead><SavedCurrencyTableHeader /></thead>
      <tbody className="saved-currency-table__wrapper">
        {savedCurrency?.map((currency: any) => (
          <tr className="saved-currency-table__row" key={currency.id}>
            <td className="saved-currency-table-row__name"><p>{currency.symbol}</p></td>
            <td><p>{currency.price}</p></td>
            <td><p>{currency.amount}</p></td>
            <td><p>${currency.invested}</p></td>
            <td><DeleteCurrencyButton deleteOnClick={() => dispatch(deleteCurrency(currency))} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SavedCurrencyTable
