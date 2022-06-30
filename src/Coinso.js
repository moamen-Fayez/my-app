import React from 'react';
import './Coinso.css';


import { ReactDOM } from 'react-dom/client';

const coinso = ({name, price, rank, icon, symbol, websiteUrl}) => {
  return (
    <div className='container'>
        <img src={icon} alt='the Coins icon'/>
        <h2>{name}</h2>
        <h3>Symbol: {symbol}</h3>
        <h3>Price: {Math.round(price)}</h3>
        <h3>Rank: {rank}</h3>
        <h3><button className='ahr'><a href={websiteUrl}>Website</a></button></h3>
        
    </div>
  )
}

export default coinso