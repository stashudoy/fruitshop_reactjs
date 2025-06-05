import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'




export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)  // cartOpen - само состояние, setCartOpen - ф-ия состояния, используем хук useState c параметром по умолчанию false
    //устанавливаем противоположное значение при клике onClick={()=> setCartOpen(cartOpen =!cartOpen)} , а не cartOpen = true
    
  return (
     <header>
        <div>
            <span className='logo'>Fruit Shop</span>
            <ul className={s.link}>
                <li><NavLink to="/">Магазин</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/cart">Корзина</NavLink></li>
               

                </ul>
  
        </div>
        
        <div className='presentation'></div>
    </header>
  )
}
