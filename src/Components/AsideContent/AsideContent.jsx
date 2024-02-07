import React from 'react'
import style from './AsideContent.module.scss'

export const AsideContent = ({ children }) => {
    return (
        <>
            <div className={style.wrapper}>
                {children}
            </div>
        </>
    )
}
