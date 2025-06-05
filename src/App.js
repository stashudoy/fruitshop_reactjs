import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'

import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Contacts from "./components/Contacts"
import AboutUs from "./components/AboutUs"
import Cart from "./components/Cart"
import Shop from './components/Shop'
import { addProduct } from "./redux/state"



const App = (props) =>  {
 
  return (
    <BrowserRouter>
    <div className='wrapper'>
        <Header  />
      
        <Routes basename="/fruitshop_reactjs/">
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/cart' element={<Cart cart={props.state.cart} dellProduct={props.dellProduct}/>} />
          <Route path='/' element={<Shop products={props.state.items} addProduct={props.addProduct} />} />
          
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}  


export default App
