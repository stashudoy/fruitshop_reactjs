import React, { Component } from 'react'
import s from './AboutUs.module.css'
const AboutUs = () => {
    return (
      <div className={s.about}>
            <h3>О нас</h3>
            <p>В приложении Fruit Shop применяются технологии: Javascript, ReactJS и NodeJS. </p>
           <p> Код приложения можно посмотреть в репозитории: <a href='https://github.com/stashudoy/fruitshop_reactjs' >https://github.com/stashudoy/fruitshop_reactjs</a>
            </p>
      </div>
    )
  }


export default AboutUs