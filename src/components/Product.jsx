import React, { Component } from 'react'
import s from './Product.module.css'

const Product = (props) => {

  let addProduct = () => {
        props.addProduct(props.id)
        console.log(props.id)
  }

    return (
        
     
        
        <div className='item'>
        <img src ={"./img/" + props.img}/>
        <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <b>${props.price}</b>
        <div ><button onClick={addProduct}>Добавить в корзину</button></div> 
        </div>

      </div>
        
        
   

    )
  }


export default Product