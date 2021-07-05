import React from 'react'
import Stockrow from './Stockrow';

const Stocklist = props => {

    if (props.items.length === 0) {
        return (
          <tr >
              <h2>No Rows</h2>
          </tr>
        );
      }

    return (
       props.items.map(it =>
         <Stockrow item = {it} /> 
        )
    );
}

export default  Stocklist;
