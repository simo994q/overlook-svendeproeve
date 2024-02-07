import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <>
      <nav className={style.wrapper}>
        <img src="../../src/assets/images/hotel-overlook-logo.png" alt="Logo" className={style.logo} />
        <ul className={style.nav}>
          <li><NavLink to='/'>FORSIDE</NavLink></li>
          <li><NavLink to='/countries/danmark'>HOTELLER OG DESTINATIONER</NavLink></li>
          <li><NavLink to='/rooms'>VÆRELSER</NavLink></li>
          <li><NavLink to='/reservations'>RESERVATION</NavLink></li>
          <li><NavLink to='/login'>LOGIN</NavLink></li>
        </ul>
      </nav>
    </>
  )
}
