import React from 'react';

const Stockrow = props => {

    if (props.items.length === 0) {
        return (
          <div >
              <h2>No Rows</h2>
          </div>
        );
      }
    
      return (

  
            
        props.items.map(stock => 
          <tr> 
            <td> {stock.name} </td>
            <td> {stock.curval} </td>
            <td> {stock.lowval} </td>
            <td> {stock.higval} </td>
          </tr>
            )

      );
}

export default Stockrow;