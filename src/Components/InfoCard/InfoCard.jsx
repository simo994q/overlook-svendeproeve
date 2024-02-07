import React from 'react'
import style from './InfoCard.module.scss'

export const InfoCard = ({img, title, desc}) => {
    return (
        <>
            <div className={style.wrapper}>
                <img src={img} alt="" />
                <figure className={style.cardCaption}>
                    <h3>{title}</h3>
                    <figcaption className={style.desc}>{desc.slice(0,150)}...</figcaption>
                </figure>
            </div>
        </>
    )
}
