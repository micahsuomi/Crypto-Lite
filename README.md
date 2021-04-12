# Crypto Lite

![Main](./public/readme-imgs/crypto-lite-main.JPG)

Crypto Lite displays real market data from CryptoCompare's APIs: it features market and historical data, a cryptocurrency converter, a watchlist cart where to add your favorite crypto, cryptocurrency wallets data, and exchanges, together with live news and a theme switch.

# Table of contents:

- [Tech Stack Used](#tech-stack-used)
- [Home](#home)
- [Market Prices](#market-prices)
- [Historical Data](#historical-data)
- [Exchanges](#exchanges)
- [Wallets](#wallets)
- [News](#news)
- [Watchlist](#watchlist)
- [Currency Converter](#currency-converter)
- [Theme Switch](#theme-switch)
- [Deployment](#deployment)

# Tech Stack Used
- TypeScript
- React Js
- Redux
- Redux-thunk
- Redux-saga
- Context API
- DevExtreme React Charts
- Sass

## Home

The home page displays a section of most pages, like market prices, exchanges, wallets and news. The hero section has a dark theme switched with Context API.

![Home Page](./public/readme-imgs/home-page.png)
![Home Page](./public/readme-imgs/menu.png)

## Market Prices

In this page users can view market prices and price changes for the top 100 cryptocurrencies based on the CryptoCompare API. The page displays the top 5 gainers and top 5 losers updated in real time based on percentage change per day. The market prices table has a table head where the user can sort crypto based on price, percentage change, market cap and circulating supply. Each crypto displayed has an add to watchlist button to allow the user to add selected currencies to a watchlist. By clicking on each coin, users can view more details for each cryptocurrency.

![Market Prices](./public/readme-imgs/market-prices.png)
![Market Prices](./public/readme-imgs/coin-info.JPG)

## Historical Data

Historical data shows daily pairs and daily exchange volume data for currencies based on user inputs. The charts and tables are based on updated daily data from the CryptoCompare API.

![Historical Data](./public/readme-imgs/historical-data.png)

## Exchanges

This page displays a list of available exchanges that users can sort by name, volume, country, grade, gradepoints and rating. Grades vary from A to E and grade points from 0 to 100. By clicking on View Details, users can view more detailed data for each exchange.

![Exchanges](./public/readme-imgs/exchanges.png)

## Wallets
![Wallets](./public/readme-imgs/wallets.png)
![Wallets](./public/readme-imgs/view-wallet.JPG)

## News
![News](./public/readme-imgs/news.png)

## Watchlist
![Watchlist](./public/readme-imgs/watchlist.png)

## Currency Converter
![Currency Converter](./public/readme-imgs/currency-converter.png)

## Theme Switch
![Theme Switch](./public/readme-imgs/dark-mode.png)

## Deployment
The app is deployed on Netlify and the demo can be found at the following link: https://crypto-lite-tracker.netlify.app/



