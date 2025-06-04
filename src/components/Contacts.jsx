import React, { Component } from 'react'
import s from './Contacts.module.css'
const Contacts = () =>  {
    return (
        <div className={s.contacts}>
        <h3>Контакты</h3>
        <p><b>Mail:</b> stashudoy@mail.ru</p>
       <p><b>Телефон:</b> +7(910)192-59-01</p>
       <p><b>Станислав</b></p>
  </div>
    )
}
 

export default Contacts