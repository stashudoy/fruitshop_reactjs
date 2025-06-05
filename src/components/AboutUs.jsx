import React, { Component } from 'react'
import s from './AboutUs.module.css'
const AboutUs = () => {
    return (
      <div className={s.about}>
            <h3>Технологии</h3>
            <p>В приложении <b>Fruit Shop</b> применяются технологии: <b>Javascript, ReactJS и NodeJS</b>. </p>
           <p> Код приложения можно посмотреть в репозитории: <a href='https://github.com/stashudoy/fruitshop_reactjs' >https://github.com/stashudoy/fruitshop_reactjs</a>
            </p>
      </div>
    )
  }


export default AboutUs