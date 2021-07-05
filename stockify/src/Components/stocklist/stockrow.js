import React from 'react';

const Stockrow = props => {
      
      var temp = [];
      temp = props.item;
      var ky = Object.keys(temp)
      
      var ans = [];

      for(var i = 0; i < ky.length; i++) 
      {
        ans.push(<td> {temp[ky[i]]} </td>)
      }

      return (
         <tr> {ans} </tr>
      );
}

export default Stockrow;