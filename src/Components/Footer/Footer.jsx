import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.copyright}>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
        <div className={style.socials}>
          <img src="images/Icon-awesome-facebook.png" alt="" />
          <img src="images/Icon-awesome-twitter-square.png" alt="" />
        </div>
        <ul className={style.nav}>
          <li><NavLink to='/'>FORSIDE</NavLink></li>
          <li><NavLink to='/'>HOTELLER OG DESTINATIONER</NavLink></li>
          <li><NavLink to='/'>VÆRELSER</NavLink></li>
          <li><NavLink to='/'>RESERVATION</NavLink></li>
          <li><NavLink to='/'>LOGIN</NavLink></li>
        </ul>
      </div>
    </>
  )
}
