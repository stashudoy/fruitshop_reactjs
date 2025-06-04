import React, { Component } from 'react'
import CartProduct from './CartProduct'
import s from './Cart.module.css'



const Cart = (props) => {
  let cartName = "Cart"
  let Sum = 0
  let cartPrice = props.cart.map((el) => {
  Sum = Sum + el.price
  
})

  let cartElements = props.cart.map(el => (<CartProduct key={el.id}  img={el.img} title={el.title} id={el.id} price={el.price} dellProduct={props.dellProduct}/>))
    return (
      <div className={s.h1tag}>
          <div><h1>{cartName}</h1></div>
          {cartElements}
          <div>Цена:{Sum}</div>
      </div>
    )
  }


export default Cart