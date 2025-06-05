import React, { Component } from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import s from './Contacts.module.css'
const Contacts = () =>  {
    return (
        <div className={s.contacts}>
        <h1>Контакты</h1>
        <p><b>Developer: Станислав</b></p>
        <p><b><FaMobileAlt/></b><span>+7(910)192-59-01</span> </p>
        <p><b><CiMail/></b><span>stashudoy@mail.ru</span>  </p>
       
       
  </div>
    )
}
 

export default Contacts