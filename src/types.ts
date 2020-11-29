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
export const GET_EXCHANGES = 'GET_EXCHANGES'
export const SEARCH_EXCHANGES = 'SEARCH_EXCHANGES'
export const GET_CRYPTOWALLETS = 'GET_CRYPTOWALLETS'
export const SEARCH_CRYPTOWALLET = 'SEARCH_CRYPTOWALLET'
export const GET_CRYPTONEWS = 'GETCRYPTO_NEWS'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
//crypto types here
export type NavbarTogglerProps = {
  toggle: () => void
  isClicked?: boolean
  lineClassOneActive?: string
  lineClassOne?: string
  lineClassTwoActive?: string
  lineClassTwo?: string
  lineClassThreeActive?: string
  lineClassThree?: string
}

export type MainTableProps = {
  cryptos: any
  topPerformersData: any
  sortCrypto: (e: React.FormEvent<HTMLInputElement>) => void
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
  // handleChange: (keyword: string) => void;
  handleChange: React.FormEventHandler<HTMLInputElement>
  placeholderText: string
}

export type TitleProps = {
  cryptos: any
  message?: string
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

export type CryptoCartProps = {
  toggle: () => void
}

export type CryptoDetails = {
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

export type CryptoTableHeaderProps = {
  sortCrypto: (e: React.FormEvent<HTMLInputElement>) => void
  isNameReversing: boolean
  isPriceReversing: boolean
  isPercentageChangeReversing: boolean
  isMarketCapReversing: boolean
  isSupplyReversing: boolean
}

export type CryptoTableCellProps = {
  sortCrypto: (e: React.FormEvent<HTMLInputElement>) => void
  isNameReversing: boolean
  isPriceReversing: boolean
  isPercentageChangeReversing: boolean
  isMarketCapReversing: boolean
  isSupplyReversing: boolean
}

export type Cart = {
  inCart: Crypto[]
}

export type ImageProps = {
  image: string
  name: string
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

export type CryptoNewsItemProps = {
  id: string
  image: string
  articleUrl: string
  title: string
  description: string
  categories: string[]
}

export type ArrowPrevProps = {
  slider: any
}

export type ArrowNextProps = {
  slider: any
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

export type GetCryptoNewsAction = {
  type: typeof GET_CRYPTONEWS
  payload: {
    news: CryptoNews[]
  }
}

export type CryptoActions =
  | GetBtcPriceAction
  | GetCryptosAction
  | AddCryptoAction
  | DeleteCryptoAction
  | SearchCryptoAction
  | GetExchangesAction
  | SearchExchangesAction
  | GetCryptoWalletsAction
  | SearchWalletAction
  | GetCryptoNewsAction


export type CryptoState = {
  btcPrice?: any
  cryptos: Crypto[]
  filteredCryptos: Crypto[]
  inCart: NewCrypto[]
  exchanges: any
  filteredExchanges: any
  cryptoWallets: any
  filteredWallets: CryptoWallets[]
  cryptoNews: CryptoNews[]
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
}
