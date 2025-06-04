import React, { Component } from 'react'
import Product from './Product'



const Shop = (props) =>  {

    let shopElements = props.products.map(el => (<Product key={el.id}  img={el.img} title={el.title} id={el.id} price={el.price} addProduct={props.addProduct}/>))


    return (
      <main>
                {shopElements}
      </main>
    )
  }


export default Shop