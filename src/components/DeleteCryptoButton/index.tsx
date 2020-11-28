import React from 'react'

import { DeleteCryptoButtonProps } from '../../types'
import './style.scss'

const DeleteCryptoButton = ({ handleDelete }: DeleteCryptoButtonProps) => {
  return (
    <div>
      <button onClick={handleDelete} className="delete-crypto">
        <i className="far fa-minus-square fa-2x delete-crypto__icon"></i>
      </button>
    </div>
  )
}

export default DeleteCryptoButton
