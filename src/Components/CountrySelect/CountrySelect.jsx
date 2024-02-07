import React from 'react'
import style from './CountrySelect.module.scss'
import { NavLink } from 'react-router-dom'

export const CountrySelect = () => {
    return (
        <>
            <ul className={style.select}>
                <li><NavLink to='/countries/danmark'>Danmark</NavLink></li>
                <li><NavLink to='/countries/sverige'>sverige</NavLink></li>
                <li><NavLink to='/countries/norge'>norge</NavLink></li>
                <li><NavLink to='/countries/finland'>finland</NavLink></li>
                <li><NavLink to='/countries/island'>island</NavLink></li>
                <li><NavLink to='/countries/tyskland'>tyskland</NavLink></li>
                <li><NavLink to='/countries/polen'>polen</NavLink></li>
            </ul>
        </>
    )
}
