import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <>
      <nav className={style.wrapper}>
        <img src="images/hotel-overlook-logo.png" alt="Logo" className={style.logo} />
        <ul className={style.nav}>
          <li><NavLink to='/'>FORSIDE</NavLink></li>
          <li><NavLink to='/'>HOTELLER OG DESTINATIONER</NavLink></li>
          <li><NavLink to='/'>VÆRELSER</NavLink></li>
          <li><NavLink to='/'>RESERVATION</NavLink></li>
          <li><NavLink to='/'>LOGIN</NavLink></li>
        </ul>
      </nav>
    </>
  )
}
