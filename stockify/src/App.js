import React from 'react';
import Stockheader from './Components/stocklist/Stockheader';
import './better.css';
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
];

  return (
      
    <body >

    <table>
      
    <tr>
      <Stockheader items = {Object.keys(ROWS[0])}/>
    </tr>

    <Stocklist items = {ROWS}/>

    </table> 

    </body>

  );
}

export default App;
