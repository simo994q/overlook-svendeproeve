import React from 'react'
import style from './NoInfoCard.module.scss'

export const NoInfoCard = ({img, title, onClick}) => {
    return (
        <>
            <div className={style.wrapper}>
                <img src={img} alt="" />
                <figure className={style.cardCaption}>
                    <h3>{title}</h3>
                </figure>
            </div>
        </>
    )
}
