import React, { useEffect, useState } from 'react';
import Stockheader from './Components/stocklist/Stockheader';
// import Stockheader from "./Components/stocklist/Stockheader"
import './table.css';
import './header.css';
import Stocklist from './Components/stocklist/Stocklist';

const App = () => {
  const [crypto, setCrypto] = useState([]);
  const [search_txt, setSearch] = useState("");
  const headers = ["name",
    "symbol",
    "price",
    "marketcap",
    "volume",
    "image",
    "priceChange"]

  const getdata = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
      const data = await res.json();

      console.log(data)
      setCrypto(data);

    } catch (error) {

    }
  }

  useEffect(() => {
    getdata();

    console.log("crypto", crypto);


  }, [])


  var ROWS = crypto

  const getInput = (e) => {
    setSearch(e.target.value)
  }
  ROWS = crypto.filter(c =>
    c.name.toLowerCase().includes(search_txt.toLowerCase()));
  return (

    <html className="bg">
      <body>
        <div class="topnav">
          <a class="active" href="#home">MANDEEP</a>
          <a href="#about">SANJAY</a>
          <a href="#contact">TARUN</a>
          <input type="text" placeholder="Broo.." onChange={getInput} />
        </div>

        <br />

        <table id="table">
          <tr>

            {/* <Stockheader items={Object.keys(ROWS[0])} /> */}
            <Stockheader items={headers} />
          </tr>
          <Stocklist yo={ROWS} />
        </table>

      </body>
    </html>

  );
}

export default App;
