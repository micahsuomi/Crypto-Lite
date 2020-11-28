import React, { useContext } from 'react'

import { WalletTableProps } from '../../types'
import WalletItem from '../../components/WalletItem'
import { ThemeContext } from '../../contexts'

import './style.scss'

const WalletTable = ({ cryptoWallets }: WalletTableProps) => {
  const { theme } = useContext(ThemeContext)
  let walletList = cryptoWallets?.map((wallet: any) => (
    <WalletItem
      key={wallet.Id}
      id={wallet.Id}
      url={wallet.Url}
      logo={wallet.LogoUrl}
      name={wallet.Name}
      security={wallet.Security}
      easeOfUse={wallet.EaseOfUse}
      platforms={wallet.Platforms}
      ratings={wallet.avgRating}
    />
  ))
  return (
    <div className="wallets" style={{ backgroundColor: theme.backgroundColor }}>
      <h2 className="wallets__header" style={{ color: theme.text }}>
        Wallets Info
      </h2>
      <div className="wallets__wrapper">{walletList}</div>
    </div>
  )
}

export default WalletTable
