import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import CryptoList from './components/cryptoList/CryptoList';
import VolumesTopSymbols from './components/top-symbols-volumes/VolumesTopSymbols';
import TopCryptoByMarketCap from './components/topmarketcap/TopCryptoByMarketCap';
import NewsFeedList from './components/news/NewsFeedList';
import NewsList from './components/news/NewsList';
import TopVolumesExchanges from './TopVolumesExchanges';
import ExchangesList from './ExchangesList';


/*
  const App = () => {
  const cryptoURL = "https://api.coinmarketcap.com/v1/ticker/?limit=100";
  const [cryptos, crypto] = useState([]);

  useEffect( ()=> {
  getCrypto();
  }, []);
  
  const getCrypto = async () => {
    const response = await fetch(`${cryptoURL}`);
    const data = await response.json();
    console.log(data);

  };*/
/*
class App extends Component {
  state={
    cryptoinfoarray: [],
};

  addCrypto = (cryptoinfo) => {
    console.log(cryptoinfo);
    this.setState(prevState =>({
      cryptoinfoarray: [...prevState.cryptoinfoarray, cryptoinfo],
    }));
  }

render() {
  
return (
  <div>
    <div className="Header">
      <h1 className="Dashboard-Title">Crypto Dashboard</h1>
    </div>
    
    <Form onSubmit={this.addCrypto} />
    <CryptoList cryptoinfoarray={this.state.cryptoinfoarray} />
  
    </div>
  )
}  

}*/

function App() {
  return(
    <div className="App">
    <div className="App-top">
      
      <Navbar />

    <div className="App">
      
      <Header />
      <CryptoList />
      <VolumesTopSymbols />
      <TopVolumesExchanges />
      <TopCryptoByMarketCap />
      <NewsList />
      <NewsFeedList />
      <ExchangesList />
  
    </div>
    </div>
    </div>
  )
}


export default App;
