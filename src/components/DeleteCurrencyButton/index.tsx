import React from 'react'

import { DeleteCurrencyButtonProps } from '../../types'

import './style.scss'

const DeleteCurrencyButton = ({ deleteOnClick }: DeleteCurrencyButtonProps) => {
  return (
    <button
      onClick={deleteOnClick}
      className="delete-currency grow"
      title="remove currency"
    >
      <i className="fas fa-minus fa-2x"></i>
    </button>
  )
}

export default DeleteCurrencyButton
