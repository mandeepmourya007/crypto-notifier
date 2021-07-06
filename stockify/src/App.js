import React from 'react';
import Stockheader from './Components/stocklist/Stockheader';
import './table.css';
import './header.css';
import Stocklist from './Components/stocklist/Stocklist';

const App = () => {


  const ROWS = [
    {
        Name: 'A',
        Curval: 100,
        Lowval: 50,
        Higval: 150
    }

    ,

    {
      Name: 'A',
      Curval: 100,
      Lowval: 50,
      Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }

   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
   ,
   {
    Name: 'A',
    Curval: 100,
    Lowval: 50,
    Higval: 150
   }
];

  return (

  <html className = "bg">  
  <body>

    <div class="topnav">
        <a class="active" href="#home">MANDEEP</a>
        <a href="#about">SANJAY</a>
        <a href="#contact">TARUN</a>
        <input type="text" placeholder="Broo.." />
    </div>

    <br />

    <table  id="table">   
      <tr>
        <Stockheader items = {Object.keys(ROWS[0])}/>
      </tr>
        <Stocklist items = {ROWS}/>
    </table>

  </body>
  </html>

  );
}

export default App;
