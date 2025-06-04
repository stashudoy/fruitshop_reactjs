import React, { Component } from 'react'
import s from './CartProduct.module.css'

const CartProduct = (props) => {

    let dellProduct = () => {
        console.log(props.id)
        props.dellProduct(props.id)
    }


    return (
      <div className={s.cartProduct}>
        
      <div>
        
        {props.id}<img src ={"./img/" + props.img}/>{props.title}<b>${props.price}</b>
      
      <button  onClick={dellProduct}>Удалить</button>
      
      
      </div>
      </div>  
    )
  }


export default CartProduct