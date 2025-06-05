import React, { Component } from 'react'
import s from './CartProduct.module.css'

const CartProduct = (props) => {

    let dellProduct = () => {
        props.dellProduct(props.id)
    }


    return (
      <div className={s.cartProduct}>
        
      <div>
        
        <img src ={"https://stashudoy.github.io/fruitshop_reactjs/img/" + props.img} /><span>{props.title}<b><span className={s.price}>${props.price}</span></b></span>
      
      <button  onClick={dellProduct}>Удалить</button>
      
      
      
      </div>
      </div>  
    )
  }


export default CartProduct