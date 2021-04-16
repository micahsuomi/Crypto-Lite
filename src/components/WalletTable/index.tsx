import React from 'react'

import { WalletTableProps } from '../../types'
import WalletItem from '../../components/WalletItem'

import './style.scss'

const WalletTable = ({ cryptoWallets }: WalletTableProps) => {
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
  return <div className="wallets__wrapper">{walletList}</div>
}

export default WalletTable
