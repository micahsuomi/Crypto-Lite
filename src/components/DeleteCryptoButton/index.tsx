import React from 'react'
import { FaTrash } from 'react-icons/fa'

import { DeleteCryptoButtonProps } from '../../types'

import './style.scss'

const DeleteCryptoButton = ({ handleDelete }: DeleteCryptoButtonProps) => {
  return (
    <div>
      <button onClick={handleDelete} className="delete-crypto">
        <FaTrash className="delete-crypto__icon" />
      </button>
    </div>
  )
}

export default DeleteCryptoButton
