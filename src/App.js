import './App.css';
import React, { useState } from 'react';
import Quotes from './Quotes';
import data from './data';

function App() {
  const [quotes, setQuotes] = useState(data);
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState('');

  const getQuote = async () => {
    const randomNum = await Math.floor(Math.random() * quotes.length);
    const randomQuote = await quotes[randomNum];
    setQuote(randomQuote);
    setColor(randomQuote.color);
  };

  const handleClick = () => {
    getQuote();
  };
  console.log(quote);

  return (
    <div className='App' style={{ backgroundColor: color }}>
      <Quotes quote={quote} handleClick={handleClick} color={color} />
    </div>
  );
}

export default App;
