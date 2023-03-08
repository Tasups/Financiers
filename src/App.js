import { useState } from 'react'
import axios from 'axios'

import './App.css';

// Polygon API docs https://polygon.io/docs/stocks/getting-started

// Gives you the entire list of tickers
const tickers = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"
const tickersWithSearch = "https://api.polygon.io/v3/reference/tickers?search=search_term&active=true&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

// Ticker Details requires the ticker and the date in question
const tickerDetails = "https://api.polygon.io/v3/reference/tickers/AFL?date=2023-03-07&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

// Gives you the high, low, open, close, and volume of a certain date of a ticker
const dailyOpenAndClose = "https://api.polygon.io/v1/open-close/AFL/2023-03-07?adjusted=false&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"


function App() {
  const [data, setData] = useState()
  
  const getData = () => {
     axios
      .get("https://api.polygon.io/v3/reference/tickers?active=true&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa")
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className="App">
      <button onClick={getData}>GET DATA</button>
      <button onClick={() => console.log(data)}>LOG DATA</button>
    </div>
  );
}

export default App;
