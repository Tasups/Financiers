import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';

// Polygon API docs https://polygon.io/docs/stocks/getting-started

// Gives you the entire list of tickers
const tickers = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"
const tickersWithSearch = "https://api.polygon.io/v3/reference/tickers?search=search_term&active=true&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

// Ticker Details requires the ticker and the date in question
const tickerDetails = "https://api.polygon.io/v3/reference/tickers/AFL?date=2023-03-07&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

const something = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

// this is AFL, Aflac, ticker for one day, 01-09-2023, showing hourly results (9 total)
const oneDayHourly = "https://api.polygon.io/v2/aggs/ticker/AFL/range/1/hour/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=5000&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

const oneDay5minutes = "https://api.polygon.io/v2/aggs/ticker/AFL/range/5/minute/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=5000&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"
const oneDay5minutesFORMAT = "https://api.polygon.io/v2/aggs/ticker/{stocksTicker}/range/{multiplier}/{timespan}/{from}/{to}?adjusted=true&sort=asc&limit=5000&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"
// this is AFL, Aflac, ticker for one month, 01-09-2023 to 02-09-2023, showing daily results (23 total)
const oneMonthDaily = "https://api.polygon.io/v2/aggs/ticker/AFL/range/1/day/2023-01-09/2023-02-09?adjusted=true&sort=asc&limit=5000&apiKey=t_MS1QLfZrJGkotOfuYiqC2643_qYUaa"

// FOR THE CHART, TRY THIS D3 PIECE 
// https://observablehq.com/@d3/candlestick-chart


function App() {
  const [data, setData] = useState([])
  const [tickerNames, setTickerNames] = useState([])
  
  useEffect(() => {
    axios
      .get(tickers)
      .then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }, [tickerNames])

  const getData = () => {
     axios
      .get(oneDay5minutes)
      .then(res => {
        setData(res.data.results)
      })
      .catch(err => console.log(err))
  }
  
  const dateConversion = () => {
    let date = new Date();
    let dateToString = date.toString();
    let slicedDate = dateToString.slice(0, -38);
    return slicedDate;
  };
  
  
  // {posts?.map((post) => (
  //       <div className="posts__card" key={post._id}>
  //         <h4>{post.title}</h4>
  //         <h5>{post.description}</h5>
  //         <div className="posts__button-container">
  //           <Button
  //             className="posts__buton"
  //             variant="info"
  //             onClick={() => updatePost(post)}
  //           >
  //             UPDATE
  //           </Button>
  //           <Button
  //             onClick={() => deletePost(post._id)}
  //             className="posts__buton"
  //             variant="danger"
  //           >
  //             DELETE
  //           </Button>
  //         </div>
  //       </div>
  //     ))}
  
  return (
    <div className="App">
      <button onClick={getData}>GET DATA</button>
      <button onClick={() => console.log(data)}>LOG DATA</button>
      <div>
        {
          data?.map((el) => (
            <React.Fragment>
              <div className="ticker__card" key={el.name}>
                <h5>Opening: {el.o}</h5>
                <h5>High: {el.h}</h5>
                <h5>Low: {el.l}</h5>
                <h5>Closing: {el.c}</h5>
                <h5>Date: {el.t}</h5>
              </div>
            </React.Fragment>
          ))
        }
      </div>
      <div id="chart">
      </div>
    </div>
  );
}

export default App;
