import React  from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';

const Stockrow = props => {

  // var temp = [];
  // temp = props.item;
  // var ky = Object.keys(temp)

  // var ans = [];
  // for (var i = 0; i < ky.length; i++) {
  //   if (ky[i] == 'roi') continue;
  //   ans.push(<td> {temp[ky[i]]} </td>)
  // }


  let item = {
    "name" :props.name ,
  "symbol" : props.symbol,
  "price": props.price,
  "marketcap": props.marketcap,
  "volume": props.volume,
  "image":props.image,
  "priceChange": props.priceChange
  } 


  return (
    
    
    <tr>    <td> {props.name}</td>
      <td>  <img src={props.image} width="50px" /> <FontAwesomeIcon icon={faPlusCircle} onClick = {props.addtofav } /> </td>
      <td> {props.price}</td>
      <td> {props.symbol}</td>  
      <td> {props.marketcap}</td>
      <td> {props.volume}</td>
      <td> {props.priceChange}</td>
    </tr >



  )
}

export default Stockrow;