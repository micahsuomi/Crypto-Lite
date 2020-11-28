import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import { ThemeContext } from '../../contexts'
import { AddCryptoButtonProps } from '../../types'
import { FaRegStar, FaStar } from 'react-icons/fa'

import './style.scss'

const AddCryptoButton = ({ addCrypto, id }: AddCryptoButtonProps) => {
  const cryptosBasket = useSelector((state: AppState) => state.cryptos.inCart)
  const { theme } = useContext(ThemeContext)
  const styledEnabled = {
    backgroundColor: theme.buttonColor,
  }
  return (
    <div>
      {cryptosBasket.find((c) => c.id === id) ? (
        <button className="add-crypto__btn add-crypto__btn-disabled" disabled>
          <FaStar />
        </button>
      ) : (
        <button
          className="add-crypto__btn grow"
          style={styledEnabled}
          onClick={addCrypto}
        >
          <FaRegStar />
        </button>
      )}
    </div>
  )
}

export default AddCryptoButton
