import React from 'react';
import Stockrow from './Stockrow';

const Stockheader = props => {
    
  return (

   props.items.map( head =>
      <th> {head} </th>
     )

  );
}

export default Stockheader;