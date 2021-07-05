import React from 'react';
import Stockheader from './Components/stocklist/Stockheader';
import './better.css';

const App = () => {

  return (
      
    <body >

    <table>

      <tr>
        <th> Name </th>
        <th> Current Value </th>
        <th> Low </th>
        <th> High </th>
      </tr> 

      <Stockheader /> 
      

    </table> 

    </body>

    


  );
}

export default App;
