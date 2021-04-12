import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { SavedCurrencyTableProps } from '../../types'
import SavedCurrencyTableHeader from '../../components/SavedCurrencyTableHeader'
import { deleteCurrency } from '../../redux/actions/crypto'
import Image from '../Image/index'
import DeleteCurrencyButton from '../../components/DeleteCurrencyButton'
import { ThemeContext } from '../../contexts'

import './style.scss'

const SavedCurrencyTable = ({ savedCurrency }: SavedCurrencyTableProps) => {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)

  return (
    <table
      className="saved-currency-table"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <thead>
        <SavedCurrencyTableHeader />
      </thead>
      <tbody
        className="saved-currency-table__wrapper"
        style={{ backgroundColor: theme.backgroundColor }}
      >
        {savedCurrency?.map((currency: any) => (
          <tr className="saved-currency-table__row" key={currency.id}>
            <td>
              <Image image={currency.image} name={currency.symbol} small />
            </td>
            <td className="saved-currency-table-row__name">
              <p style={{ color: theme.text }}>{currency.symbol}</p>
            </td>
            <td>
              <p style={{ color: theme.text }}>{currency.price}</p>
            </td>
            <td>
              <p style={{ color: theme.text }}>{currency.amount}</p>
            </td>
            <td>
              <p style={{ color: theme.text }}>${currency.invested}</p>
            </td>
            <td>
              <DeleteCurrencyButton
                deleteOnClick={() => dispatch(deleteCurrency(currency))}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SavedCurrencyTable
