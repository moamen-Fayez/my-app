import { useEffect, useState } from 'react';
import './App.css';
import  Axios from 'axios'; 
import Coinso from './Coinso'

function App() {

  const [listOfCoins, setLstOfCoins] = useState([])
  const [xval, setXval] = useState(listOfCoins)
  useEffect(() => {Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response)=> {
    setLstOfCoins(response.data.coins);
  }) },[]);
  // const handler = (e) => {
  //   setXval(e.target.value)
  // }
 const yval = listOfCoins.filter((coin) => {
  return coin.name.toLowerCase().includes(xval);
 })
 


  return (
    <div className="App">
      <nav className='Navbar'>
      <input className='inp' onChange={(e) => setXval(e.target.value)} type='text' placeholder='Coins...' />  
      </nav> 
      <div className='Apptwo'>
      {yval.map((item) => <Coinso key={item.id} name={item.name} price={item.price} 
      rank={item.rank} symbol={item.symbol} icon={item.icon} websiteUrl={item.websiteUrl} 
      /> )} 
      
      </div>
      
    </div>
  );
}

export default App;
