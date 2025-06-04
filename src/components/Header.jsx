import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return(<div>
        {props.orders.map(el => (<Order onDelete={props.onDelete} key = {el.id} item={el}/>))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothing = () => {
    return(<div className='empty'><h2>Ваша корзина пуста!</h2></div>)
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)  // cartOpen - само состояние, setCartOpen - ф-ия состояния, используем хук useState c параметром по умолчанию false
    //устанавливаем противоположное значение при клике onClick={()=> setCartOpen(cartOpen =!cartOpen)} , а не cartOpen = true
    
  return (
     <header>
        <div>
            <span className='logo'>Fruit Shop</span>
            <ul className={s.link}>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/cart">Корзина</NavLink></li>
                <li><NavLink to="/shop">Магазин</NavLink></li>

                </ul>
                <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>  
                {cartOpen && (
                    <div className='shop-cart'>
                                {props.orders.length > 0 ? 
                                   showOrders(props) : showNothing()}
                    </div>
                )}    
        </div>
        
        <div className='presentation'></div>
    </header>
  )
}
