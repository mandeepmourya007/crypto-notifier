import React from 'react';

const Stockrow = props => {

  var temp = [];
  // temp = props.item;
  // var ky = Object.keys(temp)

  // var ans = [];
  // for (var i = 0; i < ky.length; i++) {
  //   if (ky[i] == 'roi') continue;
  //   ans.push(<td> {temp[ky[i]]} </td>)
  // }

  return (
    // <tr> {ans} </tr>
    <tr>    <td> {props.name}</td>
      <td>  <img src={props.image} width="50px" /> </td>
      <td> {props.price}</td>
      <td> {props.symbol}</td>
      <td> {props.marketcap}</td>
      <td> {props.volume}</td>
      <td> {props.priceChange}</td>
    </tr >


  )
}

export default Stockrow;