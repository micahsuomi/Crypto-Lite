import React, { useContext } from 'react'

import ViewWallet from '../../components/ViewWallet'
import { ThemeContext } from '../../contexts'

const Wallet = (props: any) => {
  const { theme } = useContext(ThemeContext)
  const id = props.match.params.id
  const filteredWallet = props.wallets.find((wallet: any) => {
    return wallet.Id === id
  })
  console.log(filteredWallet)
  return (
    <div className="view-wallet__container"
      style={{ backgroundColor: theme.viewItemColor }}>
      <ViewWallet
        key={filteredWallet.Id}
        id={filteredWallet.Id}
        url={filteredWallet.Url}
        logo={filteredWallet.LogoUrl}
        name={filteredWallet.Name}
        security={filteredWallet.Security}
        anonymity={filteredWallet.Anonymity}
        easeOfUse={filteredWallet.EaseOfUse}
        platforms={filteredWallet.Platforms}
        coins={filteredWallet.Coins}
        features={filteredWallet.WalletFeatures}
        source={filteredWallet.SourceCodeUrl}
        affiliate={filteredWallet.AffiliateURL}
        ratings={filteredWallet.avgRating}
      />
    </div>
  )
}

export default Wallet
