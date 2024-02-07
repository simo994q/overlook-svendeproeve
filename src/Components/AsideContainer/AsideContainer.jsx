import React from 'react'
import style from './AsideContainer.module.scss'


export const AsideContainer = ({ children }) => {
    return (
        <>
            <div className={style.wrapper}>
                {children}
            </div>
        </>
    )
}
