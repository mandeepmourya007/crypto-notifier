import React from 'react';
import Stockrow from './Stockrow';

const Stockheader = () => {
  
  const ROWS = [
      {
          id: 's1',
          name: 'A',
          curval: 100,
          lowval: 50,
          higval: 150
      }
  ];
  return <Stockrow items={ROWS} />
}

export default Stockheader;