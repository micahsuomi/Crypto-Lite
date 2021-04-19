/* eslint-disable no-unused-vars */
// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

//crypto types
export const GET_BTCPRICE = 'GET_BTCPRICE'
export const GET_CRYPTOS = 'GET_CRYPTOS'
export const ADD_CRYPTO = 'ADD_CRYPTO'
export const DELETE_CRYPTO = 'DELETE_CRYPTO'
export const SEARCH_CRYPTO = 'SEARCH_CRYPTO'
export const GET_DAILYPAIRS = 'GET_DAILYPAIRS'
export const GET_DAILYEXCHANGEVOL = 'GET_DAILYEXCHANGEVOL'
export const GET_TOPFIVESYMBOLS = 'GET_TOPFIVESYMBOLS'
export const GET_EXCHANGES = 'GET_EXCHANGES'
export const SEARCH_EXCHANGES = 'SEARCH_EXCHANGES'
export const GET_CRYPTOWALLETS = 'GET_CRYPTOWALLETS'
export const SEARCH_CRYPTOWALLET = 'SEARCH_CRYPTOWALLET'
export const GET_CRYPTONEWS = 'GETCRYPTO_NEWS'
export const GET_NEWSFEEDS = 'GET_NEWSFEEDS'
export const SAVE_CONVERSION = 'SAVE_CONVERSION'
export const DELETE_CURRENCY = 'DELETE_CURRENCY'

//error types
export const SHOW_ERRORS = 'SHOW_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

// Enum

export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
//crypto types here
export type NavbarTogglerProps = {
  toggle: () => void
  scrolled: boolean
  isSwitched: boolean
  isClicked?: boolean
  lineClassOneActive?: string
  lineClassOne?: string
  lineClassTwoActive?: string
  lineClassTwo?: string
  lineClassThreeActive?: string
  lineClassThree?: string
}

export type ThemedButtonProps = {
  scrolled: boolean
}

export type MainTableProps = {
  cryptos: any
  topPerformersData: any
  sortCrypto: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isNameReversing: boolean
  isPriceReversing: boolean
  isPercentageChangeReversing: boolean
  isMarketCapReversing: boolean
  isSupplyReversing: boolean
}

export type Cryptos = {
  getCryptos: any
  isFetching: Boolean
  cryptos: any
}

export type HeaderProps = {
  handleSubmit: Function
  handleChange: React.FormEventHandler<HTMLInputElement>
  // handleChange: (keyword: string) => void;
  search?: string
  placeholderText: string
}

export type SearchProps = {
  search?: string
  handleSubmit: Function
  handleChange: React.FormEventHandler<HTMLInputElement>
  placeholderText: string
}

export type SectionPadding = 'sm' | 'md' | 'lg'

export type SectionProps = {
  className?: string
  padding?: SectionPadding
  children?: React.ReactNode
}

export type TitleContainerProps = {
  children?: React.ReactNode
}

export type TitleProps = {
  title?: string
  big?: boolean
  medium?: boolean
  small?: boolean
  alignCenter?: boolean
}

export type TopGainerProps = {
  id: string
  image: string
  name: string
  symbol: string
  price: string
  percentageChange: number
}

export type Crypto = {
  id: string
  image: string
  symbol: string
  name: string
  price: string
  percentageChange: number
  marketCap: number
  supply: number
  addCrypto: () => void
  isHomePage?: boolean
}

export type NewCrypto = {
  id: string
  image: string
  symbol: string
  name: string
  price: string
  percentageChange: number
  marketCap: number
  supply: number
}

export type CryptoDetailsProps = {
  id: string
  img: string
  name: string
  symbol: any
  algorithm: any
  proofType: any
  rating: any
  techAdoption: any
  performance: any
  hashPerSecond: any
  blockReward: any
  price: any
  marketCap: any
  lastMarket: any
  changeDay: any
  percentageChange: any
  volume24H: any
  open: any
  high: any
  low: any
  totalVolume: any
  supply: any
  redirectToHome?: boolean
  loadChart?: boolean
}

export type SwitchCryptoChartButtonsProps = {
  switchChart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type WatchListProps = {
  cryptos: any
}

export type DailyPairsReq = {
  pairOne: string
  pairTwo: string
}

export type DailyPairsData = {
  close: number
  high: number
  low: number
  open: number
  time: number
  volumefrom: number
  volumeto: number
  Message: string
}

export type DailyPairs = {
  Aggregated: boolean
  TimeFrom: number
  TimeTo: number
  Data: DailyPairsData[]
  fromSymbol: string
  toSymbol: string
}

export type DailyPairsHeaderProps = {
  dailyPairs: DailyPairs
}

export type DailyPairsTableProps = {
  dailyPairs: any
}

export type DailyPairsItemProps = {
  close: number
  high: number
  low: number
  open: number
  time: number | string
  volumeFrom: number
  volumeTo: number
}

export type DailyPairsChartProps = {
  //fix this later
  dailyPairs?: any
  pairOne?: string
  pairTwo?: string
}

export type DailyPairsChartVolumeProps = {
  //fix this later
  dailyPairs?: any
}

export type DailyExchangeVol = {
  time: number
  volume: number
}

export type DailyEchangeVolFormProps = {
  showDailyExchangeVolGraphOnSubmit: Function
}

export type DailyEchangeVolChartProps = {
  data: any
  title?: string
}

export type TopFiveSymbols = {
  fromSymbol: string
  toSymbol: string
  volume: string
  exchange?: string
}

export type TopFiveSymbolsHeaderProps = {
  topFiveSymbols: any
}

export type TopFiveSymbolsTableProps = {
  topFiveSymbols: any
}

export type TopFiveSymbolsItemProps = {
  fromSymbol: string
  toSymbol: string
  volume: string
}

export type CryptoWallets = {
  Id: string
  Url: string
  LogoUrl: string
  Name: string
  Security: string
  Anonymity: string
  EaseOfUse: string
  Coins: string[]
  WalletFeatures: string[]
  Platforms: string[]
  ValidationType: string
  SourceCodeUrl: string
  AffiliateURL: string
  avgRating: number
}

export type CryptoNews = {
  id: string
  image: string
  articleUrl: string
  title: string
  description: string
  categories: string[]
}

export type NewsFeeds = {
  key: string
  img: string
  lang: string
  name: string
}

export type CryptoTableHeaderProps = {
  sortCrypto: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isNameReversing: boolean
  isPriceReversing: boolean
  isPercentageChangeReversing: boolean
  isMarketCapReversing: boolean
  isSupplyReversing: boolean
}

export type CryptoTableCellProps = {
  sortCrypto: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isNameReversing: boolean
  isPriceReversing: boolean
  isPercentageChangeReversing: boolean
  isMarketCapReversing: boolean
  isSupplyReversing: boolean
}

export type Cart = {
  inCart: Crypto[]
}

export type CryptoCartProps = {
  scrolled: boolean
  isSwitched: boolean
}

export type ImageProps = {
  image: string
  name: string
  big?: boolean
  medium?: boolean
  small?: boolean
}

export type AddCryptoButtonProps = {
  addCrypto: () => void
  id: string
}

export type DeleteCryptoButtonProps = {
  handleDelete: () => void
}

export type PaginationProps = {
  itemsPerPage: any
  totalItems: any
  currentPage: any
  paginate: Function
}

export type ExchangesTableProps = {
  exchanges: any
  sortExchange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isNameReversing: boolean
  isVolumeReversing: boolean
  isCountryReversing: boolean
  isGradeReversing: boolean
  isGradePointsReversing: boolean
  isAverageRateReversing: boolean
}

export type ExchangeTableHeaderProps = {
  sortExchange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isNameReversing: boolean
  isVolumeReversing: boolean
  isCountryReversing: boolean
  isGradeReversing: boolean
  isGradePointsReversing: boolean
  isAverageRateReversing: boolean
}

export type ExchangeTableCellProps = {
  sortExchange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isNameReversing: boolean
  isVolumeReversing: boolean
  isCountryReversing: boolean
  isGradeReversing: boolean
  isGradePointsReversing: boolean
  isAverageRateReversing: boolean
}

export type ExchangeItemProps = {
  id: string
  logo: string
  name: string
  country: string
  grade: string
  gradePoints: number
  volume: string
  rating: number
}

export type WalletTableProps = {
  cryptoWallets: any
}

export type WalletItemProps = {
  id: string
  url: string
  logo: string
  name: string
  security: string
  easeOfUse: string
  platforms: string[]
  ratings: number
}

export type ViewExchangeProps = {
  id: string
  url: string
  image: string
  name: string
  country: string
  description: string
  centralizationType: string
  volume: object
  fees: string
  rating: object
  grade: string
  gradePoints: number
  gradeSplit: any
  itemType: string[]
  depositMethods: string
  witdhrawalMethods: string
}

export type ViewWalletProps = {
  id: string
  url: string
  logo: string
  name: string
  security: string
  anonymity: string
  easeOfUse: string
  platforms: string[]
  coins: string[]
  features: string[]
  source: string
  affiliate: string
  ratings: number
}

export type CurrencyConverterFormCryptoProps = {
  cryptos: any
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  amount: number
  handleChange: React.FormEventHandler<HTMLInputElement>
  selectCurrency: (event: React.FocusEvent<HTMLSelectElement>) => void
  handleSwitch: () => void
  warning: string
  result: number
  resultSymbol: string
  image: string
  isSaveButtonShowing: boolean
  saveCurrencyConversion: () => void
}

export type CurrencyConverterFormUsdProps = {
  cryptos: any
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  amount: number
  handleChange: React.FormEventHandler<HTMLInputElement>
  selectCurrency: (event: React.FocusEvent<HTMLSelectElement>) => void
  handleSwitch: () => void
  warning: string
  result: number
  isSaveButtonShowing: boolean
  saveCurrencyConversion: () => void
}

export type SavedCurrencyTableProps = {
  savedCurrency: SavedConversionItem[]
}

export type DeleteCurrencyButtonProps = {
  deleteOnClick: () => void
}

export type CryptoNewsItemProps = {
  id: string
  image: string
  articleUrl: string
  title: string
  description: string
  categories: string[]
}

export type NewsFeedsItemProps = {
  id: string
  language: string
  image: string
  name: string
}

export type ArrowPrevProps = {
  slider: any
}

export type ArrowNextProps = {
  slider: any
}

export type SavedConversionItem = {
  id: string
  symbol: string
  price: string
  amount: number
  invested: number
}

//action types
export type GetBtcPriceAction = {
  type: typeof GET_BTCPRICE
  payload: {
    btcPrice: any
  }
}

export type GetCryptosAction = {
  type: typeof GET_CRYPTOS
  payload: {
    cryptos: Crypto[]
  }
}

export type AddCryptoAction = {
  type: typeof ADD_CRYPTO
  payload: {
    crypto: NewCrypto
  }
}

export type DeleteCryptoAction = {
  type: typeof DELETE_CRYPTO
  payload: {
    crypto: NewCrypto
  }
}

export type SearchCryptoAction = {
  type: typeof SEARCH_CRYPTO
  payload: {
    crypto: Crypto[]
  }
}

export type GetDailyPairsAction = {
  type: typeof GET_DAILYPAIRS
  payload: {
    dailyPairs: any
  }
}

export type GetDailyExchangeVolAction = {
  type: typeof GET_DAILYEXCHANGEVOL
  payload: {
    dailyExchangeVol: any
  }
}

export type TopFiveSymbolsAction = {
  type: typeof GET_TOPFIVESYMBOLS
  payload: {
    topFiveSymbols: any
  }
}

export type GetExchangesAction = {
  type: typeof GET_EXCHANGES
  payload: {
    exchanges: any
  }
}

export type SearchExchangesAction = {
  type: typeof SEARCH_EXCHANGES
  payload: {
    exchanges: any
  }
}

export type GetCryptoWalletsAction = {
  type: typeof GET_CRYPTOWALLETS
  payload: {
    wallets: CryptoWallets[]
  }
}

export type SearchWalletAction = {
  type: typeof SEARCH_CRYPTOWALLET
  payload: {
    wallet: CryptoWallets[]
  }
}

export type SaveConversionAction = {
  type: typeof SAVE_CONVERSION
  payload: {
    savedConversion: SavedConversionItem
  }
}

export type DeleteCurrencyAction = {
  type: typeof DELETE_CURRENCY
  payload: {
    savedConversion: SavedConversionItem
  }
}

export type GetCryptoNewsAction = {
  type: typeof GET_CRYPTONEWS
  payload: {
    news: CryptoNews[]
  }
}

export type GetNewsFeedsAction = {
  type: typeof GET_NEWSFEEDS
  payload: {
    newsFeeds: NewsFeeds[]
  }
}

export type ShowErrorAction = {
  type: typeof SHOW_ERRORS
  payload: {
    msg: any
    status?: any
  }
}

export type ClearErrorAction = {
  type: typeof CLEAR_ERRORS
}

export type CryptoActions =
  | GetBtcPriceAction
  | GetCryptosAction
  | AddCryptoAction
  | DeleteCryptoAction
  | SearchCryptoAction
  | GetDailyPairsAction
  | GetDailyExchangeVolAction
  | TopFiveSymbolsAction
  | GetExchangesAction
  | SearchExchangesAction
  | GetCryptoWalletsAction
  | SearchWalletAction
  | SaveConversionAction
  | DeleteCurrencyAction
  | GetCryptoNewsAction
  | GetNewsFeedsAction

export type ErrorActions = ShowErrorAction | ClearErrorAction

export type CryptoState = {
  btcPrice?: any
  cryptos: Crypto[]
  filteredCryptos: Crypto[]
  inCart: NewCrypto[]
  dailyPairs: any
  dailyExchangeVol: any
  topFiveSymbols: any
  exchanges: any
  filteredExchanges: any
  cryptoWallets: any
  filteredWallets: CryptoWallets[]
  cryptoNews: CryptoNews[]
  newsFeeds: NewsFeeds[]
  savedCurrency: SavedConversionItem[]
}

export type ErrorState = {
  msg: any
  status?: any
}

export type CountState = {
  count: number
}

//boilerplate types
export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type Product = {
  id: string
  name: string
  price: number
}
export type ProductState = {
  inCart: Product[]
  test: any
}

// Using dynamic keys from an enum

export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  cryptos: CryptoState
  error: ErrorState
}
