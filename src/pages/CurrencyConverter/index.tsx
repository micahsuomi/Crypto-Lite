import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaBitcoin } from 'react-icons/fa'

import { AppState } from '../../types'
import CurrencyConverterFormCrypto from '../../components/CurrencyConverterFormCrypto'
import CurrencyConverterFormUsd from '../../components/CurrencyConverterFormUsd'
import { saveConversion } from '../../redux/actions/crypto'
import SavedCurrencyTable from '../../components/SavedCurrencyTable'
import Pagination from '../../components/Pagination'
import { ThemeContext } from '../../contexts'

import './style.scss'

const CurrencyConverter = ({ cryptos }: any) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [amount, setAmount] = useState(0)
  const [warning, setWarning] = useState('')
  const [resultSymbol, setResultSymbol] = useState('')
  const [result, setResult] = useState(0)
  const [isSwitched, setIsSwitched] = useState(true)
  const [savedCurrencyConversion, setSavedCurrencyConversion] = useState({
    id: '',
    symbol: '',
    image: '',
    price: '',
    amount: 0,
    invested: 0,
  })
  const [isSaveButtonShowing, setIsSaveButtonShowing] = useState(false)
  const savedCurrency = useSelector(
    (state: AppState) => state.cryptos.savedCurrency
  )
  const { theme } = useContext(ThemeContext)

  const [currentPage, setCurrentPage] = useState(1)
  const [currenciesPerPage] = useState(5)

  //get current crypto list
  const indexLastCurrency = currentPage * currenciesPerPage
  const indexFirstCurrency = indexLastCurrency - currenciesPerPage
  const currentSavedCurrencies = savedCurrency?.slice(
    indexFirstCurrency,
    indexLastCurrency
  )
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  const handleSwitch = () => {
    setIsSwitched(!isSwitched)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (amount < 1 || query === '') {
      setWarning('Please fill both values')
      setResult(0)
    } else {
      for (const crypto of cryptos) {
        let symbol = crypto.CoinInfo.Name
        if (query === symbol) {
          let price = crypto.RAW.USD.PRICE
          let id = crypto.CoinInfo.Id
          const image = crypto.CoinInfo.ImageUrl
          if (isSwitched) {
            let result = amount / price
            amount < 1 ? (result = 0) : setResult(result)
            setResultSymbol(symbol)
            setWarning('')
            setSavedCurrencyConversion({
              ...savedCurrencyConversion,
              id: id,
              symbol: symbol,
              image: image,
              price: price,
              amount: result,
              invested: amount,
            })
            setIsSaveButtonShowing(true)
          } else {
            let result = Math.round(amount * price)
            amount < 1 ? (result = 0) : setResult(result)
            setWarning('')
            setSavedCurrencyConversion({
              ...savedCurrencyConversion,
              id: id,
              symbol: symbol,
              image: image,
              price: price,
              amount: amount,
              invested: result,
            })
            setIsSaveButtonShowing(true)
          }
        }
      }
    }
  }

  const selectCurrency = (e: any) => {
    let { value } = e.target
    setQuery(value)
  }

  const handleChange = (e: any) => {
    let { value } = e.target
    setAmount(value)
  }

  const saveCurrencyConversion = () => {
    dispatch(saveConversion(savedCurrencyConversion))
    setIsSaveButtonShowing(false)
  }

  return (
    <div
      className="currency-converter"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <div className="currency-converter__form-container">
        <h1
          className="currency-converter__header"
          style={{ color: theme.text }}
        >
          Currency Converter
        </h1>

        {isSwitched ? (
          <CurrencyConverterFormCrypto
            cryptos={cryptos}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            selectCurrency={selectCurrency}
            handleSwitch={handleSwitch}
            amount={amount}
            warning={warning}
            result={result}
            resultSymbol={resultSymbol}
            image={savedCurrencyConversion?.image}
            isSaveButtonShowing={isSaveButtonShowing}
            saveCurrencyConversion={saveCurrencyConversion}
          />
        ) : (
          <CurrencyConverterFormUsd
            cryptos={cryptos}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            selectCurrency={selectCurrency}
            handleSwitch={handleSwitch}
            amount={amount}
            warning={warning}
            result={result}
            isSaveButtonShowing={isSaveButtonShowing}
            saveCurrencyConversion={saveCurrencyConversion}
          />
        )}
      </div>
      {savedCurrency.length > 0 ? (
        <div className="currency-converter__saved-container">
          <h3
            className="saved-currency-table__header"
            style={{ color: theme.text }}
          >
            Saved Currency Conversions
          </h3>
          <SavedCurrencyTable savedCurrency={currentSavedCurrencies} />
          {savedCurrency.length > 5 && (
            <Pagination
              itemsPerPage={currenciesPerPage}
              totalItems={savedCurrency?.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          )}
        </div>
      ) : (
        <div className="currency-converter__saved-container--empty">
          <h3
            className="saved-currency-table__header"
            style={{ color: theme.text }}
          >
            No Saved Conversions
          </h3>
          <FaBitcoin className="currency-converter__btc-icon" />
        </div>
      )}
    </div>
  )
}

export default CurrencyConverter
